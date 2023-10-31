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
    return { usuarios };
  }

  async create(createUsuarioDto: CreateUsuarioDto) {
    if (
      !(await this.findExistingUsuario(undefined, createUsuarioDto.email)) &&
      !(await this.findExistingUsuario(undefined, createUsuarioDto.cpf))
    ) {
      return await this.prismaService.usuario.create({
        data: createUsuarioDto,
      });
    }

    return { data: { message: 'Usuário com dados repetidos' } };
  }

  async findByEmail(email: string) {
    return await this.prismaService.usuario.findFirst({
      where: { email },
    });
  }

  async findExistingUsuario(id: number, termo: string) {
    if (!termo === undefined) {
      var emailExists = await this.prismaService.usuario.findUnique({
        where: {
          email: termo,
          NOT: {
            id: id,
          },
        },
      });
    }
    if (!termo === undefined) {
      var cpfExists = await this.prismaService.usuario.findUnique({
        where: {
          cpf: termo,
          NOT: {
            id: id,
          },
        },
      });
    }
    if (!emailExists && !cpfExists) {
      return await 0;
    }
    return await 1;
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
      if (
        !(await this.findExistingUsuario(id, updateUsuarioDto.email)) &&
        !(await this.findExistingUsuario(id, updateUsuarioDto.cpf))
      ) {
        return await this.prismaService.usuario.update({
          where: { id },
          data: updateUsuarioDto,
        });
      }

      return { data: { message: 'Usuário com dados repetidos' } };
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
