import { PartialType } from '@nestjs/mapped-types';
import { CreateInsumosProdutosBaseDto } from './create-insumo-produtos-base.dto';

export class UpdateInsumosProdutosBaseDto extends PartialType(CreateInsumosProdutosBaseDto) {}
