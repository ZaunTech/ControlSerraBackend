import { contaTipo } from '@prisma/client';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumberString,
  IsString,
  Matches,
  ValidateIf,
} from 'class-validator';

export class Cliente {
  id: number;
  @IsNotEmpty({ message: 'O e-mail não pode estar vazio' })
  @IsEmail({}, { message: 'O e-mail inserido não é válido' })
  email: string;
  @IsNotEmpty({ message: 'O telefone não pode estar vazio' })
  @IsNumberString({}, { message: 'O telefone inserido não é válido' })
  telefone: string;
  @IsNotEmpty({ message: 'O tipo da conta não pode estar vazio' })
  @IsEnum(contaTipo, {
    message: 'O tipo da conta não condiz com as opções disponíveis',
  })
  contaTipo: contaTipo;
  @ValidateIf((object, value) => value !== undefined)
  @IsString({ message: 'O nome inserido não é válido' })
  @Matches(/^[a-zA-Z -]*$/, { message: 'O nome só pode ter letras' })
  nome?: string;
  @ValidateIf((object, value) => value !== undefined)
  @IsNumberString({}, { message: 'O CPF inserido não é válido' })
  cpf?: string;
  @ValidateIf((object, value) => value !== undefined)
  @IsNumberString({}, { message: 'O RG inserido não é válido' })
  rg?: string;
  @ValidateIf((object, value) => value !== undefined)
  @IsString({ message: 'O nome fantasia inserido não é válido' })
  nomeFantasia?: string;
  @ValidateIf((object, value) => value !== undefined)
  @IsString({ message: 'A razão social inserida não é válida' })
  razaoSocial?: string;
  @ValidateIf((object, value) => value !== undefined)
  @IsNumberString({}, { message: 'O CNPJ inserido não é válido' })
  cnpj?: string;
  @ValidateIf((object, value) => value !== undefined)
  @IsString({ message: 'O país inserido não é válido' })
  pais?: string;
  @ValidateIf((object, value) => value !== undefined)
  @IsNumberString({}, { message: 'O CEP inserido não é válido' })
  cep?: string;
  @ValidateIf((object, value) => value !== undefined)
  @IsString({ message: 'O estado inserido não é válido' })
  estado?: string;
  @ValidateIf((object, value) => value !== undefined)
  @IsString({ message: 'A cidade inserida não é válida' })
  cidade?: string;
  @ValidateIf((object, value) => value !== undefined)
  @IsString({ message: 'O bairro inserido não é válido' })
  bairro?: string;
  @ValidateIf((object, value) => value !== undefined)
  @IsString({ message: 'A rua inserida não é válida' })
  rua?: string;
  @ValidateIf((object, value) => value !== undefined)
  @IsNumberString({}, { message: 'O numero inserido não é válido' })
  numero?: string;
  @ValidateIf((object, value) => value !== undefined)
  @IsString({ message: 'O complemento inserido não é válido' })
  complemento?: string;
  createdAt: Date;
  updatedAt: Date;
}
