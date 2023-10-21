import { IsNotEmpty } from "class-validator";

export class CreateListaInsumoDto {
    @IsNotEmpty({ message: 'O insumo da lista deve ter uma quantidade' })
    quantidade: number;
    idProduto?: number;
    idInsumo: number;
    idCotacao?: number;
}
