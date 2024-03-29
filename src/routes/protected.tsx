import { MainLayout } from "@/components/layout"
import { BookRoutes } from "@/features/book"
import { Suspense } from "react"
import { Link, Navigate, Outlet } from "react-router-dom"

// const App = () => {
//   return (
//     <MainLayout>
//       <Suspense
//         fallback={
//           <div className="h-full w-full flex items-center justify-center">
//             <Spinner size="xl" />
//           </div>
//         }
//       >
//         <Outlet />
//       </Suspense>
//     </MainLayout>
//   );
// };
const App = () => {
  return (
    <MainLayout>
      <strong>
        <ul>
          <Link to="books/search">search</Link>
        </ul>
        <Outlet />
      </strong>
    </MainLayout>
  )
}
export const protectedRoutes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "books/*", element: <BookRoutes /> },
      // { path: '/users', element: <Users /> },
      // { path: '/profile', element: <Profile /> },
      // { path: '/', element: <Dashboard /> },
      // { path: '*', element: <Navigate to="." /> },
    ],
  },
]
