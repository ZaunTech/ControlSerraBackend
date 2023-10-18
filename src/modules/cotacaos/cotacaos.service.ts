import { Injectable } from '@nestjs/common';
import { CreateCotacaoDto } from './dto/create-cotacao.dto';
import { UpdateCotacaoDto } from './dto/update-cotacao.dto';

@Injectable()
export class CotacaosService {
  create(createCotacaoDto: CreateCotacaoDto) {
    return 'This action adds a new cotacao';
  }

  findAll() {
    return `This action returns all cotacaos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cotacao`;
  }

  update(id: number, updateCotacaoDto: UpdateCotacaoDto) {
    return `This action updates a #${id} cotacao`;
  }

  remove(id: number) {
    return `This action removes a #${id} cotacao`;
  }
}
