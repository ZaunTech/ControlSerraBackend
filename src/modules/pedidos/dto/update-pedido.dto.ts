import { PartialType } from '@nestjs/mapped-types';
import { CreatePedidoDto } from './create-pedido.dto';
import { status } from "@prisma/client";
export class UpdatePedidoDto extends PartialType(CreatePedidoDto) {
    pagamento?: number;
    status?: status;
    idOrcamento?: number;
}
