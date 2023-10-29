import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Categoria } from '../../categorias/entities/categoria.entity';

export class Insumo {
  id: number;
  @IsNotEmpty({message: 'O titulo não pode estar vazio'})
  @IsString({message: 'O titulo inserido não é válido'})
  titulo: string;
  @IsString({message: 'A descrição inserida não é válida'})
  descricao?: string;
  @IsString({message: 'A unidade de medida inserida não é válida'})
  unidadeMedida?: string;
  @IsNumber({},{message: 'A categoria inserida não é válida'})
  idCategoria?: number;
  categoria?: Categoria;
  createdAt: Date;
  updatedAt: Date;
}
