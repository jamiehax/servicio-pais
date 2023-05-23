import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./index.css";

import Root from "./routes/Root";
import ErrorPage from "./routes/ErrorPage";

import Inicio from './routes/Inicio';
import Abastecimiento from './routes/Abastecimiento';
import Administrativa from './routes/Administrativa';
import Contabilidad from './routes/Contabilidad';
import Directiva from './routes/Directiva';
import Dis from './routes/Dis';
import Operador from './routes/Operador';
import Trat from './routes/Trat';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "routes/Inicio",
        element: <Inicio />,
      },
      {
        path: "routes/Abastecimiento",
        element: <Abastecimiento />,
      },
      {
        path: "routes/Contabilidad",
        element: <Contabilidad />,
      },
      {
        path: "routes/Directiva",
        element: <Directiva />,
      },
      {
        path: "routes/Dis",
        element: <Dis />,
      },
      {
        path: "routes/Administrativa",
        element: <Administrativa />,
      },
      {
        path: "routes/Operador",
        element: <Operador />,
      },
      {
        path: "routes/Trat",
        element: <Trat />,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);