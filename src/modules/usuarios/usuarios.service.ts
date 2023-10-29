import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from '../../databases/prisma.service';

@Injectable()
export class UsuariosService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAllWithPagination(page: number, perPage: number) {
    const skip = (page - 1) * perPage;
    const usuarios = await this.prismaService.usuario.findMany({
    skip,
    take: perPage,
  });
  return {usuarios};
  }
  async create(createUsuarioDto: CreateUsuarioDto) {
    const usuario = await this.findOneByUsuario(
      createUsuarioDto.nome,
      createUsuarioDto.email,
    )
    if (!usuario) {
    return await this.prismaService.usuario.create({
      data: createUsuarioDto,
    });
  }
  return {data: {message: 'Usuario ja cadastrado'}};
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
    return await this.prismaService.usuario.update({
      where: { id },
      data: updateUsuarioDto,
    })
  }

  async remove(id: number) {
    return await this.prismaService.usuario.delete({ where: { id } });
  }
}
