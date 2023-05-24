import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./index.css";

import Root from "./Root";
import ErrorPage from "./fichas/ErrorPage";

import Inicio from './fichas/Inicio';
import Abastecimiento from './fichas/Abastecimiento';
import Administrativa from './fichas/Administrativa';
import Contabilidad from './fichas/Contabilidad';
import Directiva from './fichas/Directiva';
import Dis from './fichas/Dis';
import Operador from './fichas/Operador';
import Trat from './fichas/Trat';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "fichas/Inicio",
        element: <Inicio />,
      },
      {
        path: "fichas/Abastecimiento",
        element: <Abastecimiento />,
      },
      {
        path: "fichas/Contabilidad",
        element: <Contabilidad />,
      },
      {
        path: "fichas/Directiva",
        element: <Directiva />,
      },
      {
        path: "fichas/Dis",
        element: <Dis />,
      },
      {
        path: "fichas/Administrativa",
        element: <Administrativa />,
      },
      {
        path: "fichas/Operador",
        element: <Operador />,
      },
      {
        path: "fichas/Trat",
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