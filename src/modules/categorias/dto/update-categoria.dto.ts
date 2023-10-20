import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoriaDto } from './create-categoria.dto';
import { Insumo } from '../../insumos/entities/insumo.entity';

export class UpdateCategoriaDto extends PartialType(CreateCategoriaDto) {
    tipo?:      string;
    titulo?:    string;
    descricao?: string;
    insumos?: Insumo[];
}
