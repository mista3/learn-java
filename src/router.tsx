import { ErrorPage, LecturePage, MainPage } from './pages';
import { RouteObject } from "react-router-dom";

export const routes:RouteObject[] = [
  {
    path: "/lectures/:id",
    element: <LecturePage/>
  },
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  }
];