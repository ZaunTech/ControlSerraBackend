import { Injectable } from '@nestjs/common';
import { CreateCotacaoDto } from './dto/create-cotacao.dto';
import { UpdateCotacaoDto } from './dto/update-cotacao.dto';
import { PrismaService } from 'src/databases/prisma.service';

@Injectable()
export class CotacaosService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createCotacaoDto: CreateCotacaoDto) {
    return await this.prismaService.cotacao.create({
      data: createCotacaoDto,
    });
  }

  async findAll() {
    return await this.prismaService.cotacao.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.cotacao.findFirst({
      where: {
        id,
      }
    });
  }

  async update(id: number, updateCotacaoDto: UpdateCotacaoDto) {
    return this.prismaService.cotacao.update({
      where: { id },
      data: updateCotacaoDto,
    });
  }

  async remove(id: number) {
    return await this.prismaService.cotacao.delete({ where: { id } });
  }
}

/* CRIAR O ITEM COM A LISTA
async create(createCotacaoDto: CreateCotacaoDto) {
    return await this.prismaService.cotacao.create({
      data: {
        data: createCotacaoDto.data,
        valor: createCotacaoDto.valor,
        listaInsumos: {
          create: createCotacaoDto.listaInsumo,
        },
      },
    });

    MOSTRAR TODOS OS SUBITEMS DE UM ITEM COM VETOR
  async findOne(id: number) {
  return await this.prismaService.cotacao.findFirst({
    where: {
      id,
    },
    include: {
      listaInsumos: true,
    },
  });
}
  }*/