import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UnauthorizedError } from './errors/unauthorized.error';
import { UserPayload } from './models/UserPayload';
import { UserToken } from './models/UserToken';
import { UsuariosService } from '../usuarios/usuarios.service';
import { CreateUsuarioDto } from '../usuarios/dto/create-usuario.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usuarioService: UsuariosService
  ) {}

  async login(user: CreateUsuarioDto): Promise<UserToken> {
    const payload: UserPayload = {
      sub: user.nome,
      email: user.email,
      senha: user.senha,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateUser(email: string, password: string){
    const user = await this.usuarioService.findByEmail(email);

    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.senha);

      if (isPasswordValid) {
        return {
          ...user,
          password: undefined,
        };
      }
    }

    throw new UnauthorizedError(
      'Endereço de email ou senha fornececido esta incorreto.',
    );
  }
}
