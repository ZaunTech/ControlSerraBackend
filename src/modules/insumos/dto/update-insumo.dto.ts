import { PartialType } from '@nestjs/mapped-types';
import { CreateInsumoDto } from './create-insumo.dto';

export class UpdateInsumoDto extends PartialType(CreateInsumoDto) {
  titulo?: string;
  descricao?: string;
  unidadeMedida?: string;
  idCategoria?: number;
}
