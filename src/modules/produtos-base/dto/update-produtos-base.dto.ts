import { PartialType } from '@nestjs/mapped-types';
import { CreateProdutosBaseDto } from './create-produtos-base.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from "class-validator";
export class UpdateProdutosBaseDto extends PartialType(CreateProdutosBaseDto) {
  @ApiProperty({
    description:
      'O titulo serve para identificar e pesquisar o produto base',
    example: 'Portão',
  })
  @IsOptional()
  @IsString()
  titulo?: string;
  
  @ApiProperty({
    description:
      'As observações servem para descrever caracteristicas relevantes sobre o produto base',
    example: '2" x 6 m',
  })
  @IsOptional()
  @IsString()
  observacoes?: string;
}
