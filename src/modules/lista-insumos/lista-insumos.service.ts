import { Injectable } from '@nestjs/common';
import { CreateListaInsumoDto } from './dto/create-lista-insumo.dto';
import { UpdateListaInsumoDto } from './dto/update-lista-insumo.dto';
import { PrismaService } from 'src/databases/prisma.service';
import { CotacoesService } from '../cotacoes/cotacoes.service';

@Injectable()
export class ListaInsumosService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly cotacaoServices: CotacoesService,
  ) {}

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
    return await this.prismaService.listaInsumo.create({
      data: createListaInsumoDto,
    });
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
    console.log(id)
    console.log(this.prismaService.listaInsumo.findFirst({ where: { id } }));
    return await this.prismaService.listaInsumo.findFirst({ where: { id } });
  }

  async update(id: number, updateListaInsumoDto: UpdateListaInsumoDto) {
    return await this.prismaService.listaInsumo.update({
      where: { id },
      data: updateListaInsumoDto,
    });
  }

  async remove(id: number) {
    return await this.prismaService.listaInsumo.delete({ where: { id } });
  }

  async selectCotacao(idItemListaInsumo: number, idCotacao: number) {
    console.log(idItemListaInsumo, idCotacao);
    const cotacao = await this.cotacaoServices.findOne(idCotacao);

    console.log(idItemListaInsumo, idCotacao);
    if (!cotacao) {
      return { data: { message: 'Essa cotação não existe' } };
    }

    const lista = await this.prismaService.listaInsumo.findFirst({
      where: { id: idItemListaInsumo },
    });
    if (!lista == null) {
      return { data: { message: 'Esse insumo não existe' } };
    }
    lista.valorUnitario = cotacao.valor;

    lista.idCotacao = cotacao.id;

    return await this.update(lista.id, lista);
  }
}
