import { React } from 'react';
import SearchFicha from '../SearchFicha';

export default function Directiva() {

    const putInfo = data => {
        document.getElementById("info-div").hidden = false;
        document.getElementById("fundacion-footer").hidden = false;
        
        // fill in elements
        const infoDiv = document.getElementById("info-div");
        const pElements = infoDiv.getElementsByTagName("p");

        for (const p of pElements) {
            p.innerHTML = data.token;
        };
    };

    function clearInfo() {
        const infoDiv = document.getElementById("info-div");
        const pElements = infoDiv.getElementsByTagName("p");

        for (const p of pElements) {
            p.innerHTML = "";
        }

        document.getElementById("info-div").hidden = true;
        document.getElementById("fundacion-footer").hidden = true;
    };

    return (    
        <>
            <div class = "container">

                {<SearchFicha putInfo={putInfo} clearInfo={clearInfo}/>}

                <h1>Información Directiva</h1>

                <div class="row" id="info-div" hidden>
                    <div class="col-lg-3">
                        <label>Fecha</label>
                        <p class="info" id="directiva1"></p>
                    </div>
                    <div class="col-lg-3">
                        <label>Socios</label>
                        <p class="info" id="directiva1"></p>
                    </div>
                    <div class="col-lg-3">
                        <label>Usuarios</label>
                        <p class="info" id="directiva1"></p>
                    </div>
                    <div class="col-lg-3">
                        <label>Vigencia</label>
                        <p class="info" id="directiva1"></p>
                    </div>

                    <div class="col-lg-2">
                        <h5>Titulo</h5>
                    </div>
                    <div class="col-lg-4">
                        <h5>Nombre</h5>
                    </div>
                    <div class="col-lg-3">
                        <h5>RUT</h5>
                    </div>
                    <div class="col-lg-3">
                        <h5>Fono</h5>
                    </div>

                    <div class="col-lg-2">
                        <h6>Presidente</h6>
                    </div>
                    <div class="col-lg-4">
                        <p class="info" id="directiva1"></p>
                    </div>
                    <div class="col-lg-3">
                        <p class="info" id="directiva1"></p>
                    </div>
                    <div class="col-lg-3">
                        <p class="info" id="directiva1"></p>
                    </div>

                    <div class="col-lg-2">
                        <h6>Secretario</h6>
                    </div>
                    <div class="col-lg-4">
                        <p class="info" id="directiva1"></p>
                    </div>
                    <div class="col-lg-3">
                        <p class="info" id="directiva1"></p>
                    </div>
                    <div class="col-lg-3">
                        <p class="info" id="directiva1"></p>
                    </div>

                    <div class="col-lg-2">
                        <h6>Tesorero</h6>
                    </div>
                    <div class="col-lg-4">
                        <p class="info" id="directiva1"></p>
                    </div>
                    <div class="col-lg-3">
                        <p class="info" id="directiva1"></p>
                    </div>
                    <div class="col-lg-3">
                        <p class="info" id="directiva1"></p>
                    </div>
                    
                    <div class="col-lg-2">
                        <h6>1° Director(a)</h6>
                    </div>
                    <div class="col-lg-4">
                        <p class="info" id="directiva1"></p>
                    </div>
                    <div class="col-lg-3">
                        <p class="info" id="directiva1"></p>
                    </div>
                    <div class="col-lg-3">
                        <p class="info" id="directiva1"></p>
                    </div>

                    <div class="col-lg-2">
                        <h6>2° Director(a)</h6>
                    </div>
                    <div class="col-lg-4">
                        <p class="info" id="directiva1"></p>
                    </div>
                    <div class="col-lg-3">
                        <p class="info" id="directiva1"></p>
                    </div>
                    <div class="col-lg-3">
                        <p class="info" id="directiva1"></p>
                    </div>

                    <div class="col-lg-2">
                        <h6>3° Director(a)</h6>
                    </div>
                    <div class="col-lg-4">
                        <p class="info" id="directiva1"></p>
                    </div>
                    <div class="col-lg-3">
                        <p class="info" id="directiva1"></p>
                    </div>
                    <div class="col-lg-3">
                        <p class="info" id="directiva1"></p>
                    </div>

                    <h2>Participación en Organizaciones de Agua de Mayor Escala</h2>
                    <div class="col-lg-3">
                        <label>Comunal</label>
                        <p class="info" id="directiva1"></p>
                    </div>
                    <div class="col-lg-9">
                        <label>¿Cuales?</label>
                        <p class="info" id="directiva1"></p>
                    </div>
                    <div class="col-lg-3">
                        <label>Provincial</label>
                        <p class="info" id="directiva1"></p>
                    </div>
                    <div class="col-lg-9">
                        <label>¿Cuales?</label>
                        <p class="info" id="directiva1"></p>
                    </div>
                    <div class="col-lg-3">
                        <label>Regional</label>
                        <p class="info" id="directiva1"></p>
                    </div>
                    <div class="col-lg-9">
                        <label>¿Cuales?</label>
                        <p class="info" id="directiva1"></p>
                    </div>
                    <div class="col-lg-3">
                        <label>Nacional</label>
                        <p class="info" id="directiva1"></p>
                    </div>
                    <div class="col-lg-9">
                        <label>¿Cuales?</label>
                        <p class="info" id="directiva1"></p>
                    </div>
                    <div class="col-lg-3">
                        <label>Internacional</label>
                        <p class="info" id="directiva1"></p>
                    </div>
                    <div class="col-lg-9">
                        <label>¿Cuales?</label>
                        <p class="info" id="directiva1"></p>
                    </div>

                    <label>¿Participa de Actividades Interorganizacionales?</label>
                    <div class="col-lg-12">
                        <p class="info" id="directiva1"></p>
                    </div>
                    <div class="col-lg-12">
                        <label>¿Cuales acciones de trabajo conjunto cuentan con?</label>
                        <p class="info" id="directiva1"></p>
                    </div>

                    <label>¿Desde el municipio existe un apoyo en temas de agua?</label>
                    <div class="col-lg-12">
                        <p class="info" id="directiva1"></p>
                    </div>
                    <div class="col-lg-12">
                        <label>¿Quienes y en que area?</label>
                        <p class="info" id="directiva1"></p>
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