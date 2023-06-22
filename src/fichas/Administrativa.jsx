import { React } from 'react';
import SearchFicha from '../SearchFicha';

export default function Administrativa() {

    const putInfo = data => {
        // show footer and the information div
        document.getElementById("info-div").hidden = false;
        document.getElementById("fundacion-footer").hidden = false;
        
        // fill in elements in the information div
        const infoDiv = document.getElementById("info-div");
        const pElements = infoDiv.getElementsByTagName("p");

        for (const p of pElements) {
            p.innerHTML = data.token;
        };
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
                
                <h1>Información Administrativa</h1>

                <div class="row" id="info-div" hidden>

                    <div class="col-lg-6">
                        <label>Comite o cooperativa</label>
                        <p class="info" id="administrativa1"></p>
                    </div>
                    <div class="col-lg-6">
                        <label>Sector</label>
                        <p class="info" id="administrativa1"></p>
                    </div>
                    <div class="col-12">
                        <label>Comunas</label>
                        <p class="info" id="administrativa1"></p>
                    </div>

                    <div class="col-lg-6">
                        <label>Razon Social</label>
                        <p class="info" id="administrativa1"></p>
                    </div>
                    <div class="col-lg-6">
                        <label>Rut</label>
                        <p class="info" id="administrativa1"></p>
                    </div>
                    <div class="col-12">
                        <label>N° Reg. Org. Com.</label>
                        <p class="info" id="administrativa1"></p>
                    </div>
                    <div class="col-lg-6">
                        <label>N° Pers. Juridica</label>
                        <p class="info" id="administrativa1"></p>
                    </div>
                    <div class="col-lg-6">
                        <label>Carpeta</label>
                        <p class="info" id="administrativa1"></p>
                    </div>
                    <div class="col-12">
                        <label>Fecha</label>
                        <p class="info" id="administrativa1"></p>
                    </div>


                    <h1>Datos Territoriales</h1>
                    <div class="col-lg-12">
                        <label>Coordenadas</label>
                        <p class="info" id="administrativa1"></p>
                    </div>
                    <div class="col-lg-6">
                        <label>Norte</label>
                        <p class="info" id="administrativa1"></p>
                    </div>
                    <div class="col-lg-6">
                        <label>Este</label>
                        <p class="info" id="administrativa1"></p>
                    </div>
                    <div class="col-12">
                        <label>Coor. geo</label>
                        <p class="info" id="administrativa1"></p>
                    </div>
                    <div class="col-lg-6">
                        <label>Cantidad de Habitantes</label>
                        <p class="info" id="administrativa1"></p>
                    </div>
                    <div class="col-lg-6">
                        <label>Tipo de Asentamiento</label>
                        <p class="info" id="administrativa1"></p>
                    </div>
                    <div class="col-12">
                        <label>Posible Crecimiento del Sistema</label>
                        <p class="info" id="administrativa1"></p>
                    </div>

                    <h2>Limites Territoriales de Servicio</h2>
                    <div class="col-12">
                        <p class="info" id="administrativa1"></p>
                    </div>
                    
                    
                    <h2>N° de Arranques</h2>
                    <div class="col-lg-6">
                        <label>N° Total</label>
                        <p class="info" id="administrativa1"></p>
                    </div>
                    <div class="col-lg-6">
                        <label>N° Escuelas</label>
                        <p class="info" id="administrativa1"></p>
                    </div>
                    <div class="col-lg-6">
                        <label>N° Postas</label>
                        <p class="info" id="administrativa1"></p>
                    </div>
                    <div class="col-lg-6">
                        <label>N° Sedes</label>
                        <p class="info" id="administrativa1"></p>
                    </div>
                    <div class="col-lg-12">
                        <label>Otros Arranques</label>
                        <p class="info" id="administrativa1"></p>
                    </div>
                    <div class="col-lg-4">
                        <label>Res D° Agua</label>
                        <p class="info" id="administrativa1"></p>
                    </div>
                    <div class="col-lg-4">
                        <label>Q. D° Agua</label>
                        <p class="info" id="administrativa1"></p>
                    </div>
                    <div class="col-lg-4">
                        <label>Res Sanitaria</label>
                        <p class="info" id="administrativa1"></p>
                    </div>
                    <div class="col-lg-12">
                        <label>Sum Sanitario</label>
                        <p class="info" id="administrativa1"></p>
                    </div>


                    <h2>Estado</h2>
                    <div class="col-lg-6">
                    <label>General</label>
                        <p class="info" id="administrativa1"></p>
                    </div>
                    <div class="col-lg-6">
                        <label>Tratamiento</label>
                        <p class="info" id="administrativa1"></p>
                    </div>
                    <div class="col-lg-6">
                        <label>Regulación</label>
                        <p class="info" id="administrativa1"></p>
                    </div>
                    <div class="col-lg-6">
                        <label>Distribución</label>
                        <p class="info" id="administrativa1"></p>
                    </div>

                    <h2>Tamaño de Medidores</h2>
                    <div class="col-lg-6">
                        <label>1/2"</label>
                        <p class="info" id="administrativa1"></p>
                    </div>
                    <div class="col-lg-6">
                        <label>3/4"</label>
                        <p class="info" id="administrativa1"></p>
                    </div>
                    <div class="col-lg-6">
                        <label>1"</label>
                        <p class="info" id="administrativa1"></p>
                    </div>
                    <div class="col-lg-6">
                        <label>2"</label>
                        <p class="info" id="administrativa1"></p>
                    </div>
                    <div class="col-lg-12">
                        <label>Otras</label>
                        <p class="info" id="administrativa1"></p>
                    </div>

                    <h2>Pozos</h2>
                    <div class="col-lg-12">
                        <label>N° Total</label>
                        <p class="info" id="administrativa1"></p>
                    </div>

                    <h2>Profundidad</h2>
                    <div class="col-lg-6">
                        <label>P1</label>
                        <p class="info" id="administrativa1"></p>
                    </div>
                    <div class="col-lg-6">
                        <label>P2</label>
                        <p class="info" id="administrativa1"></p>
                    </div>
                    <div class="col-lg-6">
                        <label>P3</label>
                        <p class="info" id="administrativa1"></p>
                    </div>
                    <div class="col-lg-6">
                        <label>P4</label>
                        <p class="info" id="administrativa1"></p>
                    </div>

                    <h2>Diametro en "</h2>
                    <div class="col-lg-6">
                        <label>P1</label>
                        <p class="info" id="administrativa1"></p>
                    </div>
                    <div class="col-lg-6">
                        <label>P2</label>
                        <p class="info" id="administrativa1"></p>
                    </div>
                    <div class="col-lg-6">
                        <label>P3</label>
                        <p class="info" id="administrativa1"></p>
                    </div>
                    <div class="col-lg-6">
                        <label>P4</label>
                        <p class="info" id="administrativa1"></p>
                    </div>

                    <h2>Cuentan con un espacio Físico (sede)</h2>
                    <div class="col-12">
                        <p class="info" id="administrativa1"></p>
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

