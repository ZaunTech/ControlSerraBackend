import { Injectable } from '@nestjs/common';
import { CreateListaInsumoDto } from './dto/create-lista-insumo.dto';
import { UpdateListaInsumoDto } from './dto/update-lista-insumo.dto';
import { PrismaService } from 'src/databases/prisma.service';

@Injectable()
export class ListaInsumosService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAllWithPagination(page: number, perPage: number) {
    const skip = (page - 1) * perPage;
    const listaInsumos = await this.prismaService.listaInsumo.findMany({
      skip,
      take: perPage,
    });

    return { listaInsumos };
  }

  async countAll() {
    return await this.prismaService.insumoProdutoBase.count();
  }

  async create(createListaInsumoDto: CreateListaInsumoDto) {
    const insumoExists = await this.prismaService.insumo.findFirst({
      where: { id: createListaInsumoDto.idInsumo },
    });
    if (insumoExists) {
      const produtoExists = await this.prismaService.produto.findFirst({
        where: { id: createListaInsumoDto.idProduto },
      });
      if (produtoExists) {
        if (createListaInsumoDto.idCotacao) {
          var cotacaoExists = await this.prismaService.cotacao.findFirst({
            where: { id: createListaInsumoDto.idCotacao },
          });
        }
        if (cotacaoExists || !createListaInsumoDto.idCotacao) {
          return await this.prismaService.listaInsumo.create({
            data: createListaInsumoDto,
          });
        }
        return { data: { message: 'Cotação não existe' } };
      }
      return { data: { message: 'Produto não existe' } };
    }
    return { data: { message: 'Insumo não existe' } };
  }

  async findInsumoProd(id: number) {
    const listaInsumosProd = await this.prismaService.listaInsumo.findMany({
      where: {
        idProduto: id,
      },
    });

    if (!listaInsumosProd) {
      return {
        data: { message: 'Não existem insumos cadastrados deste produto' },
      };
    }
    return listaInsumosProd;
  }

  async findAll() {
    return await this.prismaService.listaInsumo.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.listaInsumo.findFirst({ where: { id } });
  }

  async update(id: number, updateListaInsumoDto: UpdateListaInsumoDto) {
    const insumoExists = await this.prismaService.insumo.findFirst({
      where: { id: updateListaInsumoDto.idInsumo },
    });
    if (insumoExists) {
      const produtoExists = await this.prismaService.produto.findFirst({
        where: { id: updateListaInsumoDto.idProduto },
      });
      if (produtoExists) {
        if (updateListaInsumoDto.idCotacao) {
          var cotacaoExists = await this.prismaService.cotacao.findFirst({
            where: { id: updateListaInsumoDto.idCotacao },
          });
        }
        if (cotacaoExists || !updateListaInsumoDto.idCotacao) {
          return await this.prismaService.listaInsumo.update({
            where: { id },
            data: updateListaInsumoDto,
          });
        }
        return { data: { message: 'Cotação não existe' } };
      }
      return { data: { message: 'Produto não existe' } };
    }
    return { data: { message: 'Insumo não existe' } };
  }

  async remove(id: number) {
    const listaInsumoExists = await this.findOne(id);
    if (listaInsumoExists) {
      return await this.prismaService.listaInsumo.delete({
        where: { id },
      });
    }
    return { data: { message: 'Insumo da lista não existe' } };
  }
}
