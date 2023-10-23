import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from '../../databases/prisma.service';

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
    return await this.prismaService.usuario.create({
      data: {
        tipoUsuario: createUsuarioDto.tipoUsuario,
        nome: createUsuarioDto.nome,
        cpf: createUsuarioDto.cpf,
        email: createUsuarioDto.email,
        telefone: createUsuarioDto.telefone,
        senha: createUsuarioDto.senha
      }
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
      data: {
        tipoUsuario: updateUsuarioDto.tipoUsuario,
        nome: updateUsuarioDto.nome,
        cpf: updateUsuarioDto.cpf,
        email: updateUsuarioDto.email,
        telefone: updateUsuarioDto.telefone,
        senha: updateUsuarioDto.senha
      }
    })
  }

  async remove(id: number) {
    return await this.prismaService.usuario.delete({ where: { id } });
  }
}
