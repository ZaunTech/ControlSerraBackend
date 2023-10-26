export interface UserPayload {
  sub: number;
  email: string;
  name: string;
  senha: string;
  iat?: number;
  exp?: number;
}
