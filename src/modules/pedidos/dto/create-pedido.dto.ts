import { status } from "@prisma/client";
import { Orcamento } from "../../orcamentos/entities/orcamento.entity";

export class CreatePedidoDto {
    pagamento: number;
    status: status;
    idOrcamento?: number;
}
