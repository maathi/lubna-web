import { axios } from "@/lib/axios"
import { useQuery } from "@tanstack/react-query"

export const login = () => {
  return axios.post("auth/login", {
    email: "mr@poop.com",
    password: "mrpoop",
  })
}

export const useLogin = () => {
  useQuery({ queryKey: ["login"], queryFn: () => {} })
}
