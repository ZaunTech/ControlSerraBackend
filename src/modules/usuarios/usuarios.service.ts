import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from '../../databases/prisma.service';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UsuariosService {

  constructor(private readonly prismaService: PrismaService) {}

  async findBySenha(senha: string){
    return await this.prismaService.usuario.findFirst({
      where: {senha},
    })
  }
  async create(createUsuarioDto: CreateUsuarioDto) {
    const usuario = await this.findOneByUsuario(
      createUsuarioDto.nome,
      createUsuarioDto.email,
    )
    if (!usuario) {
      const usuarioDados = {
        ...createUsuarioDto,
        senha: await bcrypt.hash(createUsuarioDto.senha, 10),
      };
      
      return await this.prismaService.usuario.create({data: usuarioDados,});
  }
    return {data: {message: 'Usuario ja cadastrado'}};
  }

  async findAllWithPagination(page: number, perPage: number) {
    const skip = (page - 1) * perPage;
    const usuarios = await this.prismaService.usuario.findMany({
    skip,
    take: perPage,
  });
  return {usuarios};
  }

  async findByEmail(email: string){
    return await this.prismaService.usuario.findFirst({
      where: {email},
    });
  }
  async findOneByUsuario(nome:string,email:string){
    return await this.prismaService.usuario.findFirst({
      where: {nome,email}
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
