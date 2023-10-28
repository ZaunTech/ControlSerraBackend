import { Injectable } from '@nestjs/common';
import { CreateCotacaoDto } from './dto/create-cotacao.dto';
import { UpdateCotacaoDto } from './dto/update-cotacao.dto';
import { PrismaService } from 'src/databases/prisma.service';

@Injectable()
export class CotacoesService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAllWithPagination(page: number, perPage: number) {
    const skip = (page - 1) * perPage;
    const cotacoes = await this.prismaService.cotacao.findMany({
    skip,
    take: perPage,
  });
  const total = await this.prismaService.cotacao.count();
  return { cotacoes, total };
  }
  async countAllCotacaos() {
    return await this.prismaService.cotacao.count({});
  }
  async create(createCotacaoDto: CreateCotacaoDto) {
    return await this.prismaService.cotacao.create({
      data: createCotacaoDto,
    });
  }

  async findAll() {
    return await this.prismaService.cotacao.findMany();
  }

  async findManyByFornecedor(id: number) {
    return await this.prismaService.cotacao.findMany({
      where: { idFornecedor: id },
    });
  }

  async findManyByInsumo(id: number) {
    return await this.prismaService.cotacao.findMany({
      where: { idInsumo: id },
    });
  }

  async findOne(id: number) {
    return await this.prismaService.cotacao.findFirst({
      where: {
        id,
      },
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
