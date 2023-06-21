import { React } from 'react';
import SearchFicha from '../SearchFicha';

export default function Trat() {

    const putInfo = data => {
        document.getElementById("info-div-trat").hidden = false;
        document.getElementById("info-div-reg").hidden = false;
        document.getElementById("fundacion-footer").hidden = false;
        document.getElementById("unloaded-title").hidden = true;
        document.getElementById("loaded-title").hidden = false;
        
        // fill in elements
        const infoDivTrat = document.getElementById("info-div-trat");
        const pElementsTrat = infoDivTrat.getElementsByTagName("p");

        for (const p of pElementsTrat) {
            p.innerHTML = data.data[1].email;
        };

        const infoDivReg = document.getElementById("info-div-reg");
        const pElementsReg = infoDivReg.getElementsByTagName("p");

        for (const p of pElementsReg) {
            p.innerHTML = data.data[1].email;
        };

        document.getElementById("trat-foto").src = data.data[1].avatar;
        document.getElementById("reg-foto-1").src = data.data[2].avatar;
        document.getElementById("reg-foto-2").src = "";

    };

    function clearInfo() {
        const infoDivTrat = document.getElementById("info-div-trat");
        const pElementsTrat = infoDivTrat.getElementsByTagName("p");

        for (const p of pElementsTrat) {
            p.innerHTML = "";
        }

        const infoDivReg = document.getElementById("info-div-reg");
        const pElementsReg = infoDivReg.getElementsByTagName("p");

        for (const p of pElementsReg) {
            p.innerHTML = "";
        }

        document.getElementById("info-div-trat").hidden = true;
        document.getElementById("info-div-reg").hidden = true;
        document.getElementById("fundacion-footer").hidden = true;
        document.getElementById("unloaded-title").hidden = false;
        document.getElementById("loaded-title").hidden = true;
    };

    return (    
        <>
            <div class = "container">

                {<SearchFicha putInfo={putInfo} clearInfo={clearInfo} />}

                <h1>Información sistema de Tratamiento<span id="unloaded-title"> y Regulación</span></h1>

                <div class="row" id="info-div-trat" hidden>
            
                    <div class="col-lg-12">
                        <h2>Tipo</h2>
                    </div>
                    <div class="col-lg-4">
                        <label>Cloración</label>
                        <p class="info" id="trat1"></p>
                    </div>
                    <div class="col-lg-4">
                        <label>Ozono o UV</label>
                        <p class="info" id="trat1"></p>
                    </div>
                    <div class="col-lg-4">
                        <label>Filtro Hierro</label>
                        <p class="info" id="trat1"></p>
                    </div>
                    <div class="col-lg-12">
                        <label>Otro Filtro</label>
                        <p class="info" id="trat1"></p>
                    </div>

                    <div class="col-lg-12">
                        <h2>Tipo Desinfección</h2>
                    </div>
                    <div class="col-6">
                        <label>Bomba Clora</label>
                        <p class="info" id="trat1"></p>
                    </div>
                    <div class="col-6">
                        <label>Gas Cloro</label>
                        <p class="info" id="trat1"></p>
                    </div>
                    <div class="col-6">
                        <label>Pastillas Cloro</label>
                        <p class="info" id="trat1"></p>
                    </div>
                    <div class="col-6">
                        <label>Generador 03 o UV</label>
                        <p class="info" id="trat1"></p>
                    </div>


                    <h2>Estado</h2>
                    <div class="col-lg-6">
                        <label>General</label>
                        <p class="info" id="trat1"></p>
                    </div>
                    <div class="col-lg-6">
                        <label>Desinfección</label>
                        <p class="info" id="trat1"></p>
                    </div>
                    <div class="col-lg-6">
                        <label>Filtro Hierro</label>
                        <p class="info" id="trat1"></p>
                    </div>
                    <div class="col-lg-6">
                        <label>Otro Filtro</label>
                        <p class="info" id="trat1"></p>
                    </div>

                    <div class="col-lg-12">
                        <img class="info-image" id="trat-foto" alt="no hay fotos" src=""></img>
                    </div>
                </div><br/>

                <h1 id="loaded-title" hidden>Información sistema de Regulación</h1>

                <div class="row" id="info-div-reg" hidden>
                    <h2>Estanque N°1</h2>
                    <div class="col-lg-12">
                        <h5>Tipo</h5>
                    </div>
                    <div class="col-lg-3">
                        <label>Semi Enterreado</label>
                        <p class="info" id="trat1"></p>
                    </div>
                    <div class="col-lg-3">
                        <label>Elevado</label>
                        <p class="info" id="trat1"></p>
                    </div>
                    <div class="col-lg-3">
                        <label>Reg. con Hidropack</label>
                        <p class="info" id="trat1"></p>
                    </div>
                    <div class="col-lg-3">
                        <label>Sin reg. con Hidropack</label>
                        <p class="info" id="trat1"></p>
                    </div>

                    <div class="col-lg-12">
                        <h5>Material</h5>
                    </div>
                    <div class="col-lg-3">
                        <label>Acero Carbono</label>
                        <p class="info" id="trat1"></p>
                    </div>
                    <div class="col-lg-3">
                        <label>Hormigon Armado</label>
                        <p class="info" id="trat1"></p>
                    </div>
                    <div class="col-lg-3">
                        <label>Fibra de Vidrio</label>
                        <p class="info" id="trat1"></p>
                    </div>
                    <div class="col-lg-3">
                        <label>Roto Moldeo (UV)</label>
                        <p class="info" id="trat1"></p>
                    </div>

                    <h5>Estado</h5>
                    <div class="col-lg-3">
                        <label>General</label>
                        <p class="info" id="trat1"></p>
                    </div>
                    <div class="col-lg-3">
                        <label>Estanque</label>
                        <p class="info" id="trat1"></p>
                    </div>
                    <div class="col-lg-3">
                        <label>Regulación</label>
                        <p class="info" id="trat1"></p>
                    </div>
                    <div class="col-lg-3">
                        <label>VOL [m3]</label>
                        <p class="info" id="trat1"></p>
                    </div>

                    <div class="col-lg-6">
                        <label>Fecha de Instalación</label>
                        <p class="info" id="trat1"></p>
                    </div>
                    <div class="col-lg-6">
                        <label>Coordenadas</label>
                        <p class="info" id="trat1"></p>
                    </div>
                    <div class="col-lg-12">
                        <img class="info-image" id="reg-foto-1" alt="no hay fotos" src=""></img>
                    </div><br/>

                    <h2>Estanque N°2</h2>
                    <div class="col-lg-12">
                        <h5>Tipo</h5>
                    </div>
                    <div class="col-lg-3">
                        <label>Semi Enterreado</label>
                        <p class="info" id="trat1"></p>
                    </div>
                    <div class="col-lg-3">
                        <label>Elevado</label>
                        <p class="info" id="trat1"></p>
                    </div>
                    <div class="col-lg-3">
                        <label>Reg. con Hidropack</label>
                        <p class="info" id="trat1"></p>
                    </div>
                    <div class="col-lg-3">
                        <label>Sin reg. con Hidropack</label>
                        <p class="info" id="trat1"></p>
                    </div>
    
                    <div class="col-lg-12">
                        <h5>Material</h5>
                    </div>
                    <div class="col-lg-3">
                        <label>Acero Carbono</label>
                        <p class="info" id="trat1"></p>
                    </div>
                    <div class="col-lg-3">
                        <label>Hormigon Armado</label>
                        <p class="info" id="trat1"></p>
                    </div>
                    <div class="col-lg-3">
                        <label>Fibra de Vidrio</label>
                        <p class="info" id="trat1"></p>
                    </div>
                    <div class="col-lg-3">
                        <label>Roto Moldeo (UV)</label>
                        <p class="info" id="trat1"></p>
                    </div>
    
                    <h5>Estado</h5>
                    <div class="col-lg-3">
                        <label>General</label>
                        <p class="info" id="trat1"></p>
                    </div>
                    <div class="col-lg-3">
                        <label>Estanque</label>
                        <p class="info" id="trat1"></p>
                    </div>
                    <div class="col-lg-3">
                        <label>Regulación</label>
                        <p class="info" id="trat1"></p>
                    </div>
                    <div class="col-lg-3">
                        <label>VOL [m3]</label>
                        <p class="info" id="trat1"></p>
                    </div>
    
                    <div class="col-lg-6">
                        <label>Fecha de Instalación</label>
                        <p class="info" id="trat1"></p>
                    </div>
                    <div class="col-lg-6">
                        <label>Coordenadas</label>
                        <p class="info" id="trat1"></p>
                    </div>
                    <div class="col-lg-12">
                        <img class="info-image" id="reg-foto-2" alt="no hay fotos" src=""></img>
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