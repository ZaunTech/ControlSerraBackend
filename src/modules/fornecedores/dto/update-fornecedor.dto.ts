import { PartialType } from '@nestjs/mapped-types';
import { CreateFornecedorDto } from './create-fornecedor.dto';
import { contaTipo } from '@prisma/client';

export class UpdateFornecedorDto extends PartialType(CreateFornecedorDto) {
  email?: string;
  telefone?: string;
  contaTipo?: contaTipo;
  pais?: string;
  cep?: string;
  estado?: string;
  cidade?: string;
  bairro?: string;
  rua?: string;
  numero?: string;
  complemento?: string;
  nome?: string;
  cpf?: string;
  rg?: string;
  nomeFantasia?: string;
  razaoSocial?: string;
  cnpj?: string;
}
