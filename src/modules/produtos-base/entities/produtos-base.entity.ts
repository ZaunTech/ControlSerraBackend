import { Insumo, InsumoProdutoBase, produtoTipo } from "@prisma/client";
export class ProdutosBase 
{
    id:            number;
    titulo:        string;
    valorUnitario?: number;
    tipo:          produtoTipo;
    insumoProdutoBase:    InsumoProdutoBase[];


}