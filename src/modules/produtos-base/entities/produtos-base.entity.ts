import { InsumoProdutoBase } from '@prisma/client';
import { IsNotEmpty, IsString, ValidateIf } from 'class-validator';

export class ProdutosBase {
  id: number;
  @IsNotEmpty({ message: 'O titulo não pode estar vazio' })
  @IsString({ message: 'O titulo inserido não é válido' })
  titulo: string;
  @ValidateIf((object, value) => value !== undefined)
  @IsString({ message: 'A observação inserida não é válida' })
  observacoes?: string;
  insumosProdutosBase: InsumoProdutoBase[];
  createdAt: Date;
  updatedAt: Date;
}
