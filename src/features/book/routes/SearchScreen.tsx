// import { createStackNavigator } from "@react-navigation/stack"
import axios from "axios"
import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

interface Book {
  key: string
  title: string
  author_name: string[]
  cover_i: number
}

// const SearchStack = createStackNavigator()
interface Props {
  route: any
  navigation: any
}

export const SearchScreen = () => {
  const [query, setQuery] = useState<string>("")
  const [books, setBooks] = useState<Book[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (!query) return
    handleSearch(query)
  }, [query])

  const handleSearch = async (text: string) => {
    let cancel: any
    console.log(`http://openlibrary.org/search.json?q=${text}&limit=5`)
    axios({
      method: "GET",
      url: `http://openlibrary.org/search.json`,
      params: { q: text, limit: 12 },
      // cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((r) => setBooks(r.data.docs))
      .catch((e) => console.error(e))
      .finally(() => setIsLoading(false))
  }

  const handleChange = (text: string) => {
    setQuery(text)
    // debouncedHandelSearch(text)
  }

  // function debounce<T extends (...args: any[]) => void>(
  //   cb: T,
  //   delay: number = 250
  // ): (...args: Parameters<T>) => void {
  //   let timeout: NodeJS.Timeout | null

  //   return (...args: Parameters<T>): void => {
  //     if (timeout) {
  //       clearTimeout(timeout)
  //     }

  //     timeout = setTimeout(() => {
  //       cb(...args)
  //     }, delay)
  //   }
  // }

  // let debouncedHandelSearch = debounce(handleSearch, 3000)

  const renderBook = ({ item }: { item: Book }) => {
    const { key, title, author_name, cover_i } = item
    const author = author_name?.join(", ")
    const coverUrl = `http://covers.openlibrary.org/b/id/${cover_i}-M.jpg`
    return (
      <div
        style={{ display: "flex" }}
        onClick={() => navigate("/books/" + key.split("s/")[1])}
      >
        <img src={coverUrl} alt="" />
        {/* <div>
          <p>{title}</p>
          <p>{author}</p>
        </div> */}
      </div>
    )
  }

  return (
    <div>
      <input
        // style={styles.input}
        placeholder="Search for books..."
        onChange={(e) => handleChange(e.target.value)}
        value={query}
      />
      {isLoading ? (
        // <ActivityIndicator style={styles.loading} />
        <div>loading...</div>
      ) : (
        // <FlatList
        //   data={books}
        //   renderItem={renderBook}
        //   keyExtractor={(item) => item.key}
        //   contentContainerStyle={styles.bookList}
        // />
        <ul
          style={{
            display: "flex",
            gap: "20px",
            // justifyContent: "center",
            alignItems: "center",
            margin: "auto",
            flexWrap: "wrap",
          }}
        >
          {books.map((b) => (
            <span>{renderBook({ item: b })} </span>
          ))}
        </ul>
      )}
    </div>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     margin: 15,
//   },
//   input: { borderWidth: 1, borderRadius: 5, padding: 10, marginBottom: 10 },
//   loading: {
//     // marginTop: 20,
//   },
//   bookList: {
//     // paddingHorizontal: 20,
//   },
//   bookContainer: {
//     flexDirection: "row",
//     marginBottom: 20,
//   },
//   bookCover: { width: 50, height: 75, marginRight: 10 },
//   bookDetails: {
//     flex: 1,
//   },
//   bookTitle: {
//     fontWeight: "bold",
//     marginBottom: 5,
//   },
//   bookAuthor: {
//     fontStyle: "italic",
//   },
// })
