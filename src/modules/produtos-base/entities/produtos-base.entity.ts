import { InsumoProdutoBase } from '@prisma/client';

export class ProdutosBase {
  id: number;
  titulo: string;
  valorUnitario?: number;
  observacoes?: string;
  insumosProdutosBase: InsumoProdutoBase[];
  createdAt: Date;
  updatedAt: Date;
}
