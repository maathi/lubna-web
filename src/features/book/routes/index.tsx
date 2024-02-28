import { Navigate, Route, Routes } from "react-router-dom"
import { SearchScreen } from "./SearchScreen"
import { BookDetailsScreen } from "./BookDetailsScreen"

export const BookRoutes = () => {
  return (
    <Routes>
      <Route path="search" element={<SearchScreen />} />
      <Route path=":bookId" element={<BookDetailsScreen />} />
      {/* <Route path="*" element={<Navigate to="." />} /> */}
    </Routes>
  )
}
