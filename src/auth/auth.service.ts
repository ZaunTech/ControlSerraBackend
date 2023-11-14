import { Injectable } from '@nestjs/common';
import { UsuariosService } from 'src/modules/usuarios/usuarios.service';
import * as bcrypt from 'bcrypt';
import { Usuario } from 'src/modules/usuarios/entities/usuario.entity';
import { UsuarioPayload } from './models/UsuarioPayload';
import { JwtService } from '@nestjs/jwt';
import { UsuarioToken } from './models/UsuarioToken';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuariosService: UsuariosService,
    private readonly jwtService: JwtService,
  ) {}

  async login(usuario: Usuario): Promise<UsuarioToken> {
    const payload: UsuarioPayload = {
      sub: usuario.id,
      email: usuario.email,
      nome: usuario.nome,
    };

    const jwtToken = this.jwtService.sign(payload);

    return { accessToken: jwtToken };
  }

  async validateUser(
    email: string,
    password: string,
  ): Promise<Usuario | Error> {
    const usuario = await this.usuariosService.findByEmail(email);
    if (usuario) {
      const isPasswordValid = await bcrypt.compare(password, usuario.senha);
      if (isPasswordValid) {
        usuario.senha = undefined;
        return usuario;
      }
      throw new Error('O Email ou senha informado não esta correto');
    }

    throw new Error('O Email ou senha informado não esta correto');
  }
}
