import { React } from 'react';
import SearchFicha from '../SearchFicha';

export default function Dis() {

    const putInfo = data => {
        document.getElementById("info-div").hidden = false;
        document.getElementById("fundacion-footer").hidden = false;
        
        // fill in elements
        const infoDiv = document.getElementById("info-div");
        const pElements = infoDiv.getElementsByTagName("p");

        for (const p of pElements) {
            p.innerHTML = data.data[1].email;
        };

        document.getElementById("dis-foto").src = data.data[1].avatar;
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

                {<SearchFicha putInfo={putInfo} clearInfo={clearInfo} />}

                <h1>Información sistema de Distribución</h1>

                <div class="row" id="info-div" hidden>
                    
                    <div class="col-12">
                        <h2>Red</h2>
                    </div>
                    <div class="col-lg-4">
                        <label>Diametro [mm]</label>
                        <p class="info" id="dis1"></p>
                    </div>
                    <div class="col-lg-4">
                        <label>Longitud [km]</label>
                        <p class="info" id="dis1"></p>
                    </div>
                    <div class="col-lg-4">
                        <label>Densidad [viv/km]</label>
                        <p class="info" id="dis1"></p>
                    </div>

                    <div class="col-12">
                        <h2>Material Sistema de Distribución</h2>
                    </div>
                    <div class="col-lg-4">
                        <label>PVC</label>
                        <p class="info" id="dis1"></p>
                    </div>
                    <div class="col-lg-4">
                        <label>HDPE</label>
                        <p class="info" id="dis1"></p>
                    </div>
                    <div class="col-lg-4">
                        <label>Rocalit</label>
                        <p class="info" id="dis1"></p>
                    </div>
                    <div class="col-lg-6">
                        <label>Acero</label>
                        <p class="info" id="dis1"></p>
                    </div>
                    <div class="col-lg-6">
                        <label>Manguera Negra</label>
                        <p class="info" id="dis1"></p>
                    </div>

                    <h2>Estado</h2>
                    <div class="col-lg-4">
                        <label>General</label>
                        <p class="info" id="dis1"></p>
                    </div>
                    <div class="col-lg-4">
                        <label>Valvulas</label>
                        <p class="info" id="dis1"></p>
                    </div>
                    <div class="col-lg-4">
                        <label>Medidores</label>
                        <p class="info" id="dis1"></p>
                    </div>

                    <h2>Plano de la Red</h2>
                    <div class="col-12">
                        <img class="info-image" id="dis-foto" alt="no hay fotos" src=""></img>
                    </div>

                    <h2>Información Sistema de Tarifas</h2>
                    <div class="col-lg-6">
                        <label>Diferenciada</label>
                        <p class="info" id="dis1"></p>
                    </div>
                    <div class="col-lg-6">
                        <label>Fija</label>
                        <p class="info" id="dis1"></p>
                    </div>
                    <div class="col-lg-6">
                        <label>Sin Tarifa</label>
                        <p class="info" id="dis1"></p>
                    </div>
                    <div class="col-lg-6">
                        <label>N° de Tramos</label>
                        <p class="info" id="dis1"></p>
                    </div>

                    <div class="col-lg-6">
                        <label>Rango M3 por Trama</label>
                        <p class="info" id="dis1"></p>
                    </div>

                    <div class="col-lg-6">
                        <label>Valor M3 por Trama</label>
                        <p class="info" id="dis1"></p>
                    </div>
                
                    <div class="col-lg-12">
                        <h2>Formas de Pago</h2>
                    </div>
                    <div class="col-lg-4">
                        <label>Efectivo</label>
                        <p class="info" id="dis1"></p>
                    </div>
                    <div class="col-lg-4">
                        <label>Transferencia</label>
                        <p class="info" id="dis1"></p>
                    </div>
                    <div class="col-lg-4">
                        <label>Tarjeta</label>
                        <p class="info" id="dis1"></p>
                    </div>
                    <div class="col-lg-12">
                        <label>Otro</label>
                        <p class="info" id="dis1"></p>
                    </div>

                    <div class="col-lg-12">
                        <h2>Deuda</h2>
                    </div>
                    <div class="col-lg-6">
                        <label>Deuda total de los usuarios</label>
                        <p class="info" id="dis1"></p>
                    </div>
                    <div class="col-lg-6">
                        <label>Porcentaje de Usuarios Deudores</label>
                        <p class="info" id="dis1"></p>
                    </div>
                    <div class="col-lg-12">
                        <label>Acciones antes morosidad</label>
                        <p class="info" id="dis1"></p>
                    </div>

                    <div class="col-lg-12">
                        <h2>Consuma Anual en M3</h2>
                    </div>
                    <div class="col-lg-4">
                        <label>2020</label>
                        <p class="info" id="dis1"></p>
                    </div>
                    <div class="col-lg-4">
                        <label>2021</label>
                        <p class="info" id="dis1"></p>
                    </div>
                    <div class="col-lg-4">
                        <label>2022</label>
                        <p class="info" id="dis1"></p>
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