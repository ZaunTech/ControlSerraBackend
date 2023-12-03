import { Usuario } from "src/modules/usuarios/entities/usuario.entity";

export interface UsuarioToken {
  accessToken: string;
  usuario: Usuario;
}
