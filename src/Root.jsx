import { Outlet, NavLink } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div class="main" id="sidebar">
        <h1>Fichas</h1>
        <nav>
          <h2>
            <NavLink index to={`/fichas/Inicio`}>Inicio</NavLink>
          </h2>
          <ul>
            <li>
              <NavLink to={`/fichas/Abastecimiento`}>Abastecimiento</NavLink>
            </li>
            <li>
              <NavLink to={`/fichas/Administrativa`}>Administrativa</NavLink>
            </li>
            <li>
              <NavLink to={`/fichas/Contabilidad`}>Contabilidad</NavLink>
            </li>
            <li>
              <NavLink to={`/fichas/Directiva`}>Directiva</NavLink>
            </li>
            <li>
              <NavLink to={`/fichas/Dis`}>Distribución y Tarifa</NavLink>
            </li>
            <li>
              <NavLink to={`/fichas/Operador`}>Operador</NavLink>
            </li>
            <li>
              <NavLink to={`/fichas/Trat`}>Tatamiento y Regulación</NavLink>
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