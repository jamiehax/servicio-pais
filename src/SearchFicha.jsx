import { React } from 'react';

export default function SearchFicha({ putInfo, clearInfo }) {

    const API_ENDPOINT = "https://reqres.in/api/users?page=2";

    const search = async () => {
        // const numFicha = document.getElementById("numFicha").value;
        // const data = {num: numFicha};
        // console.log(data);

        // const data = {
        //     "email": "eve.holt@reqres.in",
        //     "password": "pistol"
        // };

        // const data= {
        //     "email": "sydney@fife"
        // };

        updateStatus("buscando...");
        clearInfo();

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
            updateStatus("FICHA NO ENCONTRADA");
            console.error("Error", error);
        }  
    }

    function displayInfo(result) {
        updateStatus("ficha: "+document.getElementById("numFicha").value);
        putInfo(result)
    }

    function updateStatus(status) {
        document.getElementById("searchStatus").innerHTML = status;
    }

    return (    
        <>
            <div class="search">
                <h3>
                    Buscar las fichas por ID (número):
                </h3>
                <div class="search-input-group">
                    <button class="search-button" onClick={() => {search()}}>
                        Buscar
                    </button>
                    <input type="text" class="search-input" id="numFicha" placeholder="numero de la ficha"/>
                </div>
                <p class="search-status" id="searchStatus"></p>
            </div>
        </>
    )
};