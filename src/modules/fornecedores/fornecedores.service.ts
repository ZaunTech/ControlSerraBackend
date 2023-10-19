import { Injectable } from '@nestjs/common';
import { CreateFornecedoresDto } from './dto/create-fornecedor.dto';
import { UpdateFornecedoresDto } from './dto/update-fornecedor.dto';

@Injectable()
export class FornecedoresService {
  create(createFornecedoresDto: CreateFornecedoresDto) {
    return 'This action adds a new fornecedore';
  }

  findAll() {
    return `This action returns all fornecedores`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fornecedore`;
  }

  update(id: number, updateFornecedoresDto: UpdateFornecedoresDto) {
    return `This action updates a #${id} fornecedore`;
  }

  remove(id: number) {
    return `This action removes a #${id} fornecedore`;
  }
}
