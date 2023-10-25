import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from '../../databases/prisma.service';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UsuariosService {

  constructor(private readonly prismaService: PrismaService) {}

  async findByEmail(email: string) {
    return await this.prismaService.usuario.findFirst({
      where: {email},
    });
  }
  async findBySenha(senha: string){
    return await this.prismaService.usuario.findFirst({
      where: {senha},
    })
  }
  async create(createUsuarioDto: CreateUsuarioDto) {
    const hashedPassword = await bcrypt.hash(createUsuarioDto.senha, 10);

    const usuarioDados = {
      ...createUsuarioDto,
      senha: hashedPassword,
    };
    return await this.prismaService.usuario.create({
      data: usuarioDados,
    });
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
    
    if (updateUsuarioDto.senha) {
      const hashedPassword = await bcrypt.hash(updateUsuarioDto.senha, 10);
      updateUsuarioDto.senha = hashedPassword;
    }
    return await this.prismaService.usuario.update({
      where: { id },
      data: updateUsuarioDto,
    })
  }

  async remove(id: number) {
    return await this.prismaService.usuario.delete({ where: { id } });
  }
}
