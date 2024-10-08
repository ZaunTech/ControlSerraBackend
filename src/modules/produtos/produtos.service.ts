import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { PrismaService } from 'src/databases/prisma/prisma.service';
import { ProdutosBaseService } from '../produtos-base/produtos-base.service';
import { InsumosProdutosBaseService } from '../insumos-produtos-base/insumos-produtos-base.service';
import { addProdutoBaseDto } from './dto/addProdutoBase.dto';
import { Produto } from './entities/produto.entity';

@Injectable()
export class ProdutosService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly produtosBaseService: ProdutosBaseService,
    private readonly insumosProdutosBaseService: InsumosProdutosBaseService,
  ) {}

  async findAllWithPagination(
    id: number,
    page: number,
    perPage: number,
    titulo_like: string,
  ) {
    const skip = (page - 1) * perPage;

    let produtos = Produto[''];

    produtos = await this.prismaService.produto.findMany({
      skip,
      take: perPage,
      where: {
        idOrcamento: id,
        OR: [{ titulo: { contains: titulo_like, mode: 'insensitive' } }],
      },
    });
    return produtos;
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
    const orcamentoExists = await this.prismaService.orcamento.findFirst({
      where: { id: createProdutoDto.idOrcamento },
    });
    if (orcamentoExists) {
      const produtoExiste = await this.findOneByTitle(createProdutoDto.titulo);
      if (!produtoExiste) {
        return await this.prismaService.produto.create({
          data: createProdutoDto,
        });
      }
      return { data: { message: 'Titulo já cadastrado' } };
    }
    return { data: { message: 'Orçamento não existe' } };
  }

  async findProdutoOrc(id: number) {
    return await this.prismaService.produto.findMany({
      where: {
        OR: [{ idOrcamento: { equals: id } }],
      },
    });
  }

  async countAll(id: number, titulo_like: string = '') {
    return await this.prismaService.produto.count({
      where: {
        idOrcamento: id,
        OR: [{ titulo: { contains: titulo_like, mode: 'insensitive' } }],
      },
    });
  }

  async findAll() {
    return await this.prismaService.produto.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.produto.findFirst({ where: { id } });
  }

  async update(id: number, updateProdutoDto: UpdateProdutoDto) {
    const orcamentoExists = await this.prismaService.orcamento.findFirst({
      where: { id: updateProdutoDto.idOrcamento },
    });
    if (orcamentoExists) {
      return await this.prismaService.produto.update({
        where: { id },
        data: updateProdutoDto,
      });
    }
    return { data: { message: 'Orçamento não existe' } };
  }

  async remove(id: number) {
    const produtoExists = await this.findOne(id);
    if (produtoExists) {
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
    return { data: { message: 'Produto não existe' } };
  }

  async pullProdBase(addProdutoBaseDto: addProdutoBaseDto) {
    const prodBase = await this.produtosBaseService.findOne(
      addProdutoBaseDto.id,
    );
    if (prodBase) {
      const orcamentoExists = await this.prismaService.orcamento.findFirst({
        where: { id: addProdutoBaseDto.orcamentoId },
      });
      if (orcamentoExists) {
        const insumosBase =
          await this.insumosProdutosBaseService.findInsumoProdBase(
            addProdutoBaseDto.id,
          );

        const copyProd = await this.prismaService.produto.create({
          data: {
            titulo: prodBase.titulo,
            idOrcamento: addProdutoBaseDto.orcamentoId,
            observacoes: addProdutoBaseDto.observacoes,
            quantidade: addProdutoBaseDto.quantidade,
          },
        });

        for (const insumoBase of insumosBase) {
          await this.prismaService.listaInsumo.create({
            data: {
              quantidade: insumoBase.quantidade,
              idVariante: insumoBase.idVariante,
              idProduto: copyProd.id,
            },
          });
        }

        return copyProd;
      }
      return { data: { message: 'Orçamento não existe' } };
    }
    return { data: { message: 'Produto base não existe' } };
  }

  async recalcularValor(id: number) {
    const listaInsumosMeterial = await this.prismaService.listaInsumo.findMany({
      where: {
        variante: { insumo: { categoria: { tipo: 'Insumo' } } },
        idProduto: id,
      },
      select: {
        valorUnitario: true,
        quantidade: true,
      },
    });

    const ValorTotalMaterial = listaInsumosMeterial.reduce(
      (total, insumo) => total + insumo.valorUnitario * insumo.quantidade,
      0,
    );

    const listaInsumosServico = await this.prismaService.listaInsumo.findMany({
      where: {
        variante: { insumo: { categoria: { tipo: 'Mão de Obra' } } },
        idProduto: id,
      },
      select: {
        valorUnitario: true,
        quantidade: true,
      },
    });

    const ValorTotalMaoDeObra = listaInsumosServico.reduce(
      (total, insumo) => total + insumo.valorUnitario * insumo.quantidade,
      0,
    );

    await this.update(id, {
      valorMaoDeObra: ValorTotalMaoDeObra,
      valorMaterial: ValorTotalMaterial,
      valorUnitario: ValorTotalMaterial + ValorTotalMaoDeObra,
    });
  }
}
