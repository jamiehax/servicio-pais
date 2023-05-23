import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>Fichas</h1>
        <nav>
          <ul>
            <li>
              <a href={`/routes/Inicio`}>Inicio</a>
            </li>
            <li>
              <a href={`/routes/Abastecimiento`}>Abastecimiento</a>
            </li>
            <li>
              <a href={`/routes/Administrativa`}>Administrativa</a>
            </li>
            <li>
              <a href={`/routes/Contabilidad`}>Contabilidad</a>
            </li>
            <li>
              <a href={`/routes/Directiva`}>Directiva</a>
            </li>
            <li>
              <a href={`/routes/Dis`}>Distribución y Tarifa</a>
            </li>
            <li>
              <a href={`/routes/Operador`}>Operador</a>
            </li>
            <li>
              <a href={`/routes/Trat`}>Tatamiento y Regulación</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}