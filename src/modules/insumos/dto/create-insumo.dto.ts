import { IsNotEmpty, Matches } from "class-validator";
import { Categoria } from "../../categorias/entities/categoria.entity";

export class CreateInsumoDto {
    @IsNotEmpty({ message: 'O insumo deve ter um titulo' })
    @Matches(/^[a-zA-Z0-9 -]*$/, {message: 'O nome de cliente só pode ter letras'})
    titulo: string;
    descricao?: string;
    unidadeMedida?: string;
    idCategoria: number
}
