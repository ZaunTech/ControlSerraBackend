import { InsumoProdutoBase } from '@prisma/client';
import { IsNotEmpty, IsString } from 'class-validator';

export class ProdutosBase {
  id: number;
  @IsNotEmpty({ message: 'O titulo não pode estar vazio' })
  @IsString({ message: 'O titulo inserido não é válido' })
  titulo: string;
  @IsString({ message: 'A observação inserida não é válida' })
  observacoes?: string;
  insumosProdutosBase: InsumoProdutoBase[];
  createdAt: Date;
  updatedAt: Date;
}
