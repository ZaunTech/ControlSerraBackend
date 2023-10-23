import { PartialType } from '@nestjs/mapped-types';
import { CreatePedidoDto } from './create-pedido.dto';
import { status } from "@prisma/client";
import { Orcamento } from "../../orcamentos/entities/orcamento.entity";

export class UpdatePedidoDto extends PartialType(CreatePedidoDto) {
    pagamento?: number;
    status?: status;
    idOrcamento?: number;
}
