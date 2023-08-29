export interface User {
  id: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  role: string;
}

export interface UserInfo {
  sub: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  role: string;
  iat: number;
  exp: number;
}

export interface SignUpRequest {
  email: string;
  password: string;
  username: string;
  firstName: string;
  lastName: string;
}
