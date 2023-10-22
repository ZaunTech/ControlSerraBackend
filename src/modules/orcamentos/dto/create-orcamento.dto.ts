import { status as Status } from '@prisma/client';
import { CreateProdutoDto } from 'src/modules/produtos/dto/create-produto.dto';

export class CreateOrcamentoDto {
  validade?: Date;
  totalMaoObra?: number;
  totalMateriais?: number;
  valorPago?: number;
  status: Status;
  prazoEstimadoProducao: number;
  observacoes?: string;
  idCliente: number;
}
