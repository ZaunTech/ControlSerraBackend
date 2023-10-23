import { PartialType } from '@nestjs/mapped-types';
import { CreateProdutosBaseDto } from './create-produtos-base.dto';

export class UpdateProdutosBaseDto extends PartialType(CreateProdutosBaseDto) {
  titulo?: string;
  valorUnitario?: number;
  observacoes?: string;
}
