import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UnauthorizedError } from './errors/unauthorized.error';
import { UserPayload } from './models/UserPayload';
import { UserToken } from './models/UserToken';
import { UsuariosService } from '../usuarios/usuarios.service';
import { Usuario } from '../usuarios/entities/usuario.entity';
import { CreateUsuarioDto } from '../usuarios/dto/create-usuario.dto';
@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usuarioService: UsuariosService) {}

  async register(createUserDto: CreateUsuarioDto){
   // Verifique se o usuário com o mesmo e-mail já existe
   const existingUser = await this.usuarioService.findByEmail(createUserDto.email);
   if (existingUser) {
     throw new Error('Já existe um usuário com esse e-mail.');
   }

   // Crie o novo usuário
   const newUser = await this.usuarioService.create(createUserDto);

   // Gere um token JWT para o novo usuário
   const payload = {
     sub: newUser.id, // Você pode personalizar isso de acordo com suas necessidades
     email: newUser.email,
     name: newUser.nome,
     senha: newUser.senha,
     // Outras informações do usuário, se necessário
   };

   const token = this.jwtService.sign(payload);
   return { access_token: token };
 }

  async login(user: Usuario):Promise<UserToken> {
  
    const payload:UserPayload = {
          sub: user.id, 
          email: user.email,
          name: user.nome,
          senha: user.senha,
        };

        const token = this.jwtService.sign(payload);
        return {access_token: token};
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
