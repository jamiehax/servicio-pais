import { React } from 'react';
import SearchFicha from '../SearchFicha';

export default function Contabilidad() {

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

                <h1>Información Contable</h1>

                <div class="row" id="info-div" hidden>
                    <div class="col-lg-6">
                        <h4>Iniciacion de actividades en el SII:</h4>
                        <p class="info" id="sii"></p>
                    </div>
                    <div class="col-lg-6">
                        <h4>Balance al dia:</h4>
                        <p class="info" id="balance"></p>
                    </div>
                    <div class="col-lg-12">
                        <h4>Tipo de sistema de registro:</h4>
                        <p class="info" id="tipo"></p>
                    </div>
                </div>

                <div class="row" id="fundacion-footer" hidden>
                    <div class="col-lg-4">
                        <a href="https://www.superacionpobreza.cl" target="_blank">Fundación Superación de la Pobreza</a>
                    </div>
                </div>

            </div>
        
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossOrigin="anonymous"></script>
        </>
    );
}