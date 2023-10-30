import { Cliente } from 'src/modules/clientes/entities/cliente.entity';
import { Produto } from 'src/modules/produtos/entities/produto.entity';
import { status } from '@prisma/client';
import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateIf,
} from 'class-validator';

export class Orcamento {
  id: Number;
  @ValidateIf((object, value) => value !== undefined)
  @IsDateString({},{ message: 'A validade inserida não é válida' })
  validade?: Date;
  dataOrcamento: Date;
  @ValidateIf((object, value) => value !== undefined)
  @IsNumber({}, { message: 'O valor de mão de obra inserido não é válido' })
  totalMaoObra?: number;
  @ValidateIf((object, value) => value !== undefined)
  @IsNumber({}, { message: 'O valor total de materiais inserido não é válido' })
  totalMateriais?: number;
  @IsNotEmpty({ message: 'O status não pode estar vazio' })
  @IsEnum(status, { message: 'O status inserido não é válido' })
  status: status;
  @ValidateIf((object, value) => value !== undefined)
  @IsNumber({}, { message: 'O prazo estimado inserido não é válido' })
  prazoEstimadoProducao?: number;
  @ValidateIf((object, value) => value !== undefined)
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
