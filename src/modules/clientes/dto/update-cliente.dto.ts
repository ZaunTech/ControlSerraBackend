import { PartialType } from '@nestjs/mapped-types';
import { CreateClienteDto } from './create-cliente.dto';
import { contaTipo } from '@prisma/client';

export class UpdateClienteDto extends PartialType(CreateClienteDto) {
    email?: string;
    telefone?: string;
    contaTipo?: contaTipo;
    rua?:       string ;
    numero?:    string;
    complemento?: string;
    cep?:         string;
    bairro?:      string;
    cidade?:      string;
    estado?:      string;
    pais?:        string;
    Nome?:        string;
    cpf?:         string;
    rg?:          string;
    nomeFantasia?: string;
    razaoSocial?: string;
    cnpj?:        string;
}
