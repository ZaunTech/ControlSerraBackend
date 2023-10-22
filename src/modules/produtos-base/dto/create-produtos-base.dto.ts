import { InsumoProdutoBase, produtoTipo } from "@prisma/client";

export class CreateProdutosBaseDto {
    titulo:        string;
    valorUnitario?: number;
    tipo:          produtoTipo;
}
