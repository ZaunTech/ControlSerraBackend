import { Injectable } from '@nestjs/common';
import { CreateProdutosBaseDto } from './dto/create-produtos-base.dto';
import { UpdateProdutosBaseDto } from './dto/update-produtos-base.dto';
import { PrismaService } from 'src/databases/prisma.service';

@Injectable()
export class ProdutosBaseService {
  constructor(private readonly prismaService: PrismaService) {}

  async findOneByTitle(titulo: string) {
    return await this.prismaService.produtoBase.findFirst({
      where: { titulo },
    });
  }

  async create(createProdutosBaseDto: CreateProdutosBaseDto) {
    const produtoBaseExiste = await this.findOneByTitle(
      createProdutosBaseDto.titulo,
    );
    if (!produtoBaseExiste) {
      return await this.prismaService.produtoBase.create({
        data: createProdutosBaseDto,
      });
    }
  }

  async countAll() {
    return await this.prismaService.produtoBase.count();
  }

  async findAll() {
    return await this.prismaService.produtoBase.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.produtoBase.findFirst({ where: { id } });
  }

  async update(id: number, updateProdutosBaseDto: UpdateProdutosBaseDto) {
    return await this.prismaService.produtoBase.update({
      where: { id },
      data: updateProdutosBaseDto,
    });
  }

  async remove(id: number) {
    const removeInsumosBase = await this.prismaService.insumoProdutoBase.deleteMany({
        where: {
          idProdutoBase: id,
        },
    });
    const removeProdutoBase = await this.prismaService.produtoBase.delete({
      where: { id },
    });

    return{ removeProdutoBase, removeInsumosBase}
  }
}
