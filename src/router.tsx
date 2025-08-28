import { ErrorPage, LecturePage, MainPage } from './pages';
import { RouteObject } from "react-router-dom";

const root = 'learn-java';

export const routes:RouteObject[] = [
  {
    path: `/${root}/lectures/:id`,
    element: <LecturePage/>
  },
  {
    path: `/${root}/`,
    element: <MainPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  }
];