import { ProdutoBase } from '@prisma/client';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Insumo } from 'src/modules/insumos/entities/insumo.entity';

export class InsumoProdutosBase {
  id: number;
  @IsNotEmpty({message: 'A quantidade não pode estar vazia'})
  @IsNumber({},{message: 'A quantidade inserida não é válida'})
  quantidade: number;
  @IsNotEmpty({message: 'O produto base não pode estar vazio'})
  @IsNumber({},{message: 'O produto base inserido não é válido'})
  idProdutoBase: number;
  @IsNotEmpty({message: 'O insumo não pode estar vazio'})
  @IsNumber({},{message: 'O insumo inserido não é válido'})
  idInsumo: number;
  produtoBase: ProdutoBase;
  insumo: Insumo;
  createdAt: Date;
  updatedAt: Date;
}
