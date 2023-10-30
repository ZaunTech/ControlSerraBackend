import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { PrismaService } from 'src/databases/prisma.service';
import { ProdutosBaseService } from '../produtos-base/produtos-base.service';
import { InsumosProdutosBaseService } from '../insumos-produtos-base/insumos-produtos-base.service';
import { addProdutoBaseDto } from './dto/addProdutoBase.dto';

@Injectable()
export class ProdutosService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly produtosBaseService: ProdutosBaseService,
    private readonly insumosProdutosBaseService: InsumosProdutosBaseService,
  ) {}

  async findAllWithPagination(page: number, perPage: number) {
    const skip = (page - 1) * perPage;
    const produtos = await this.prismaService.produto.findMany({
      skip,
      take: perPage,
    });
    return { produtos };
  }
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

  async pullProdBase(addProdutoBaseDto: addProdutoBaseDto) {
    console.log("banana2")
    const prodBase = await this.produtosBaseService.findOne(
      addProdutoBaseDto.id,
    );

    console.log("banana1")
    const insumosBase =
      await this.insumosProdutosBaseService.findInsumoProdBase(
        addProdutoBaseDto.id,
      );

    const copyProd = await this.prismaService.produto.create({
      data: {
        titulo: prodBase.titulo,
        orcamentoId: addProdutoBaseDto.orcamentoId,
        observacoes: addProdutoBaseDto.observacoes,
        quantidade: addProdutoBaseDto.quantidade,
      },
    });
  
    console.log("banana")
    
    for (const insumoBase of insumosBase) {
      
      await this.prismaService.listaInsumo.create({
        data: {
          quantidade: insumoBase.quantidade,
          idInsumo: insumoBase.idInsumo,
          idProduto: copyProd.id,
          unidade: insumoBase.unidade,
        },
      });
    }

    return copyProd;
  }
}
