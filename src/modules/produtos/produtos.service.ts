import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { PrismaService } from 'src/databases/prisma.service';

@Injectable()
export class ProdutosService {
  constructor(private readonly prismaService: PrismaService) {}

  async findOneByTitle(titulo: string) {
    return await this.prismaService.produto.findFirst({
      where: { titulo },
    });
  }

  async findManyByTitle(titulo: string) {
    return await this.prismaService.produto.findMany({
      where: { titulo },
    });
  }

  async create(createProdutoDto: CreateProdutoDto) {
    const produtoExiste = await this.findOneByTitle(createProdutoDto.titulo);
    if (!produtoExiste) {
      return await this.prismaService.produto.create({
        data: createProdutoDto,
      });
    }
  }

  async findProdutoOrc(id: number) {
    return await this.prismaService.produto.findMany({
      where: {
        OR: [{ orcamentoId: { equals: id } }],
      },
    });
  }

  async countAll() {
    return await this.prismaService.produto.count();
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
      data: updateProdutoDto,
    });
  }

  async remove(id: number) {
    const removeInsumos = await this.prismaService.listaInsumo.deleteMany({
      where: {
        idProduto: id,
      },
    });
    const removeProduto = await this.prismaService.produto.delete({
      where: { id },
    });

    return { removeProduto, removeInsumos };
  }
}
