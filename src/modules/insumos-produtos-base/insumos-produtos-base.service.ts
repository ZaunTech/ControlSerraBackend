import { Injectable } from '@nestjs/common';
import { CreateInsumosProdutosBaseDto } from './dto/create-insumo-produtos-base.dto';
import { UpdateInsumosProdutosBaseDto } from './dto/update-insumo-produtos-base.dto';

@Injectable()
export class InsumosProdutosBaseService {
  create(createInsumosProdutosBaseDto: CreateInsumosProdutosBaseDto) {
    return 'This action adds a new insumosProdutosBase';
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
