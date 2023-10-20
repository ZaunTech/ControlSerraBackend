import { Cotacao } from 'src/modules/cotacaos/entities/cotacao.entity';
import { Insumo } from 'src/modules/insumos/entities/insumo.entity';
import { Produto } from 'src/modules/produtos/entities/produto.entity';

export class ListaInsumo {
  id: number;
  quantidade?: number;
  idProduto?: number;
  idInsumo?: number;
  idCotacao?: number;
  produto?: Produto;
  insumo?: Insumo;
  cotacao?: Cotacao;
  createdAt: Date;
  updatedAt: Date;
}
