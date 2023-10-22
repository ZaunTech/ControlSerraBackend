import { Injectable } from '@nestjs/common';
import { CreateInsumosProdutosBaseDto } from './dto/create-insumo-produtos-base.dto';
import { UpdateInsumosProdutosBaseDto } from './dto/update-insumo-produtos-base.dto';
import { PrismaService } from '../../databases/prisma.service';

@Injectable()
export class InsumosProdutosBaseService {
  constructor(private readonly prismaService: PrismaService) {}
 
  async create(createInsumosProdutosBaseDto: CreateInsumosProdutosBaseDto) {
    return await this.prismaService.insumoProdutoBase.create({
      data: {
        quantidade :  createInsumosProdutosBaseDto.quantidade,
        idProdutoBase: createInsumosProdutosBaseDto.idProdutoBase,
        idInsumo : createInsumosProdutosBaseDto.idInsumo,
        createdAt:   createInsumosProdutosBaseDto.createdAt ,
        updatedAt:    createInsumosProdutosBaseDto.updatedAt  ,
       }
    });
  }

  findAll() {
    return `This action returns all insumosProdutosBase`;
  }

  findOne(id: number) {
    return `This action returns a #${id} insumosProdutosBase`;
  }

  update(id: number, updateInsumosProdutosBaseDto: UpdateInsumosProdutosBaseDto) {
    return `This action updates a #${id} insumosProdutosBase`;
  }

  remove(id: number) {
    return `This action removes a #${id} insumosProdutosBase`;
  }
}
