import { ProdutoBase } from '@prisma/client';
import { Variante } from 'src/modules/variantes/entities/variante.entity';

export class InsumoProdutosBase {
  id: number;
  quantidade: number;
  idProdutoBase: number;
  idVariante: number;
 
  produtoBase: ProdutoBase;
  variante: Variante;
  createdAt: Date;
  updatedAt: Date;
}
