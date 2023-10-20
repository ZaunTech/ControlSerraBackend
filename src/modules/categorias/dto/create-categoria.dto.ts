import { IsNotEmpty, Matches } from 'class-validator';
import { Insumo } from 'src/modules/insumos/entities/insumo.entity';

export class CreateCategoriaDto {
  @IsNotEmpty({ message: 'A categoria deve ter um titulo' })
  @Matches(/^[a-zA-Z -]*$/, { message: 'A categoria só pode ter letras' })
  titulo: string;
  @IsNotEmpty({ message: 'A categoria deve ter um titulo' })
  @Matches(/^[a-zA-Z -]*$/, { message: 'O tipo só pode ter letras' })
  tipo: string;
  @Matches(/^[a-zA-Z -]*$/, { message: 'A descrição só pode ter letras' })
  descricao?: string;
  insumos?: Insumo[];
}
