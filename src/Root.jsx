import { Outlet, NavLink } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div className="desktop-nav" id="sidebar">
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
              <NavLink to={`/fichas/Trat`}>Tratamiento y Regulación</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mobile-nav" id="topbar">
          <nav>
              <NavLink className="mobile-nav-link-div-home" index to={`/fichas/Inicio`}>
                Inicio
              </NavLink>
              <NavLink className="mobile-nav-link-div" to={`/fichas/Abastecimiento`}>
                Abastecimiento
              </NavLink>
              <NavLink className="mobile-nav-link-div" to={`/fichas/Administrativa`}>
                Administrativa
              </NavLink> 
              <NavLink className="mobile-nav-link-div" to={`/fichas/Contabilidad`}>
                Contabilidad
              </NavLink>
              <NavLink className="mobile-nav-link-div" to={`/fichas/Directiva`}>
                Directiva
              </NavLink>
              <NavLink className="mobile-nav-link-div" to={`/fichas/Dis`}>
                Diseño y Tarifa
              </NavLink>       
              <NavLink className="mobile-nav-link-div" to={`/fichas/Operador`}>
                Operador
              </NavLink>
              <NavLink className="mobile-nav-link-div" to={`/fichas/Trat`}>
                Tratamiento y Regulación
              </NavLink>
               
          </nav>       
      </div>
      <div className="content">
        <Outlet />
      </div>
    </>
  );
}