import { axios } from "@/lib/axios"
import { useQuery } from "@tanstack/react-query"

interface Book {
  title: string
  covers: string[]
}

export const getBookDetails = async ({
  bookId,
}: {
  bookId: string
}): Promise<Book> => {
  return axios.get(`https://openlibrary.org/works/${bookId}.json`)
}

export const useBookDetails = ({ bookId }: { bookId: string }) => {
  return useQuery({
    queryKey: ["bookDetails", bookId],
    queryFn: () => getBookDetails({ bookId }),
  })
}
