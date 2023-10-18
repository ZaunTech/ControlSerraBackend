import { Injectable } from '@nestjs/common';
import { CreateListaInsumoDto } from './dto/create-lista-insumo.dto';
import { UpdateListaInsumoDto } from './dto/update-lista-insumo.dto';

@Injectable()
export class ListaInsumosService {
  create(createListaInsumoDto: CreateListaInsumoDto) {
    return 'This action adds a new listaInsumo';
  }

  findAll() {
    return `This action returns all listaInsumos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} listaInsumo`;
  }

  update(id: number, updateListaInsumoDto: UpdateListaInsumoDto) {
    return `This action updates a #${id} listaInsumo`;
  }

  remove(id: number) {
    return `This action removes a #${id} listaInsumo`;
  }
}
