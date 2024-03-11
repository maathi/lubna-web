// import Search from "../features/search/routes/Search"
import { BookRoutes } from "@/features/book"
import { Route, Routes, useRoutes } from "react-router-dom"
import { protectedRoutes } from "./protected"
import { publicRoutes } from "./public"
// import { Landing } from '@/features/misc';
// import { useAuth } from '@/lib/auth';

// import { protectedRoutes } from './protected';
// import { publicRoutes } from './public';

export const AppRoutes = (props: any) => {
  console.log(props)
  // const auth = useAuth();

  // const commonRoutes = [{ path: '/', element: <Landing /> }];

  // const routes = auth.user ? protectedRoutes : publicRoutes;

  // const element = useRoutes([...routes, ...commonRoutes]);
  // const element = useRoutes([
  //   { path: "/books", element: <BookRoutes /> },
  //   { path: "*", element: <div>not found</div> },
  // ])
  const element = useRoutes(publicRoutes)
  return <>{element}</>
}
