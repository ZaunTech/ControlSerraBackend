import { produtoTipo } from "@prisma/client";
import { ListaInsumo } from "../../lista-insumos/entities/lista-insumo.entity";

export class CreateProdutoDto {
    titulo: string;
    quantidade?: number;
    valorUnitario?: number;
    tipo: produtoTipo;
    listaInsumos: ListaInsumo;
}
