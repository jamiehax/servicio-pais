export default function Trat() {
    return (    
        <>
            <div class = "container">
            <form class="row g-3">
        
                <h1>Información sistema de Tratamiento</h1>
                <div class="col-12">
                    <h3>Tipo</h3>
                </div>
                <div class="col-4">
                    <label for="inputAddress" class="form-label">Cloración</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                </div>
                <div class="col-4">
                    <label for="inputAddress" class="form-label">Ozono o UV</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                </div>
                <div class="col-4">
                    <label for="inputAddress" class="form-label">Filtro Hierro</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                </div>
                <div class="col-12">
                    <label for="inputAddress" class="form-label">Otro Filtro</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                </div>

                <div class="col-12">
                    <h3>Tipo Desinfección</h3>
                </div>
                <div class="col-6">
                    <label for="inputAddress" class="form-label">Bomba Clora</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                </div>
                <div class="col-6">
                    <label for="inputAddress" class="form-label">Gas Cloro</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                </div>
                <div class="col-6">
                    <label for="inputAddress" class="form-label">Pastillas Cloro</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                </div>
                <div class="col-6">
                    <label for="inputAddress" class="form-label">Generador 03 o UV</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                </div>


                <h3>Estado</h3>
                <div class="col-md-6">
                    <label class="form-label">General</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected></option>
                        <option value="1">Bién</option>
                        <option value="2">Regular</option>
                        <option value="3">Mal</option>
                    </select>
                </div>
                <div class="col-md-6">
                    <label class="form-label">Desinfección</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected></option>
                        <option value="1">Bién</option>
                        <option value="2">Regular</option>
                        <option value="3">Mal</option>
                    </select>
                </div>
                <div class="col-md-6">
                    <label class="form-label">Filtro Hierro</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected></option>
                        <option value="1">Bién</option>
                        <option value="2">Regular</option>
                        <option value="3">Mal</option>
                    </select>
                </div>
                <div class="col-md-6">
                    <label class="form-label">Otro Filtro</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected></option>
                        <option value="1">Bién</option>
                        <option value="2">Regular</option>
                        <option value="3">Mal</option>
                    </select>
                </div>

                <div class="col-12">
                    <label for="formFileMultiple" class="form-label">Adjuntar Fotos</label>
                    <input class="form-control" type="file" id="formFileMultiple" multiple/>
                </div>

                <h1>Información sistema de Regulación</h1>
                <h3>Estanque N°1</h3>
                <div class="col-12">
                    <h5>Tipo</h5>
                </div>
                <div class="col-3">
                    <label for="inputAddress" class="form-label">Semi Enterreado</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                </div>
                <div class="col-3">
                    <label for="inputAddress" class="form-label">Elevado</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                </div>
                <div class="col-3">
                    <label for="inputAddress" class="form-label">Reg. con Hidropack</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                </div>
                <div class="col-3">
                    <label for="inputAddress" class="form-label">Sin reg. con Hidropack</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                </div>

                <div class="col-12">
                    <h5>Material</h5>
                </div>
                <div class="col-3">
                    <label for="inputAddress" class="form-label">Acero Carbono</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                </div>
                <div class="col-3">
                    <label for="inputAddress" class="form-label">Hormigon Armado</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                </div>
                <div class="col-3">
                    <label for="inputAddress" class="form-label">Fibra de Vidrio</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                </div>
                <div class="col-3">
                    <label for="inputAddress" class="form-label">Roto Moldeo (UV)</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                </div>

                <h5>Estado</h5>
                <div class="col-md-3">
                    <label class="form-label">General</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected></option>
                        <option value="1">Bién</option>
                        <option value="2">Regular</option>
                        <option value="3">Mal</option>
                    </select>
                </div>
                <div class="col-md-3">
                    <label class="form-label">Estanque</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected></option>
                        <option value="1">Bién</option>
                        <option value="2">Regular</option>
                        <option value="3">Mal</option>
                    </select>
                </div>
                <div class="col-md-3">
                    <label class="form-label">Regulación</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected></option>
                        <option value="1">Bién</option>
                        <option value="2">Regular</option>
                        <option value="3">Mal</option>
                    </select>
                </div>
                <div class="col-md-3">
                    <label class="form-label">VOL [m3]</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected></option>
                        <option value="1">Bién</option>
                        <option value="2">Regular</option>
                        <option value="3">Mal</option>
                    </select>
                </div>

                <div class="col-4">
                    <label for="inputAddress" class="form-label">Fecha de Instalación</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                </div>
                <div class="col-4">
                    <label for="inputAddress" class="form-label">Coordenadas</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                </div>
                <div class="col-4">
                    <label for="formFileMultiple" class="form-label">Adjuntar Fotos</label>
                    <input class="form-control" type="file" id="formFileMultiple" multiple/>
                </div>

                <h3>Estanque N°2</h3>
                <div class="col-12">
                    <h5>Tipo</h5>
                </div>
                <div class="col-3">
                    <label for="inputAddress" class="form-label">Semi Enterreado</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                </div>
                <div class="col-3">
                    <label for="inputAddress" class="form-label">Elevado</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                </div>
                <div class="col-3">
                    <label for="inputAddress" class="form-label">Reg. con Hidropack</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                </div>
                <div class="col-3">
                    <label for="inputAddress" class="form-label">Sin reg. con Hidropack</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                </div>
  
                <div class="col-12">
                    <h5>Material</h5>
                </div>
                <div class="col-3">
                    <label for="inputAddress" class="form-label">Acero Carbono</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                </div>
                <div class="col-3">
                    <label for="inputAddress" class="form-label">Hormigon Armado</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                </div>
                <div class="col-3">
                    <label for="inputAddress" class="form-label">Fibra de Vidrio</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                </div>
                <div class="col-3">
                    <label for="inputAddress" class="form-label">Roto Moldeo (UV)</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                </div>
  
                <h5>Estado</h5>
                <div class="col-md-3">
                    <label class="form-label">General</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected></option>
                        <option value="1">Bién</option>
                        <option value="2">Regular</option>
                        <option value="3">Mal</option>
                    </select>
                </div>
                <div class="col-md-3">
                    <label class="form-label">Estanque</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected></option>
                        <option value="1">Bién</option>
                        <option value="2">Regular</option>
                        <option value="3">Mal</option>
                    </select>
                </div>
                <div class="col-md-3">
                    <label class="form-label">Regulación</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected></option>
                        <option value="1">Bién</option>
                        <option value="2">Regular</option>
                        <option value="3">Mal</option>
                    </select>
                </div>
                <div class="col-md-3">
                    <label class="form-label">VOL [m3]</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected></option>
                        <option value="1">Bién</option>
                        <option value="2">Regular</option>
                        <option value="3">Mal</option>
                    </select>
                </div>
  
                <div class="col-4">
                  <label for="inputAddress" class="form-label">Fecha de Instalación</label>
                  <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                </div>
                <div class="col-4">
                  <label for="inputAddress" class="form-label">Coordenadas</label>
                  <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                </div>
                <div class="col-4">
                  <label for="formFileMultiple" class="form-label">Adjuntar Fotos</label>
                  <input class="form-control" type="file" id="formFileMultiple" multiple/>
                </div>

            
            </form><br/>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
        </>
    );
}