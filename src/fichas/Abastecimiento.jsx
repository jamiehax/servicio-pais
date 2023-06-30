import { React } from 'react';
import SearchFicha from '../SearchFicha';
import Bombas from './Bombas';

export default function Abastecimiento() {

  const putInfo = data => {
    // show footer and the information div
    document.getElementById("info-div").hidden = false;
    document.getElementById("fundacion-footer").hidden = false;
    
    // fill in elements in the information div
    const infoDiv = document.getElementById("info-div");
    const pElements = infoDiv.getElementsByTagName("p");
    for (const p of pElements) {
      p.innerHTML = data.token;
    }

    // put bombas data into var to pass as hook to bombas component
    bombas = data.data;
  };

  let bombas;

  function clearInfo() {
    // clear information put in the div
    const infoDiv = document.getElementById("info-div");
    const pElements = infoDiv.getElementsByTagName("p");
    for (const p of pElements) {
      p.innerHTML = "";
    }

    // hide the information div and the footer
    document.getElementById("info-div").hidden = true;
    document.getElementById("fundacion-footer").hidden = true;
  };
  
    return (
        <>
          <div class = "container">
              
              {<SearchFicha putInfo={putInfo} clearInfo={clearInfo}/>}

              <h1>Información sistema de Abastecimiento</h1>

              <div class="row" id="info-div" hidden>
                <div class="col-lg-6">
                  <h2>Fuente</h2>
                </div>
                <div class="col-lg-6">
                  <h2>Especificaciones Técnicas</h2>
                </div>
        
                <div class="col-lg-6">
                  <label>Superficial (Curso)</label>
                  <p class="info" id="abastecimiento1"></p>
                </div>
                <div class="col-lg-6">
                  <label>Planos Proyectos</label>
                  <p class="info" id="abastecimiento2"></p>
                </div>
                <div class="col-lg-6">
                  <label>Superficial (Cuerpo)</label>
                  <p class="info" id="abastecimiento3"></p>
                </div>
                <div class="col-lg-6">
                  <label>Prueba de Bombeo</label>
                  <p class="info" id="abastecimiento4"></p>
                </div>
                <div class="col-lg-6">
                  <label>Noria</label>
                  <p class="info" id="abastecimiento5"></p>
                </div>
                <div class="col-lg-6">
                  <label>Diseño Tratamiento</label>
                  <p class="info" id="abastecimiento6"></p>
                </div>
                <div class="col-lg-6">
                  <label>Pozo Profundo</label>
                  <p class="info" id="abastecimiento7"></p>
                </div>
                <div class="col-lg-6">
                  <label>Muestra NCh 409/1</label>
                  <p class="info" id="abastecimiento8"></p>
                </div>
                <div class="col-lg-6">
                  <label>Vertiente</label>
                  <p class="info" id="abastecimiento9"></p>
                </div>
                <div class="col-lg-6">
                  <label>Control NCh 409/1</label>
                  <p class="info" id="abastecimiento10"></p>
                </div>
        
        
                <h2>Estado</h2>
                <div class="col-lg-6">
                  <label class="form-label">General</label>
                  <p class="info" id="abastecimiento11"></p>
                </div>
                <div class="col-lg-6">
                  <label class="form-label">Impulsión</label>
                  <p class="info" id="abastecimiento12"></p>
                </div>
                <div class="col-lg-6">
                  <label class="form-label">Bombeo</label>
                  <p class="info" id="abastecimiento13"></p>
                </div>
                <div class="col-lg-6">
                  <label class="form-label">Piping</label>
                  <p class="info" id="abastecimiento14"></p>
                </div>
                <div class="col-lg-6">
                  <label class="form-label">Sistema Electrico</label>
                  <p class="info" id="abastecimiento15"></p>
                </div>
                <div class="col-lg-6">
                  <label class="form-label">Accesibilidad</label>
                  <p class="info" id="abastecimiento16"></p>
                </div>
                <div class="col-lg-12">
                  <label class="form-label">Abastecimiento</label>
                  <p class="info" id="abastecimiento17"></p>
                </div>
                {<Bombas bombas={bombas}/>}
              </div>

              <div class="row" id="fundacion-footer" hidden>
                <div class="col-lg-4">
                    <a href="https://www.superacionpobreza.cl" target="_blank">Fundación Superación de la Pobreza</a>
                  </div>
              </div>
      
          </div>

          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
      </>
    );
  }