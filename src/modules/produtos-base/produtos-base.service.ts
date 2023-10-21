import { Injectable } from '@nestjs/common';
import { CreateProdutosBaseDto } from './dto/create-produtos-base.dto';
import { UpdateProdutosBaseDto } from './dto/update-produtos-base.dto';

@Injectable()
export class ProdutosBaseService {
  create(createProdutosBaseDto: CreateProdutosBaseDto) {
    return 'This action adds a new produtosBase';
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
