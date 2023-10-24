export interface UserPayload {
  sub: string;
  email: string;
  senha: string;
  iat?: number;
  exp?: number;
}
