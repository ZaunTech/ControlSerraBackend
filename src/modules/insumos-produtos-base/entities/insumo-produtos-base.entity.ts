import { Insumo, ProdutoBase } from "@prisma/client";

export class InsumoProdutosBase {
    id : number;
    quantidade? : number
    idProdutoBase: number
    idInsumo :number
    produtoBase?: ProdutoBase
    insumos? : Insumo
    createdAt :   Date 
    updatedAt:    Date  

}
