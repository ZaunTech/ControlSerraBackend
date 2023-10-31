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
    return { cotacoes };
  }
  async countAllCotacaos() {
    return await this.prismaService.cotacao.count({});
  }
  async create(createCotacaoDto: CreateCotacaoDto) {
    const fornecedorExists = await this.prismaService.fornecedor.findFirst({
      where: { id: createCotacaoDto.idFornecedor },
    });
    if (fornecedorExists) {
      const insumoExists = await this.prismaService.insumo.findFirst({
        where: { id: createCotacaoDto.idInsumo },
      });
      if (insumoExists) {
        return await this.prismaService.cotacao.create({
          data: createCotacaoDto,
        });
      }
      return { data: { message: 'Insumo não existe' } }
    }
    return { data: { message: 'Fornecedor não existe' } };
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
    const fornecedorExists = await this.prismaService.fornecedor.findFirst({
      where: { id: updateCotacaoDto.idFornecedor },
    });
    if (fornecedorExists) {
      const insumoExists = await this.prismaService.insumo.findFirst({
        where: { id: updateCotacaoDto.idInsumo },
      });
      if (insumoExists) {
        return await this.prismaService.cotacao.update({
          where: { id },
          data: updateCotacaoDto,
        });
      }
      return { data: { message: 'Insumo não existe' } }
    }
    return { data: { message: 'Fornecedor não existe' } };
  }

  async remove(id: number) {
    const cotacaoExists = await this.findOne(id);
    if (cotacaoExists) {
      return await this.prismaService.cotacao.delete({ where: { id } });
    }
    return { data: { message: 'Cotação não existe' } };
  }
}
