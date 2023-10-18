import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoriaDto } from './create-categoria.dto';
import { Insumo } from 'src/insumos/entities/insumo.entity';

export class UpdateCategoriaDto extends PartialType(CreateCategoriaDto) {
    tipo?:      string
    titulo?:    string
    descricao?: string
}
