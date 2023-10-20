import { PartialType } from "@nestjs/mapped-types";
import { CreateListaInsumoDto } from "./create-lista-insumo.dto";

export class UpdateListaInsumoDto extends PartialType(CreateListaInsumoDto) {
  quantidade?: number;
  idProduto?: number;
  idInsumo?: number;
  idCotacao?: number;
}
