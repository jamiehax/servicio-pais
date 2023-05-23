export default function Contabilidad() {
    return (   
        <>
           <div class = "container">

                <h1>Informacion Contable</h1><br/>

                <h4>Iniciacion de actividades en el SII</h4>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Elige una opción</option>
                    <option value="1">Si</option>
                    <option value="2">No</option>
                </select><br/>
                <h4>Balance al dia</h4>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Elige una opción</option>
                    <option value="1">Si</option>
                    <option value="2">No</option>
                </select><br/>
                <h4>Tipo de sistema de registro</h4>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Elige una opción</option>
                    <option value="1">Manual</option>
                    <option value="2">Electrónico</option>
                </select>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
        </>
    );
}