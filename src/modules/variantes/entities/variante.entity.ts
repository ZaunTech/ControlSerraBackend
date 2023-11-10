import { Insumo } from 'src/modules/insumos/entities/insumo.entity';

export class Variante {
  id: number;
  variante: string;
  idInsumo: number;
  insumo?: Insumo;
}
