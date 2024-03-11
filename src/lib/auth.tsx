import { configureAuth } from "react-query-auth" // import {
//   getUserProfile,
//   registerWithEmailAndPassword,
//   loginWithEmailAndPassword,
//   AuthResponse,
//   logout,
// } from './api';
import { getUser, loginWithEmailAndPassword } from "@/features/auth"
import storage from "@/utils/storage"

export type LoginCredentials = {
  email: string
  password: string
}

export type RegisterCredentials = {
  email: string
  name: string
  password: string
}

async function handleUserResponse(data: any) {
  const { jwt, user } = data
  storage.setToken(jwt)
  return user
}

async function userFn() {
  const { user } = await getUser()
  return user ?? null
}

async function loginFn(data: LoginCredentials) {
  const response = await loginWithEmailAndPassword(data)
  const user = await handleUserResponse(response)
  return user
}

async function registerFn(data: RegisterCredentials) {
  // const response = await registerWithEmailAndPassword(data);
  // const user = await handleUserResponse(response);
  // return user;
  return {}
}

async function logoutFn() {
  storage.clearToken()
  window.location.assign(window.location.origin as unknown as string)
}

export const { useUser, useLogin, useRegister, useLogout, AuthLoader } =
  configureAuth({
    userFn,
    loginFn,
    registerFn,
    logoutFn,
  })
