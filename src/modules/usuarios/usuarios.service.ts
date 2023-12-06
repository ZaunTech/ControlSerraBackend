import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/databases/prisma/prisma.service';
import { ChangePasswordDto } from './dto/changePassword.dto';

@Injectable()
export class UsuariosService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAllWithPagination(
    page: number,
    perPage: number,
    titulo_like?: string,
  ) {
    const skip = (page - 1) * perPage;
    let usuarios = Usuario[''];
    if (titulo_like) {
      usuarios = await this.prismaService.usuario.findMany({
        skip,
        take: perPage,
        where: {
          OR: [
            { nome: { contains: titulo_like, mode: 'insensitive' } },
            { email: { contains: titulo_like, mode: 'insensitive' } },
            { cpf: { contains: titulo_like , mode: 'insensitive'} },
          ],
        },
      });
    } else {
      usuarios = await this.prismaService.usuario.findMany({
        skip,
        take: perPage,
      });
    }
    return usuarios;
  }

  async create(createUsuarioDto: CreateUsuarioDto) {
    if (true) {
      createUsuarioDto.senha = await bcrypt.hash(createUsuarioDto.senha, 10);
      const usuario = await this.prismaService.usuario.create({
        data: createUsuarioDto,
      });
      usuario.senha = undefined;
      return usuario;
    }
    return { data: { message: 'Cpf ja cadastrado' } };
  }

  async findByEmail(email: string) {
    const usuario = await this.prismaService.usuario.findFirst({
      where: { email },
    });
    return usuario;
  }

  async changePassword(id: number, changePasswordDto: ChangePasswordDto) {
 
    const pass = await bcrypt.hash(changePasswordDto.password, 10);

    const usuario = await this.prismaService.usuario.update({
      where: { id },
      data: {
        senha: pass,
      },
    });
    return usuario;
  }

  async findManyByEmail(email: string) {
    const usuarios = await this.prismaService.usuario.findMany({
      where: { email },
    });
    return usuarios;
  }

  async countAll() {
    return await this.prismaService.usuario.count();
  }

  async findAll() {
    return await this.prismaService.usuario.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.usuario.findFirst({ where: { id } });
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    const usuarioExists = await this.findOne(id);
    if (usuarioExists) {
      return await this.prismaService.usuario.update({
        where: { id },
        data: updateUsuarioDto,
      });
    }
    return { data: { message: 'Usuário não existe' } };
  }

  async remove(id: number) {
    const usuarioExists = await this.findOne(id);
    if (usuarioExists) {
      return await this.prismaService.usuario.delete({ where: { id } });
    }
    return { data: { message: 'Usuário não existe' } };
  }
}
