import { PartialType } from '@nestjs/mapped-types';
import { CreateProdutoDto } from './create-produto.dto';
import { ListaInsumo } from "../../lista-insumos/entities/lista-insumo.entity";
import { produtoTipo } from '@prisma/client';

export class UpdateProdutoDto extends PartialType(CreateProdutoDto) {
    titulo: string;
    quantidade?: number;
    valorUnitario?: number;
    tipo?: produtoTipo;
    listaInsumos?: ListaInsumo;
}
