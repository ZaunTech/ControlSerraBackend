import { Variante } from 'src/modules/variantes/entities/variante.entity';
import { Categoria } from '../../categorias/entities/categoria.entity';

export class Insumo {
  id: number;
  titulo: string;
  descricao?: string;
  unidadeMedida?: string;
  idCategoria?: number;
  categoria?: Categoria;
  variante?: Variante;
  createdAt: Date;
  updatedAt: Date;
}
