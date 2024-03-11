import React, { useEffect, useState } from "react"
import { loginWithEmailAndPassword } from "../api/login"
import storage from "@/utils/storage"
import { useMutation } from "@tanstack/react-query"

export default function Login() {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const mutation = useMutation({
    mutationFn: loginWithEmailAndPassword,
    onSuccess: (data, variables, context) => {
      // Boom baby!
      console.log("baby : ", data)
    },
  })
  // const { data, isLoading, error } = useLogin(username, password)

  // if (isLoading) return <h1>Loading...</h1>
  // if (error) return <h1>Error</h1>

  // if (data) {
  // console.log(data)
  // storage.setToken(data.data.)
  // }
  async function handleUserResponse(data: any) {
    const { jwt, user } = data
    storage.setToken(jwt)
    console.log("user : ", user)
    return user
  }

  useEffect(() => {
    if (mutation.data) handleUserResponse(mutation.data)
  }, [])

  return (
    <div>
      <h1>Login : </h1>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => mutation.mutate({ email, password })}>
        Login
      </button>
    </div>
  )
}
