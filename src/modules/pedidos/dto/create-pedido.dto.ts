import { status } from "@prisma/client";
export class CreatePedidoDto {
    pagamento: number;
    status: status;
    idOrcamento?: number;
}
