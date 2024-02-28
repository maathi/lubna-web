import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { useBookDetails } from "../api/bookDetails.service"

interface Book {
  title: string
  author_name: string[]
  covers?: string[]
}

// interface ParamTypes {
//   id: string
// }

export const BookDetailsScreen: React.FC = () => {
  const { bookId } = useParams()
  // const [book, setBook] = useState<Book | null>(null)
  // const bookId = "OL1794485W"
  // if (!bookId) return <h1>go back no book here</h1>
  const bookDetailsQuery = useBookDetails({ bookId: bookId ?? "OL1794485W" })

  if (bookDetailsQuery.isLoading) return <h1>loading...</h1>
  if (!bookDetailsQuery.data) return <h1>no data!!</h1>

  // useEffect(() => {
  //   console.log(bookDetailsQuery.data.data)
  // }, [bookDetailsQuery.data.data])

  return (
    <div>
      {bookDetailsQuery.data && (
        <div>
          <h1>{bookDetailsQuery.data.title}</h1>
          {/* <p>Author(s): {book.author_name.join(", ")}</p> */}

          {bookDetailsQuery.data.covers && (
            <img
              src={`https://covers.openlibrary.org/b/id/${bookDetailsQuery.data.covers[1]}-M.jpg`}
              alt={`${bookDetailsQuery.data.title} Cover`}
            />
          )}
        </div>
      )}
    </div>
  )
}
