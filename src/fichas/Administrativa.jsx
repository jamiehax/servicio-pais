export default function Administrativa() {
    return (    
        <>
        <div class = "container">
            <h1>Información Administrativa</h1>
            <form class="row g-3">
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">Comite o cooperativa</label>
                    <input type="text" class="form-control" id="inputEmail4"/>
                </div>
                <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">Sector</label>
                    <input type="password" class="form-control" id="inputPassword4"/>
                </div>
                <div class="col-12">
                    <label for="inputAddress" class="form-label">Comunas</label>
                    <input type="text" class="form-control" id="inputAddress"/>
                </div>

                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">Razon Social</label>
                    <input type="text" class="form-control" id="inputEmail4"/>
                </div>
                <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">Rut</label>
                    <input type="password" class="form-control" id="inputPassword4"/>
                </div>
                <div class="col-12">
                    <label for="inputAddress" class="form-label">N° Reg. Org. Com.</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                </div>
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">N° Pers. Juridica</label>
                    <input type="text" class="form-control" id="inputEmail4"/>
                </div>
                <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">Carpeta</label>
                    <input type="password" class="form-control" id="inputPassword4"/>
                </div>
                <div class="col-12">
                    <label for="inputAddress" class="form-label">Fecha</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                </div>


                <h1>Datos Territoriales</h1>
                <div class="col-md-12">
                <label for="inputEmail4" class="form-label">Coordenadas</label>
                <input type="text" class="form-control" id="inputEmail4"/>
                </div>
                <div class="col-md-6">
                <label for="inputEmail4" class="form-label">Norte</label>
                <input type="text" class="form-control" id="inputEmail4"/>
                </div>
                <div class="col-md-6">
                <label for="inputPassword4" class="form-label">Este</label>
                <input type="password" class="form-control" id="inputPassword4"/>
                </div>
                <div class="col-12">
                <label for="inputAddress" class="form-label">Coor. geo</label>
                <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                </div>
                <div class="col-md-6">
                <label for="inputEmail4" class="form-label">Cantidad de Habitantes</label>
                <input type="text" class="form-control" id="inputEmail4"/>
                </div>
                <div class="col-md-6">
                <label for="inputPassword4" class="form-label">Tipo de Asentamiento</label>
                <input type="text" class="form-control" id="inputPassword4"/>
                </div>
                <div class="col-12">
                <label for="inputAddress" class="form-label">Posible Crecimiento del Sistema</label>
                <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                </div>

                <h3>Limites Territoriales de Servicio</h3>
                <div class="col-12">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                
                
                <h3>N° de Arranques</h3>
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">N° Total</label>
                    <input type="text" class="form-control" id="inputEmail4"/>
                </div>
                <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">N° Escuelas</label>
                    <input type="password" class="form-control" id="inputPassword4"/>
                </div>
                <div class="col-md-6">
                    <label for="inputAddress" class="form-label">N° Postas</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                </div>
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">N° Sedes</label>
                    <input type="text" class="form-control" id="inputEmail4"/>
                </div>
                <div class="col-md-12">
                    <label for="inputPassword4" class="form-label">Otros Arranques</label>
                    <input type="password" class="form-control" id="inputPassword4"/>
                </div>
                <div class="col-md-4">
                    <label for="inputAddress" class="form-label">Res D° Agua</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                </div>
                <div class="col-md-4">
                    <label for="inputAddress" class="form-label">Q. D° Agua</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                </div>
                <div class="col-md-4">
                    <label for="inputAddress" class="form-label">Res Sanitaria</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                </div>
                <div class="col-md-12">
                    <label for="inputAddress" class="form-label">Sum Sanitario</label>
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
                <label class="form-label">Tratamiento</label>
                <select class="form-select" aria-label="Default select example">
                    <option selected></option>
                    <option value="1">Bién</option>
                    <option value="2">Regular</option>
                    <option value="3">Mal</option>
                </select>
                </div>
                <div class="col-md-6">
                <label class="form-label">Regulación</label>
                <select class="form-select" aria-label="Default select example">
                    <option selected></option>
                    <option value="1">Bién</option>
                    <option value="2">Regular</option>
                    <option value="3">Mal</option>
                </select>
                </div>
                <div class="col-md-6">
                <label class="form-label">Distribución</label>
                <select class="form-select" aria-label="Default select example">
                    <option selected></option>
                    <option value="1">Bién</option>
                    <option value="2">Regular</option>
                    <option value="3">Mal</option>
                </select>
                </div>

                <h3>Tamaño de Medidores</h3>
                <div class="col-sm-6">
                    <label for="inputEmail4" class="form-label">1/2"</label>
                    <input type="text" class="form-control" id="inputEmail4"/>
                </div>
                <div class="col-sm-6">
                    <label for="inputPassword4" class="form-label">3/4"</label>
                    <input type="password" class="form-control" id="inputPassword4"/>
                </div>
                <div class="col-sm-6">
                    <label for="inputAddress" class="form-label">1"</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                </div>
                <div class="col-sm-6">
                    <label for="inputEmail4" class="form-label">2"</label>
                    <input type="text" class="form-control" id="inputEmail4"/>
                </div>
                <div class="col-md-12">
                    <label for="inputPassword4" class="form-label">Otras</label>
                    <input type="password" class="form-control" id="inputPassword4"/>
                </div>

                <h3>Pozos</h3>
                <div class="col-lg-12">
                    <label for="inputEmail4" class="form-label">N° Total</label>
                    <input type="text" class="form-control" id="inputEmail4"/>
                </div>

                <h3>Profundidad</h3>
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">P1</label>
                        <input type="text" class="form-control" id="inputEmail4"/>
                    </div>
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">P2</label>
                        <input type="text" class="form-control" id="inputEmail4"/>
                    </div>
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">P3</label>
                        <input type="text" class="form-control" id="inputEmail4"/>
                    </div>
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">P4</label>
                        <input type="text" class="form-control" id="inputEmail4"/>
                    </div>

                    <h3>Diametro en "</h3>
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">P1</label>
                        <input type="text" class="form-control" id="inputEmail4"/>
                    </div>
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">P2</label>
                        <input type="text" class="form-control" id="inputEmail4"/>
                    </div>
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">P3</label>
                        <input type="text" class="form-control" id="inputEmail4"/>
                    </div>
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">P4</label>
                        <input type="text" class="form-control" id="inputEmail4"/>
                    </div>

          

                    <h3>Cuentan con un espacio Físico (sede)</h3>
                    <div class="col-12">
                        <select class="form-select" aria-label="Default select example">
                            <option selected></option>
                            <option value="Si">Sí</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                </form>
                <br/>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
        </>
    );
}

