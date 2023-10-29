import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoriaDto } from './create-categoria.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateCategoriaDto extends PartialType(CreateCategoriaDto) {
  @ApiProperty({
    description: 'O tipo serve para diferenciar entre material e mão de obra',
    example: 'Material', 
  })
  @IsNotEmpty({message: 'O tipo não pode estar vázio'})
  @IsString({message: 'O tipo deve ser uma string'})
  tipo?: string;

  @ApiProperty({
    description: 'O titulo serve para pesquisar as categorias',
    example: 'Metais',
  })
  @IsNotEmpty({message: 'O titulo não pode estar vázio'})
  @IsString({message: 'O titulo deve ser uma string'})
  titulo?: string;

  @ApiProperty({
    description: 'A descrição serve para detalhar a categoria',
    example: 'Grupo de materiais de aço, ferro e aluminio',
  })
  @IsString({message: 'A descrição deve ser uma string'})
  descricao?: string;
}
