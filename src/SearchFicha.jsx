import { React } from 'react';

export default function SearchFicha({ putInfo, clearInfo }) {

    // url of the api
    const API_ENDPOINT = "https://reqres.in/api/users?page=2";

    const search = async () => {
        // post the data and handle the result
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

        // update search status and clear the info in the div
        updateStatus("buscando...");
        clearInfo();

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
            updateStatus("FICHA NO ENCONTRADA");
            console.error("Error", error);
        }  
    }

    // call the function from the ficha passed as a hook to put the data
    function displayInfo(result) {
        updateStatus("ficha: "+document.getElementById("numFicha").value);
        putInfo(result)
    }

    // call the function from the ficha passed as a hook to clear the data
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