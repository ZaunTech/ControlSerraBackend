import { status } from '@prisma/client';
import { Orcamento } from '../../orcamentos/entities/orcamento.entity';
import { IsEnum, IsNotEmpty, IsNumber } from 'class-validator';

export class Pedido {
  id: number;
  @IsNotEmpty({ message: 'O pagamento não pode estar vazio' })
  @IsNumber({}, { message: 'O pagamento inserido não é válido' })
  pagamento: number;
  @IsNotEmpty({ message: 'O status não pode estar vazio' })
  @IsEnum(status, { message: 'O status inserido não é válido' })
  status: status;
  @IsNotEmpty({ message: 'O orçamento não pode estar vazio' })
  @IsNumber({}, { message: 'O orçamento inserido não é válido' })
  idOrcamento: number;
  orcamentos: Orcamento;
  createdAt: Date;
  updatedAt: Date;
}
