import { produtoTipo } from "@prisma/client";
import { CreateListaInsumoDto } from "src/modules/lista-insumos/dto/create-lista-insumo.dto";

export class CreateProdutoDto {
    titulo:        string;
    quantidade?:    number;
    valorUnitario?: number;
    tipo:          produtoTipo;
    listaInsumos?:  CreateListaInsumoDto[];
    orcamentoId:   number;
}
