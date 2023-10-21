import { Cliente } from 'src/modules/clientes/entities/cliente.entity';
import { Produto } from 'src/modules/produtos/entities/produto.entity';
import { status as Status } from '@prisma/client';

export class CreateOrcamentoDto {
  validade?: Date;
  totalMaoObra?: number;
  totalMateriais?: number;
  valorPago?: number;
  status: Status;
  prazoEstimadoProducao: number;
  observacoes?: string;
  idCliente: number;
  idPedido?: number;
  produtos?: Produto[];
}
