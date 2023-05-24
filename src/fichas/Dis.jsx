export default function Dis() {
    return (    
        <>
            <div class = "container">
            <form class="row g-3">

                <h1>Información sistema de Distribución</h1>
                <div class="col-12">
                    <h3>Red</h3>
                </div>
                <div class="col-md-4">
                    <label for="inputAddress" class="form-label">Diametro [mm]</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                </div>
                <div class="col-md-4">
                    <label for="inputAddress" class="form-label">Longitud [km]</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                </div>
                <div class="col-md-4">
                    <label for="inputAddress" class="form-label">Densidad [viv/km]</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                </div>

                <div class="col-12">
                    <h3>Material Sistema de Distribución</h3>
                </div>
                <div class="col-md-4">
                    <label for="inputAddress" class="form-label">PVC</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                </div>
                <div class="col-md-4">
                    <label for="inputAddress" class="form-label">HDPE</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                </div>
                <div class="col-md-4">
                    <label for="inputAddress" class="form-label">Rocalit</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                </div>
                <div class="col-md-6">
                    <label for="inputAddress" class="form-label">Acero</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                </div>
                <div class="col-md-6">
                    <label for="inputAddress" class="form-label">Manguera Negra</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                </div>

                <h3>Estado</h3>
                <div class="col-md-4">
                    <label class="form-label">General</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected></option>
                        <option value="1">Bién</option>
                        <option value="2">Regular</option>
                        <option value="3">Mal</option>
                    </select>
                </div>
                <div class="col-md-4">
                    <label class="form-label">Valvulas</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected></option>
                        <option value="1">Bién</option>
                        <option value="2">Regular</option>
                        <option value="3">Mal</option>
                    </select>
                </div>
                <div class="col-md-4">
                    <label class="form-label">Medidores</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected></option>
                        <option value="1">Bién</option>
                        <option value="2">Regular</option>
                        <option value="3">Mal</option>
                    </select>
                </div>

                <h3>Plano de la Red</h3>
                <div class="col-12">
                    <label for="formFileMultiple" class="form-label">Añadir Foto o Plano Digital</label>
                    <input class="form-control" type="file" id="formFileMultiple" multiple/>
                </div>

                <h1>Información Sistema de Tarifas</h1>
                <div class="col-12">
                    <h3>Tipo de Tarifa</h3>
                </div>
                <div class="col-md-6">
                    <label for="inputAddress" class="form-label">Diferenciada</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                </div>
                <div class="col-md-6">
                    <label for="inputAddress" class="form-label">Fija</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                </div>
                <div class="col-md-6">
                    <label for="inputAddress" class="form-label">Sin Tarifa</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                </div>
                <div class="col-md-6">
                    <label for="inputAddress" class="form-label">N° de Tramos</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                </div>

                <div class="col-md-6">
                    <h3>Rango M3 por Trama</h3>
                    <select class="form-select" aria-label="Default select example">
                        <option selected></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>

                <div class="col-md-6">
                    <h4>Valor M3 por Trama</h4>
                    <select class="form-select" aria-label="Default select example">
                        <option selected></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>
            
                <div class="col-md-12">
                    <h3>Formas de Pago</h3>
                </div>
                <div class="col-md-4">
                    <label for="inputAddress" class="form-label">Efectivo</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                </div>
                <div class="col-md-4">
                    <label for="inputAddress" class="form-label">Transferencia</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                </div>
                <div class="col-md-4">
                    <label for="inputAddress" class="form-label">Tarjeta</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                </div>
                <div class="col-md-12">
                    <label for="inputAddress" class="form-label">Otro</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                </div>

                <div class="col-md-12">
                    <h3>Deuda</h3>
                </div>
                <div class="col-md-6">
                    <label for="inputAddress" class="form-label">Deuda total de los usuarios</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                </div>
                <div class="col-md-6">
                    <label for="inputAddress" class="form-label">Porcentaje de Usuarios Deudores</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                </div>
                <div class="col-md-12">
                    <label for="inputAddress" class="form-label">Acciones antes morosidad</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder=""></textarea>
                </div>

                <div class="col-md-12">
                    <h3>Consuma Anual en M3</h3>
                </div>
                <div class="col-md-12">
                    <label for="inputAddress" class="form-label">2020</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                </div>
                <div class="col-md-12">
                    <label for="inputAddress" class="form-label">2021</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                </div>
                <div class="col-md-12">
                    <label for="inputAddress" class="form-label">2022</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                </div>
            
            </form><br/>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
        </>
    );
}