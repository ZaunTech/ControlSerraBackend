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
}
