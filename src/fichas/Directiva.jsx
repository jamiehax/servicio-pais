export default function Directiva() {
    return (    
        <>
            <div class = "container">
            <form class="row g-3">
                <h1>Información Directiva</h1>
                <div class="col-md-3">
                    <label for="inputEmail4" class="form-label">Fecha</label>
                    <input type="text" class="form-control" id="inputEmail4"/>
                </div>
                <div class="col-md-3">
                    <label for="inputEmail4" class="form-label">Socios</label>
                    <input type="text" class="form-control" id="inputEmail4"/>
                </div>
                <div class="col-md-3">
                    <label for="inputEmail4" class="form-label">Usuarios</label>
                    <input type="text" class="form-control" id="inputEmail4"/>
                </div>
                <div class="col-md-3">
                    <label for="inputEmail4" class="form-label">Vigencia</label>
                    <input type="text" class="form-control" id="inputEmail4"/>
                </div>

                <div class="col-2">
                    <h6>Presidente</h6>
                </div>
                <div class="col-3">
                    <input type="text" class="form-control" placeholder="Nombre"/>
                </div>
                <div class="col-3">
                    <input type="text" class="form-control" placeholder="RUT"/>
                </div>
                <div class="col-3">
                    <input type="text" class="form-control" placeholder="Fono"/>
                </div>

                <div class="col-2">
                    <h6>Secretario</h6>
                </div>
                <div class="col-3">
                    <input type="text" class="form-control" placeholder="Nombre"/>
                </div>
                <div class="col-3">
                    <input type="text" class="form-control" placeholder="RUT"/>
                </div>
                <div class="col-3">
                    <input type="text" class="form-control" placeholder="Fono"/>
                </div>

                <div class="col-2">
                    <h6>Tesorero</h6>
                </div>
                <div class="col-3">
                     <input type="text" class="form-control" placeholder="Nombre"/>
                </div>
                <div class="col-3">
                    <input type="text" class="form-control" placeholder="RUT"/>
                </div>
                <div class="col-3">
                    <input type="text" class="form-control" placeholder="Fono"/>
                </div>
                
                <div class="col-2">
                    <h6>1° Director(a)</h6>
                </div>
                <div class="col-3">
                    <input type="text" class="form-control" placeholder="Nombre"/>
                </div>
                <div class="col-3">
                    <input type="text" class="form-control" placeholder="RUT"/>
                </div>
                <div class="col-3">
                    <input type="text" class="form-control" placeholder="Fono"/>
                </div>

                <div class="col-2">
                    <h6>2° Director(a)</h6>
                </div>
                <div class="col-3">
                    <input type="text" class="form-control" placeholder="Nombre"/>
                </div>
                <div class="col-3">
                    <input type="text" class="form-control" placeholder="RUT"/>
                </div>
                <div class="col-3">
                    <input type="text" class="form-control" placeholder="Fono"/>
                </div>

                <div class="col-2">
                    <h6>3° Director(a)</h6>
                </div>
                <div class="col-3">
                    <input type="text" class="form-control" placeholder="Nombre"/>
                </div>
                <div class="col-3">
                    <input type="text" class="form-control" placeholder="RUT"/>
                </div>
                <div class="col-3">
                    <input type="text" class="form-control" placeholder="Fono"/>
                </div>

                <h1>Participación en Organizaciones de Agua de Mayor Escala</h1>
                <div class="col-2">
                    <label for="inputEmail4" class="form-label">Comunal</label>
                    <input type="text" class="form-control" id="inputEmail4"/>
                </div>
                <div class="col-10">
                    <label for="inputEmail4" class="form-label">¿Cuales?</label>
                    <input type="text" class="form-control" id="inputEmail4"/>
                </div>
                <div class="col-2">
                    <label for="inputEmail4" class="form-label">Provincial</label>
                    <input type="text" class="form-control" id="inputEmail4"/>
                </div>
                <div class="col-10">
                    <label for="inputEmail4" class="form-label">¿Cuales?</label>
                    <input type="text" class="form-control" id="inputEmail4"/>
                </div>
                <div class="col-2">
                    <label for="inputEmail4" class="form-label">Regional</label>
                    <input type="text" class="form-control" id="inputEmail4"/>
                </div>
                <div class="col-10">
                    <label for="inputEmail4" class="form-label">¿Cuales?</label>
                    <input type="text" class="form-control" id="inputEmail4"/>
                </div>
                <div class="col-2">
                    <label for="inputEmail4" class="form-label">Nacional</label>
                    <input type="text" class="form-control" id="inputEmail4"/>
                </div>
                <div class="col-10">
                    <label for="inputEmail4" class="form-label">¿Cuales?</label>
                    <input type="text" class="form-control" id="inputEmail4"/>
                </div>
                <div class="col-2">
                    <label for="inputEmail4" class="form-label">Internacional</label>
                    <input type="text" class="form-control" id="inputEmail4"/>
                </div>
                <div class="col-10">
                    <label for="inputEmail4" class="form-label">¿Cuales?</label>
                    <input type="text" class="form-control" id="inputEmail4"/>
                </div>

                <h7>¿Participa de Actividades Interorganizacionales?</h7>
                <div class="col-12">
                    <label class="btn btn-secondary">
                        <input type="radio" name="espacio-fisico" id="si" autocomplete="off"/> Sí
                    </label>
                    <label class="btn btn-secondary">
                        <input type="radio" name="espacio-fisico" id="no" autocomplete="off"/> No
                    </label>
                </div>
                <div class="col-12">
                    <label for="inputEmail4" class="form-label">¿Cuales acciones de trabajo conjunto cuentan con?</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder=""></textarea>
                </div>

                <h7>¿Desde el municipio existe un apoyo en temas de agua?</h7>
                <div class="col-12">
                    <label class="btn btn-secondary">
                        <input type="radio" name="espacio-fisico" id="si" autocomplete="off"/> Sí
                    </label>
                    <label class="btn btn-secondary">
                        <input type="radio" name="espacio-fisico" id="no" autocomplete="off"/> No
                    </label>
                </div>
                <div class="col-12">
                    <label for="inputEmail4" class="form-label">¿Quienes y en que area?</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder=""></textarea>
                </div>

            </form><br/>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
        </>
    );
}