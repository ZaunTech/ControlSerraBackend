import { Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { PrismaService } from '../../databases/prisma.service';

@Injectable()
export class CategoriasService {
  constructor(private readonly prismaService: PrismaService) {}

  async findOneByTitle(titulo: string) {
    return await this.prismaService.categoria.findFirst({
      where: { titulo },
    });
  }

  async findManyByTitle(titulo: string) {
    return await this.prismaService.categoria.findMany({
      where: { titulo },
    });
  }

  async create(createCategoriaDto: CreateCategoriaDto) {
    const categoria = await this.findOneByTitle(createCategoriaDto.titulo);
    if (!categoria) {
      return await this.prismaService.categoria.create({
        data: {
          titulo: createCategoriaDto.titulo,
          descricao: createCategoriaDto.descricao,
          tipo: createCategoriaDto.tipo,
        },
      });
    }
    return { data: { message: 'Titulo ja cadastrado' } };
  }

  async findAll() {
    return await this.prismaService.categoria.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.categoria.findFirst({ where: { id } });
  }

  async update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    return await this.prismaService.categoria.update({
      where: { id },
      data: {
        tipo: updateCategoriaDto.tipo,
        titulo: updateCategoriaDto.titulo,
        descricao: updateCategoriaDto.descricao
      },
    });
  }

  async remove(id: number) {
    return await this.prismaService.categoria.delete({ where: { id } });
  }
}
