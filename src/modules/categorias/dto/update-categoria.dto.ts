import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoriaDto } from './create-categoria.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCategoriaDto extends PartialType(CreateCategoriaDto) {
  @ApiProperty({
    description: 'O tipo serve para diferenciar entre material e mão de obra',
    example: 'Material',
  })
  tipo?: string;

  @ApiProperty({
    description: 'O titulo serve para pesquisar as categorias',
    example: 'Metais',
  })
  titulo?: string;

  @ApiProperty({
    description: 'A descrição serve para detalhar a categoria',
    example: 'Grupo de materiais de aço, ferro e aluminio',
  })
  descricao?: string;
}
