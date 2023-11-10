import { Cotacao } from 'src/modules/cotacoes/entities/cotacao.entity';
import { Insumo } from 'src/modules/insumos/entities/insumo.entity';
import { Produto } from 'src/modules/produtos/entities/produto.entity';
import { Variante } from 'src/modules/variantes/entities/variante.entity';

export class ListaInsumo {
  id: number;
  quantidade: number;
  idProduto: number;
  idVariante: number;
  idCotacao?: number;
  unidade?: string;
  valorUnitario?: number;
  produto?: Produto;
  variante?: Variante;
  cotacao?: Cotacao;
  createdAt: Date;
  updatedAt: Date;
}
