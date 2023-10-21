import { PartialType } from '@nestjs/mapped-types';
import { CreateCotacaoDto } from './create-cotacao.dto';

export class UpdateCotacaoDto extends PartialType(CreateCotacaoDto) {
    data?: Date;
    valor?: number;
    idFornecedor?: number;
    idInsumo?: number;
}
