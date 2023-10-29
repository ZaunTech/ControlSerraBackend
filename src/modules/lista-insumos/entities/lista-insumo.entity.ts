import { IsNotEmpty, IsNumber } from 'class-validator';
import { Cotacao } from 'src/modules/cotacoes/entities/cotacao.entity';
import { Insumo } from 'src/modules/insumos/entities/insumo.entity';
import { Produto } from 'src/modules/produtos/entities/produto.entity';

export class ListaInsumo {
  id: number;
  @IsNotEmpty({ message: 'A quantidade não pode estar vazia' })
  @IsNumber({}, { message: 'A quantidade inserida não é válida' })
  quantidade: number;
  @IsNotEmpty({ message: 'O produto não pode estar vazio' })
  @IsNumber({}, { message: 'O produto inserido não é válido' })
  idProduto: number;
  @IsNotEmpty({ message: 'O insumo não pode estar vazio' })
  @IsNumber({}, { message: 'O insumo inserido não é válido' })
  idInsumo: number;
  @IsNumber({}, { message: 'A cotação inserida não é válida' })
  idCotacao?: number;
  produto: Produto;
  insumo: Insumo;
  cotacao?: Cotacao;
  createdAt: Date;
  updatedAt: Date;
}
