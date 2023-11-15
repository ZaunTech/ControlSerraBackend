import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, isNumber, IsOptional, IsString, Matches, ValidateIf } from 'class-validator';

export class CreateVarianteDto {
  

  @IsNumber({}, { message: 'A categoria inserida não é válida' })
  idInsumo: number;

  @IsNotEmpty({ message: 'O titulo não pode estar vazio' })
  @IsString({ message: 'O titulo inserido não é válido' })
  variante: string;
 
}
