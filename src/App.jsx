import React from "react";

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
import { BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Root />} errorElement={<ErrorPage />}>
            <Route index element={<Inicio />} />
            <Route path='fichas/Inicio' element={<Inicio />} />
            <Route path='fichas/Abastecimiento' element={<Abastecimiento />} />
            <Route path='fichas/Administrativa' element={<Administrativa />} />
            <Route path='fichas/Contabilidad' element={<Contabilidad />} />
            <Route path='fichas/Directiva' element={<Directiva />} />
            <Route path='fichas/Dis' element={<Dis />} />
            <Route path='fichas/Operador' element={<Operador />} />
            <Route path='fichas/Trat' element={<Trat />} />
            <Route path='*' errorElement={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
