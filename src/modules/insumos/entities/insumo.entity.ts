import { ListaInsumo } from "../../lista-insumos/entities/lista-insumo.entity";
import { Categoria } from "../../categorias/entities/categoria.entity";
import { Cotacao } from "../../cotacaos/entities/cotacao.entity";
import { InsumoProdutosBase } from "src/modules/insumos-produtos-base/entities/insumo-produtos-base.entity";


export class Insumo {
  id: number;
  titulo: string;
  descricao?: string;
  unidadeMedida?: string;
  idCategoria?: number;
  categoria?: Categoria; 
  listaInsumos?: ListaInsumo[];
  insumoProdutoBase?: InsumoProdutosBase[];
  cotacoes?: Cotacao[];
  createdAt: Date;
  updatedAt: Date;
}
