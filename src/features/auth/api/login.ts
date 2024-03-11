// import { axios } from "@/lib/axios"
// import { useQuery } from "@tanstack/react-query"

// export const login = (username: string, password: string) => {
//   return axios.post("auth/local", {
//     identifier: username,
//     password: password,
//   })
// }

// export const useLogin = (username: string, password: string) => {
//   return useQuery({
//     queryKey: ["login"],
//     queryFn: () => login(username, password),
//   })
// }

import { axios } from "@/lib/axios"

// import { UserResponse } from '../types';

export type LoginCredentialsDTO = {
  email: string
  password: string
}

export const loginWithEmailAndPassword = (data: LoginCredentialsDTO) => {
  return axios.post("/auth/local", { identifier: data.email, ...data })
}
