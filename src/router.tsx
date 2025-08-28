import { ErrorPage, LecturePage, MainPage } from './pages';
import { RouteObject } from "react-router-dom";

export const ROOT_PATH = '/learn-java';

export const getLectureRoute = (id:string|number) => `${ROOT_PATH}/lectures/${id}`;

export const routes:RouteObject[] = [
  {
    path: `${ROOT_PATH}/lectures/:id`,
    element: <LecturePage/>
  },
  {
    path: ROOT_PATH,
    element: <MainPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  }
];