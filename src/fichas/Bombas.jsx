import { React } from 'react';

export default function Bombas() {

    // url of the api
    const API_ENDPOINT = "https://reqres.in/api/users?page=2";

    const getBombas = async () => {
        // post the data and handle the result
        const numBombas = document.getElementById("numBombas").value;
        const data = {num: numBombas};

        // handle the response
        try {
            const response = await fetch(API_ENDPOINT, {
                method: "GET",
                headers: {
                "Content-Type": "application/json"
            },
            // body: JSON.stringify(data)
            });
            if (!response.ok) {
                throw new Error("Network response was not OK");
            }
            const result = await response.json();
            displayInfo(result);
        } catch (error) {
            console.error("Error", error);
        }  
    }

    // put the data in the bomba fields
    function displayInfo(result) {

        // add requested number of bombas
        setBombas(document.getElementById("numBombas").value);

        // add data to bombas
        const bombaInfoDiv = document.getElementById("bomba-info-div");
        result.data.forEach(function (item, index) {
            console.log(item, index);
          });
    }

    function setBombas(count) {
        // remove all current nodes (except the original - hide that one)
        const bombaInfoDiv = document.getElementById("bomba-info-div");
        const firstBomba = bombaInfoDiv.firstChild;
        while (firstBomba.nextSibling.id !== "end-div") {
            bombaInfoDiv.removeChild(firstBomba.nextSibling);
        }
        const bombaInfoOriginal = document.getElementById("bomba-info-original");
        bombaInfoOriginal.hidden = true;

        // add bomba sections to document for number of bombas returned
        if (count < 1) {
            return;
        } else if (count == 1) {
            bombaInfoOriginal.hidden = false;
        } else {
            console.log(count);
            bombaInfoOriginal.hidden = false;
            for (var i = 0, copy; i < count - 1; i++) {
                copy = bombaInfoOriginal.cloneNode(true);
                copy.id = "bomba-info"+(i+1);
                copy.firstChild.firstChild.innerHTML = "Tipo de Bomba N° "+(i+2);
                copy.hidden = false;
                bombaInfoOriginal.parentNode.insertBefore(copy, bombaInfoOriginal.parentNode.lastChild);
            }
        }
    }

    return (    
        <>
            <h2>Bombas:</h2>
            <div class="bomba-input-group">
                <button class="search-button" onClick={() => {getBombas()}}>
                    Entregar
                </button>
                <input type="number" class="bomba-input" id="numBombas" placeholder="numero de bombas"/>
            </div>
            <div class="row" id="bomba-info-div">
                <div class="row" id="bomba-info-original" hidden>
                    <div class="col-lg-12">
                        <h4 id="bomba-title">Tipo de Bomba N° 1</h4>
                    </div>
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
                </div>
                <div id="end-div" hidden></div>
            </div>
        </>
    )
};