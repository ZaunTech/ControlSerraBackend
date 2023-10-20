import { Fornecedor } from "../../fornecedores/entities/fornecedor.entity";
import { Insumo } from '../../insumos/entities/insumo.entity';
import { ListaInsumo } from "../../lista-insumos/entities/lista-insumo.entity";

export class Cotacao {
    id: number;
    data: Date;
    valor?: number;
    idInsumo?: number;
    idFornecedor?: number;
    insumo?: Insumo;
    fornecedor?: Fornecedor;
    listaInsumos?: ListaInsumo[];
    createdAt: Date;
    updatedAt: Date;
}
