import { Injectable } from '@nestjs/common';
import { CreateInsumoDto } from './dto/create-insumo.dto';
import { UpdateInsumoDto } from './dto/update-insumo.dto';
import { PrismaService } from 'src/databases/prisma.service';

@Injectable()
export class InsumosService {
  constructor(private readonly prismaService: PrismaService) {}

  async findOneByTitle(titulo: string) {
    return await this.prismaService.insumo.findFirst({
      where: { titulo }
    })
  }

  async create(createInsumoDto: CreateInsumoDto) {
    const insumo = await this.findOneByTitle(createInsumoDto.titulo);
    if (!insumo) {
      return await this.prismaService.insumo.create({
        data: createInsumoDto,
      });
    }
    return { data: { message: 'Titulo ja cadastrado'}}
  }

  async findAll() {
    return await this.prismaService.insumo.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.insumo.findFirst({ where: { id } });
  }

  async update(id: number, updateInsumoDto: UpdateInsumoDto) {
    return await this.prismaService.insumo.update({
      where: { id },
      data: {
        titulo: updateInsumoDto.titulo,
        descricao: updateInsumoDto.descricao,
        idCategoria: updateInsumoDto.idCategoria,
        unidadeMedida: updateInsumoDto.unidadeMedida,
      },
    });
  }

  async remove(id: number) {
    return await this.prismaService.insumo.delete({where: { id } });
  }
}
