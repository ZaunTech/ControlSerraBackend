import { contaTipo } from "@prisma/client"
import { Cotacao } from "../../cotacaos/entities/cotacao.entity"

export class CreateFornecedorDto{
    email: string;
    telefone: string;
    contaTipo: contaTipo;
    pais?:        string;
    cep?:         string;
    estado?:      string;
    cidade?:      string;
    bairro?:      string;
    rua?:       string ;
    numero?:    string;
    complemento?: string;
    nome?:        string;
    cpf?:         string;
    rg?:          string;
    nomeFantasia?: string
    razaoSocial?: string
    cnpj?:        string
    cotacaos?:    Cotacao[];
}