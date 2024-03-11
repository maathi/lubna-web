import { axios } from "@/lib/axios"
import storage from "@/utils/storage"

// import { AuthUser } from '../types';

export const getUser = () => {
  return axios.get("/users/me")
}
