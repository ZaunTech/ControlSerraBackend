import { IsNotEmpty } from "class-validator";

export class CreateListaInsumoDto {
    @IsNotEmpty()
    quantidade: number;
    idProduto: number;
    idInsumo: number;
    idCotacao?: number;
}
