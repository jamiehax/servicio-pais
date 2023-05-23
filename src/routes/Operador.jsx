export default function Operador() {
    return (    
        <>
            <div class = "container">
            <form class="row g-3">

                <h1>Información sobre el Operador</h1><br/>
                <div class="col-md-12">
                    <label class="form-label">¿Ha recibido capacitaciones el último año?</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected></option>
                        <option value="1">Si</option>
                        <option value="2">No</option>
                    </select>
                </div>
                <div class="col-md-12">
                    <label class="form-label">¿Que capacitaciones recibido?</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder=""></textarea>
                </div>
          
                <h3>Financiameinto de la Capacatación</h3>
                <div class="col-12">
                    <label class="btn btn-secondary">
                        <input type="radio" name="espacio-fisico" id="si" autocomplete="off"/> Unidad Tecnica
                    </label>
                    <label class="btn btn-secondary">
                        <input type="radio" name="espacio-fisico" id="no" autocomplete="off"/> DOH
                    </label>
                    <label class="btn btn-secondary">
                        <input type="radio" name="espacio-fisico" id="si" autocomplete="off"/> DGA
                    </label>
                    <label class="btn btn-secondary">
                        <input type="radio" name="espacio-fisico" id="no" autocomplete="off"/> Subdere
                    </label>
                    <label class="btn btn-secondary">
                        <input type="radio" name="espacio-fisico" id="si" autocomplete="off"/> Municipal
                    </label>
                    <label class="btn btn-secondary">
                        <input type="radio" name="espacio-fisico" id="no" autocomplete="off"/> Universidad
                    </label>
                    <label class="btn btn-secondary">
                        <input type="radio" name="espacio-fisico" id="si" autocomplete="off"/> Otro
                    </label>
                </div>
                <div class="col-md-12">
                    <label class="form-label">Si selecionó otro, ¿cual?</label>
                    <input type="text" class="form-control" id="inputEmail4"/>
                </div>
          
                <div class="col-md-6">
                    <label class="form-label">¿Tienes contrato?</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected></option>
                        <option value="1">Si</option>
                        <option value="2">No</option>
                    </select>
                </div>
                <div class="col-md-6">
                    <label class="form-label">Tipo de contrato</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected></option>
                        <option value="1">Honorarios</option>
                        <option value="2">Contratado</option>
                    </select>
                </div>
                <div class="col-md-12">
                    <label class="form-label">¿Tienes vacaciones?</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected></option>
                        <option value="1">Si</option>
                        <option value="2">No</option>
                    </select>
                </div>
                <div class="col-md-6">
                    <label class="form-label">¿Es remunerado?</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected></option>
                        <option value="1">Si</option>
                        <option value="2">No</option>
                    </select>
                </div>
                <div class="col-md-6">
                    <label class="form-label">Tramo de remuneración</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected></option>
                        <option value="1">$1 - $100.000</option>
                        <option value="2">$100.001 - $200.000</option>
                        <option value="3">$200.001 - $300.000</option>
                        <option value="4">$300.001 - $400.000</option>
                        <option value="5">$400.001 - $500.000</option>
                        <option value="6">$500.001 - MAYOR</option>
                    </select>
                </div>

                <div class="col-md-12">
                    <label class="form-label">¿Posee elemento de seguridad para realizar su trabajo?</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected></option>
                        <option value="1">Si</option>
                        <option value="2">No</option>
                    </select>
                </div>
                <div class="col-md-12">
                    <label class="form-label">¿Cuales?</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder=""></textarea>
                </div>


                <div class="col-12">
                    <h3>Labores del Operador</h3>
                </div>
                <div class="col-md-6">
                    <label for="inputAddress" class="form-label">Mantenciones</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                </div>
                <div class="col-md-6">
                    <label for="inputAddress" class="form-label">Cobro de agua</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                </div>
                <div class="col-md-6">
                    <label for="inputAddress" class="form-label">Toma de estado</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                </div>
                <div class="col-md-6">
                    <label for="inputAddress" class="form-label">Suspensión de servicio</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                </div>

                <div class="col-12">
                <label for="inputAddress" class="form-label">Otras Labores</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder=""></textarea>
                </div>

            </form><br/>
            </div>


            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
        </>
    );
}