import { ListaInsumo } from 'src/modules/lista-insumos/entities/lista-insumo.entity';

export class Cotacao {
  id: number;
  data: Date;
  valor?: number;
  idFornecedor: number;
  idInsumo: number;
  createdAt: Date;
  updatedAt: Date;
}
