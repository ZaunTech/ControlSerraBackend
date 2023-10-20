import { ListaInsumo } from "src/modules/lista-insumos/entities/lista-insumo.entity";

export class Cotacao {
    id: number;
    Data: Date;
    Valor?: number;
    listaInsumos: ListaInsumo[]
    createdAt: Date;
    updatedAt: Date;
}
