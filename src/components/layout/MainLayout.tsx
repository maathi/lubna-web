import { useLogin } from "@/features/auth/api/login"
import {
  QueryClient,
  useQueryClient,
  setQueryData,
} from "@tanstack/react-query"

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isLoading, error, data } = useLogin()
  const QueryClient = useQueryClient()
  if (isLoading) return <h1>Loading...</h1>
  if (error) return <h1>Error</h1>
  if (data) console.log(data)

  return (
    <>
      <h1>header</h1>
      <h3>{data?.user?.email}</h3>
      <button onClick={() => QueryClient.setQueryData(["login"], null)}>
        logout
      </button>
      {children}
    </>
  )
}
