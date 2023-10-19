
import { ListaInsumo } from "../../lista-insumos/entities/lista-insumo.entity";
import { Categoria } from "../../categorias/entities/categoria.entity";

export class Insumo {
  id: number;
  titulo: string;
  descricao?: string;
  unidadeMedida?: string;
  idCategoria?: number;
  categoria?: Categoria; 
  listaInsumos?: ListaInsumo;
  createdAt: Date;
  updatedAt: Date;
}
