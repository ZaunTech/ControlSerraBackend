import {
  IsString,
  MinLength,
  MaxLength,
  Matches,
  Equals,
  ValidateIf,
  IsEmpty,
} from 'class-validator';

export class ChangePasswordDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'A senha é muito fraca',
  })
  password: string;

  @IsString()
  @ValidateIf((dto, conf) => conf !== dto.password)
  @IsEmpty({
    message: 'As senhas não coincidem',
  })
  confpassword: string;
}
