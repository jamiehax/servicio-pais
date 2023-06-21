import { React } from 'react';
import SearchFicha from '../SearchFicha';

export default function Operador() {

    const putInfo = data => {
        document.getElementById("info-div").hidden = false;
        document.getElementById("fundacion-footer").hidden = false;
        
        // fill in elements
        const infoDiv = document.getElementById("info-div");
        const pElements = infoDiv.getElementsByTagName("p");

        for (const p of pElements) {
            p.innerHTML = data.token;
        }
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

                <h1>Información sobre el Operador</h1>

                <div class="row" id="info-div" hidden>
                    <div class="col-lg-6">
                        <label class="form-label">¿Ha recibido capacitaciones el último año?</label>
                        <p class="info" id="operador1"></p>
                    </div>
                    <div class="col-lg-6">
                        <label class="form-label">¿Que capacitaciones recibido?</label>
                        <p class="info" id="operador2"></p>
                    </div>
            
                    <h2>Financiameinto de la Capacatación</h2>
                    <div class="col-lg-6">
                        <label class="form-label">¿Quién financió la capacatación?</label>
                        <p class="info" id="operador3"></p>
                    </div>
                    <div class="col-lg-6">
                        <label class="form-label">Si selecionó otro, ¿cual?</label>
                        <p class="info" id="operador4"></p>
                    </div>
            
                    <div class="col-lg-6">
                        <label class="form-label">¿Tienes contrato?</label>
                        <p class="info" id="operador5"></p>
                    </div>
                    <div class="col-lg-6">
                        <label class="form-label">Tipo de contrato</label>
                        <p class="info" id="operador6"></p>
                    </div>
                    <div class="col-lg-12">
                        <label class="form-label">¿Tienes vacaciones?</label>
                        <p class="info" id="operador7"></p>
                    </div>
                    <div class="col-lg-6">
                        <label class="form-label">¿Es remunerado?</label>
                        <p class="info" id="operador8"></p>
                    </div>
                    <div class="col-lg-6">
                        <label class="form-label">Tramo de remuneración</label>
                        <p class="info" id="operador9"></p>
                    </div>

                    <div class="col-lg-12">
                        <label class="form-label">¿Posee elemento de seguridad para realizar su trabajo?</label>
                        <p class="info" id="operador10"></p>
                    </div>
                    <div class="col-lg-12">
                        <label class="form-label">¿Cuales?</label>
                        <p class="info" id="operador11"></p>
                    </div>


                    <div class="col-lg-12">
                        <h2>Labores del Operador</h2>
                    </div>
                    <div class="col-lg-6">
                        <label for="inputAddress" class="form-label">Mantenciones</label>
                        <p class="info" id="operador12"></p>
                    </div>
                    <div class="col-lg-6">
                        <label for="inputAddress" class="form-label">Cobro de agua</label>
                        <p class="info" id="operador13"></p>
                    </div>
                    <div class="col-lg-6">
                        <label for="inputAddress" class="form-label">Toma de estado</label>
                        <p class="info" id="operador14"></p>
                    </div>
                    <div class="col-lg-6">
                        <label for="inputAddress" class="form-label">Suspensión de servicio</label>
                        <p class="info" id="operador15"></p>
                    </div>

                    <div class="col-lg">
                        <label for="inputAddress" class="form-label">Otras Labores</label>
                        <p class="info" id="operador16"></p>
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