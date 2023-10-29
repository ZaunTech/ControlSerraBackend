import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ListaInsumo } from 'src/modules/lista-insumos/entities/lista-insumo.entity';
import { Orcamento } from 'src/modules/orcamentos/entities/orcamento.entity';

export class Produto {
  id: number;
  @IsNotEmpty({ message: 'O titulo não pode estar vazio' })
  @IsString({ message: 'O titulo inserido não é válido' })
  titulo: string;
  @IsNumber({}, { message: 'A quantidade inserida não é válida' })
  quantidade?: number;
  @IsNumber({}, { message: 'O valor unitário inserido não é válido' })
  valorUnitario?: number;
  @IsString({ message: 'A observação inserida não é válida' })
  observacoes?: string;
  listaInsumos: ListaInsumo[];
  createdAt: Date;
  updatedAt: Date;
  Orcamento?: Orcamento;
  @IsNotEmpty({ message: 'O orçamento não pode estar vazio' })
  @IsNumber({}, { message: 'O orçamento inserido não é válido' })
  orcamentoId: number;
}
