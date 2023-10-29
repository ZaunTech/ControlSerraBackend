import { Cliente } from 'src/modules/clientes/entities/cliente.entity';
import { Produto } from 'src/modules/produtos/entities/produto.entity';
import { status } from '@prisma/client';
import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class Orcamento {
  id: Number;
  @IsDate({ message: 'A validade inserida não é válida' })
  validade?: Date;
  dataOrcamento: Date;
  @IsNumber({}, { message: 'O valor de mão de obra inserido não é válido' })
  totalMaoObra?: number;
  @IsNumber({}, { message: 'O valor total de materiais inserido não é válido' })
  totalMateriais?: number;
  @IsNotEmpty({ message: 'O status não pode estar vazio' })
  @IsEnum(status, { message: 'O status inserido não é válido' })
  status: status;
  @IsNumber({}, { message: 'O prazo estimado inserido não é válido' })
  prazoEstimadoProducao?: number;
  @IsString({ message: 'A observação inserida não é válida' })
  observacoes?: string;
  @IsNotEmpty({ message: 'O cliente não pode estar vazio' })
  @IsNumber({}, { message: 'O cliente inserido não é válido' })
  idCliente: number;
  cliente: Cliente;
  createdAt: Date;
  updatedAt: Date;
  produtos: Produto[];
}
