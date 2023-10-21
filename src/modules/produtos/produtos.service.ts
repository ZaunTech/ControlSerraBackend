import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { PrismaService } from 'src/databases/prisma.service';
import { ListaInsumosService } from '../lista-insumos/lista-insumos.service';

@Injectable()
export class ProdutosService {
  constructor(private readonly prismaService: PrismaService) {}

  async findOneByTitle(titulo: string) {
    return await this.prismaService.produto.findFirst({
      where: { titulo },
    });
  }

  async create(createProdutoDto: CreateProdutoDto) {
    const produtoExiste = await this.findOneByTitle(createProdutoDto.titulo);
    if (!produtoExiste) {
      const produto = await this.prismaService.produto.create({
        data: {
          titulo: createProdutoDto.titulo,
          valorUnitario: createProdutoDto.valorUnitario,
          quantidade: createProdutoDto.quantidade,
          tipo: createProdutoDto.tipo,
          orcamentoId: createProdutoDto.orcamentoId,
        },
      });
    }
  }

  async findAll() {
    return await this.prismaService.produto.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.produto.findFirst({ where: { id } });
  }

  async update(id: number, updateProdutoDto: UpdateProdutoDto) {
    return await this.prismaService.produto.update({
      where: { id },
      data: {
        titulo: updateProdutoDto.titulo,
        valorUnitario: updateProdutoDto.valorUnitario,
        quantidade: updateProdutoDto.quantidade,
        tipo: updateProdutoDto.tipo,
        listaInsumos: {
          create: updateProdutoDto.listaInsumos,
        },
      },
    });
  }

  async remove(id: number) {
    return await this.prismaService.produto.delete({ where: { id } });
  }
}
