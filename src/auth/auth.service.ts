import { Injectable } from '@nestjs/common';
import { UsuariosService } from 'src/modules/usuarios/usuarios.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly usuariosService: UsuariosService) {}

  async validateUser(email: string, password: string) {
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
