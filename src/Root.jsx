import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div class="main" id="sidebar">
        <h1>Fichas</h1>
        <nav>
          <h2>
            <Link to={`/fichas/Inicio`}>Inicio</Link>
          </h2>
          <ul>
            <li>
              <Link to={`/fichas/Abastecimiento`}>Abastecimiento</Link>
            </li>
            <li>
              <Link to={`/fichas/Administrativa`}>Administrativa</Link>
            </li>
            <li>
              <Link to={`/fichas/Contabilidad`}>Contabilidad</Link>
            </li>
            <li>
              <Link to={`/fichas/Directiva`}>Directiva</Link>
            </li>
            <li>
              <Link to={`/fichas/Dis`}>Distribución y Tarifa</Link>
            </li>
            <li>
              <Link to={`/fichas/Operador`}>Operador</Link>
            </li>
            <li>
              <Link to={`/fichas/Trat`}>Tatamiento y Regulación</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="content">
        <Outlet />
      </div>
    </>
  );
}