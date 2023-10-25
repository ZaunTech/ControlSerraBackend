import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UnauthorizedError } from './errors/unauthorized.error';
import { UserPayload } from './models/UserPayload';
import { UserToken } from './models/UserToken';
import { UsuariosService } from '../usuarios/usuarios.service';
import { Usuario } from '../usuarios/entities/usuario.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usuarioService: UsuariosService) {}

  async login(user: Usuario):Promise<UserToken> {
  const payload:UserPayload = {
          sub: user.id, 
          email: user.email,
          senha: user.senha,
        };

        return {access_token: this.jwtService.sign(payload)};
    }
  
    async validateUser(email: string, password: string){
    const usuario = await this.usuarioService.findByEmail(email);

    if (usuario) {
      const isPasswordValid = await bcrypt.compare(password, usuario.senha);

      if (isPasswordValid) {
        return {
          ...usuario,
          tipoUsuario: undefined,
          cpf: undefined,
          telefone: undefined,
          senha: undefined,
          createdAt: undefined,
          updatedAt: undefined,
        };
      }
    }

    throw new UnauthorizedError(
      'Endereço de email ou senha fornececido esta incorreto.',
    );
  }

  async createToken(userId: number) {
    const payload = { sub: userId };
    return this.jwtService.sign(payload);
  }

  async verifyToken(token: string) {
    try {
      const decoded = this.jwtService.verify(token);
      return decoded;
    } catch (error) {
      return null;
    }
  }
}
