import { Categoria } from "../../categorias/entities/categoria.entity";

export class CreateInsumoDto {
    titulo: string;
    descricao?: string;
    unidadeMedida?: string;
    idCategoria: number
}
