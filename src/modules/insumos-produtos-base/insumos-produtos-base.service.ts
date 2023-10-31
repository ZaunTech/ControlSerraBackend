import { Injectable } from '@nestjs/common';
import { CreateInsumosProdutosBaseDto } from './dto/create-insumo-produtos-base.dto';
import { UpdateInsumosProdutosBaseDto } from './dto/update-insumo-produtos-base.dto';
import { PrismaService } from '../../databases/prisma.service';

@Injectable()
export class InsumosProdutosBaseService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAllWithPagination(page: number, perPage: number) {
    const skip = (page - 1) * perPage;
    const insumosProdutosBase =
      await this.prismaService.insumoProdutoBase.findMany({
        skip,
        take: perPage,
      });

    return { insumosProdutosBase };
  }

  async create(createInsumosProdutosBaseDto: CreateInsumosProdutosBaseDto) {
    const insumoExists = await this.prismaService.insumo.findFirst({
      where: { id: createInsumosProdutosBaseDto.idInsumo },
    });
    if (insumoExists) {
      const produtoBaseExists = await this.prismaService.produtoBase.findFirst({
        where: { id: createInsumosProdutosBaseDto.idProdutoBase },
      });
      if (produtoBaseExists) {
        return await this.prismaService.insumoProdutoBase.create({
          data: {
            quantidade: createInsumosProdutosBaseDto.quantidade,
            idProdutoBase: createInsumosProdutosBaseDto.idProdutoBase,
            idInsumo: createInsumosProdutosBaseDto.idInsumo,
            unidade: createInsumosProdutosBaseDto.unidade,
          },
        });
      }
      return { data: { message: 'Produto base não existe' } };
    }
    return { data: { message: 'Insumo não existe' } };
  }

  async countAll() {
    return await this.prismaService.insumoProdutoBase.count();
  }

  async findInsumoProdBase(id: number) {
    return await this.prismaService.insumoProdutoBase.findMany({
      where: {
        OR: [{ idProdutoBase: { equals: id } }],
      },
    });
  }

  async findAll() {
    return await this.prismaService.insumoProdutoBase.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.insumoProdutoBase.findFirst({
      where: { id },
    });
  }

  async update(
    id: number,
    updateInsumosProdutosBaseDto: UpdateInsumosProdutosBaseDto,
  ) {
    const insumoExists = await this.prismaService.insumo.findFirst({
      where: { id: updateInsumosProdutosBaseDto.idInsumo },
    });
    if (insumoExists) {
      const produtoBaseExists = await this.prismaService.produtoBase.findFirst({
        where: { id: updateInsumosProdutosBaseDto.idProdutoBase },
      });
      if (produtoBaseExists) {
        return await this.prismaService.insumoProdutoBase.update({
          where: { id },
          data: updateInsumosProdutosBaseDto,
        });
      }
      return { data: { message: 'Produto base não existe' } };
    }
    return { data: { message: 'Insumo não existe' } };
  }

  async remove(id: number) {
    const insumoBaseExists = await this.findOne(id);
    if (insumoBaseExists) {
      return await this.prismaService.insumoProdutoBase.delete({
        where: { id },
      });
    }
    return { data: { message: 'Insumo Base não existe' } };
  }
}
