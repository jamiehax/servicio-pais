import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>Fichas</h1>
        <nav>
          <ul>
            <li>
              <Link to={`/routes/Inicio`}>Inicio</Link>
            </li>
            <li>
              <Link to={`/routes/Abastecimiento`}>Abastecimiento</Link>
            </li>
            <li>
              <Link to={`/routes/Administrativa`}>Administrativa</Link>
            </li>
            <li>
              <Link to={`/routes/Contabilidad`}>Contabilidad</Link>
            </li>
            <li>
              <Link to={`/routes/Directiva`}>Directiva</Link>
            </li>
            <li>
              <Link to={`/routes/Dis`}>Distribución y Tarifa</Link>
            </li>
            <li>
              <Link to={`/routes/Operador`}>Operador</Link>
            </li>
            <li>
              <Link to={`/routes/Trat`}>Tatamiento y Regulación</Link>
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