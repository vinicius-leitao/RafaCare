type LoginPayload = {
  login: string;
  password: string;
}

type LoginResponse = {
  id: string,
  name: string,
  email: string
}

export type {
  LoginPayload,
  LoginResponse
}