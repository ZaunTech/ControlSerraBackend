import { Injectable } from '@nestjs/common';
import { CreateProdutosBaseDto } from './dto/create-produtos-base.dto';
import { UpdateProdutosBaseDto } from './dto/update-produtos-base.dto';
import { PrismaService } from 'src/databases/prisma.service';
import { contaTipo, produtoTipo } from '@prisma/client';
import { CreateInsumosProdutosBaseDto } from '../insumos-produtos-base/dto/create-insumo-produtos-base.dto';
@Injectable()
export class ProdutosBaseService {
  constructor(private readonly prismaService:PrismaService){}

  async create(createProdutosBaseDto: CreateProdutosBaseDto) {
    const produtoBase =  await this.prismaService.produtoBase.create({
        data: {
          titulo: createProdutosBaseDto.titulo,
          valorUnitario: createProdutosBaseDto.valorUnitario,
        },
      });
      return produtoBase.id;
  }

  findAll() {
    return `This action returns all produtosBase`;
  }

  findOne(id: number) {
    return `This action returns a #${id} produtosBase`;
  }

  update(id: number, updateProdutosBaseDto: UpdateProdutosBaseDto) {
    return `This action updates a #${id} produtosBase`;
  }

  remove(id: number) {
    return `This action removes a #${id} produtosBase`;
  }
}
