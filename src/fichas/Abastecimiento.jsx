import { React } from 'react';
import SearchFicha from '../SearchFicha';

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
  };

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
        
                <h2>Tipo de Bomba N° 1</h2>
                <div class="col-lg-6">
                  <label>Sumergible</label>
                  <p class="info" id="abastecimiento19"></p>
                </div>
                <div class="col-lg-6">
                  <label>Superficie</label>
                  <p class="info" id="abastecimiento20"></p>
                </div>
                <div class="col-lg-6">
                  <label>Sistema Hidroneumatico</label>
                  <p class="info" id="abastecimiento21"></p>
                </div>
                <div class="col-lg-6">
                  <label>Marca</label>
                  <p class="info" id="abastecimiento22"></p>
                </div>
                <div class="col-lg-6">
                  <label>Modelo</label>
                  <p class="info" id="abastecimiento23"></p>
                </div>
                <div class="col-lg-6">
                  <label>Vol</label>
                  <p class="info" id="abastecimiento24"></p>
                </div>
                <div class="col-lg-6">
                  <label>P [Hp]</label>
                  <p class="info" id="abastecimiento25"></p>
                </div>
                <div class="col-lg-6">
                  <label>Q Medido[L/s]</label>
                  <p class="info" id="abastecimiento26"></p>
                </div>
                <div class="col-lg-6">
                  <label>Fecha de Instalación</label>
                  <p class="info" id="abastecimiento27"></p>
                </div>
                <div class="col-lg-6">
                  <label>Coordenadas UTM</label>
                  <p class="info" id="abastecimiento28"></p>
                </div>
        
                <h2>Tipo de Bomba N° 2</h2>
                <div class="col-lg-6">
                  <label>Sumergible</label>
                  <p class="info" id="abastecimiento29"></p>
                </div>
                <div class="col-lg-6">
                  <label>Superficie</label>
                  <p class="info" id="abastecimiento30"></p>
                </div>
                <div class="col-lg-6">
                  <label>Sistema Hidroneumatico</label>
                  <p class="info" id="abastecimiento31"></p>
                </div>
                <div class="col-lg-6">
                  <label>Marca</label>
                  <p class="info" id="abastecimiento32"></p>
                </div>
                <div class="col-lg-6">
                  <label>Modelo</label>
                  <p class="info" id="abastecimiento33"></p>
                </div>
                <div class="col-lg-6">
                  <label>Vol</label>
                  <p class="info" id="abastecimiento34"></p>
                </div>
                <div class="col-lg-6">
                  <label>P [Hp]</label>
                  <p class="info" id="abastecimiento35"></p>
                </div>
                <div class="col-lg-6">
                  <label>Q Medido[L/s]</label>
                  <p class="info" id="abastecimiento36"></p>
                </div>
                <div class="col-lg-6">
                  <label>Fecha de Instalación</label>
                  <p class="info" id="abastecimiento37"></p>
                </div>
                <div class="col-lg-6">
                  <label>Coordenadas UTM</label>
                  <p class="info" id="abastecimiento38"></p>
                </div>
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