import { PartialType } from '@nestjs/mapped-types';
import { CreateOrcamentoDto } from './create-orcamento.dto';
import { Produto } from 'src/modules/produtos/entities/produto.entity';
import { status } from '@prisma/client';

export class UpdateOrcamentoDto extends PartialType(CreateOrcamentoDto) {
validade?: Date;
  totalMaoObra?: number;
  totalMateriais?: number;
  valorPago?: number;
  status?: status;
  prazoEstimadoProducao?: number;
  observacoes?: string;
  idCliente?: number;
  idPedido?: number;
  produtos?: Produto[];
}
