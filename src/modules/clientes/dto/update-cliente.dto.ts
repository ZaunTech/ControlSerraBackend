import { PartialType } from '@nestjs/mapped-types';
import { CreateClienteDto } from './create-cliente.dto';
import { contaTipo } from '@prisma/client';

export class UpdateClienteDto extends PartialType(CreateClienteDto) {
    email?: string;
    telefone?: string;
    contaTipo?: contaTipo;
    nome?:        string;
    cpf?:         string;
    rg?:          string;
    nomeFantasia?: string;
    razaoSocial?: string;
    cnpj?:        string;
    pais?:        string;
    cep?:         string;
    estado?:      string;
    cidade?:      string;
    bairro?:      string;
    rua?:       string;
    numero?:    string;
    complemento?: string;
}
