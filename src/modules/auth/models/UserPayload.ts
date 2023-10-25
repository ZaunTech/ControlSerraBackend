export interface UserPayload {
  sub: number;
  name: string;
  email: string;
  senha: string;
  iat?: number;
  exp?: number;
}
