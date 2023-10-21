import { IsNotEmpty, Matches } from "class-validator";

export class CreateInsumoDto {
    @IsNotEmpty({ message: 'O insumo deve ter um titulo' })
    @Matches(/^[a-zA-Z -]*$/, {message: 'O nome do insumo só pode ter letras'})
    titulo: string;
    descricao?: string;
    unidadeMedida?: string;
    idCategoria?: number
}
