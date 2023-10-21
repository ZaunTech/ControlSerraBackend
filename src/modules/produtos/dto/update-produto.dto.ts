import { PartialType } from '@nestjs/mapped-types';
import { CreateProdutoDto } from './create-produto.dto';
import { produtoTipo } from '@prisma/client';
import { ListaInsumo } from 'src/modules/lista-insumos/entities/lista-insumo.entity';

export class UpdateProdutoDto extends PartialType(CreateProdutoDto) {
    titulo:        string;
    quantidade?:    number;
    valorUnitario?: number;
    tipo:          produtoTipo
    listaInsumos?:  ListaInsumo[]
    orcamentoId: number;
}
