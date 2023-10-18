import { PartialType } from '@nestjs/mapped-types';
import { CreateInsumoDto } from './create-insumo.dto';
import { Categoria } from "../../categorias/entities/categoria.entity";

export class UpdateInsumoDto extends PartialType(CreateInsumoDto) {
    titulo: string;
    descricao?: string;
    unidadeMedida?: string;
    idCategoria?: number;
    categoria?: Categoria; 
}
