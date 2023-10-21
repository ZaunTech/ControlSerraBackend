import { Injectable } from '@nestjs/common';
import { CreateListaInsumoDto } from './dto/create-lista-insumo.dto';
import { UpdateListaInsumoDto } from './dto/update-lista-insumo.dto';
import { PrismaService } from 'src/databases/prisma.service';

@Injectable()
export class ListaInsumosService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createListaInsumoDto: CreateListaInsumoDto) {
    return await this.prismaService.listaInsumo.create({
      data: createListaInsumoDto,
    });
  }

  async findAll() {
    return await this.prismaService.listaInsumo.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.listaInsumo.findFirst({ where: { id } });
  }

  async update(id: number, updateListaInsumoDto: UpdateListaInsumoDto) {
    return await this.prismaService.listaInsumo.update({
      where: { id },
      data: {
        quantidade: updateListaInsumoDto.quantidade,
        idProduto: updateListaInsumoDto.idProduto,
        idCotacao: updateListaInsumoDto.idCotacao,
        idInsumo: updateListaInsumoDto.idInsumo,
      },
    });
  }

  async remove(id: number) {
    return await this.prismaService.listaInsumo.delete({ where: { id } });
  }
}
