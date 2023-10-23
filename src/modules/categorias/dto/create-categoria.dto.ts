import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Matches } from 'class-validator';

export class CreateCategoriaDto {
  @ApiProperty({
    description: 'O tipo serve para diferenciar entre material e mão de obra',
    example: 'Material',
  })
  @IsNotEmpty({ message: 'A categoria deve ter um titulo' })
  @Matches(/^[a-zA-Z -]*$/, { message: 'O tipo só pode ter letras' })
  tipo: string;

  @ApiProperty({
    description: 'O titulo serve para pesquisar as categorias',
    example: 'Metais',
  })
  @IsNotEmpty({ message: 'A categoria deve ter um titulo' })
  @Matches(/^[a-zA-Z -]*$/, { message: 'A categoria só pode ter letras' })
  titulo: string;

  @ApiProperty({
    description: 'A descrição serve para detalhar a categoria',
    example: 'Grupo de materiais de aço, ferro e aluminio',
  })
  @Matches(/^[a-zA-Z -]*$/, { message: 'A descrição só pode ter letras' })
  descricao?: string;
}
