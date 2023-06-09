import { React } from 'react';
import { useForm } from 'react-hook-form';

function Contabilidad() {

    const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm();

    const FORM_ENDPOINT = "https://reqres.in/api/products/3";
    
    const onSubmit = (data) => {
        console.log('data', data);

        data = {
            "name": "morpheus",
            "job": "leader"
        }

        fetch(FORM_ENDPOINT, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(response => {
            console.log("reponse", response)
            console.log(response.status)
            console.log(response.statusText)
        }).catch(error => {
            console.log("error:", error)
        });
        
    }

    const onError = () => {
        console.log("error");
    };

    register("ficha", {value: "contabilidad"});

    // TODO - use a react state to control this based on how the submission went
    if (isSubmitSuccessful) {
        return (
            <>
                <div id="submit-response">
                    <div>
                        <h1>Enviado!</h1>
                    </div>
                </div>
            </>
        );
    }
    else {
        return (   
            <>
               <div class = "container">
    
                    <h1>Informacion Contable</h1><br/>
    
                    <form onSubmit={handleSubmit(onSubmit, onError)}>
    
                        <h4>Iniciacion de actividades en el SII</h4>
                        <select {...register("iniciacion", {required: {value: true, message: "esto es necesario"}})} class="form-select">
                            <option defaultValue value="">Elige una opción</option>
                            <option value="1">Sí</option>
                            <option value="0">No</option>
                        </select><p class="error-message">{errors.iniciacion?.message}</p>
                        <h4>Balance al dia</h4>
                        <select {...register("balance", {required: {value: true, message: "esto es necesario"}})} class="form-select">
                            <option defaultValue value="">Elige una opción</option>
                            <option value="1">Sí</option>
                            <option value="0">No</option>
                        </select><p class="error-message">{errors.balance?.message}</p>
                        <h4>Tipo de sistema de registro</h4>
                        <select {...register("tipo", {required: {value: true, message: "esto es necesario"}})} class="form-select">
                            <option defaultValue value="">Elige una opción</option>
                            <option value="Manual">Manual</option>
                            <option value="Electrónico">Electrónico</option>
                        </select><p class="error-message">{errors.tipo?.message}</p>
                        <button type="submit" class="btn btn-primary me-3">
                            Enviar
                        </button> 
                        <button type="button" class="btn btn-danger" onClick={() => {reset()}}>
                            Reiniciar 
                        </button> 
                    </form>
                </div>
                
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossOrigin="anonymous"></script>
            </>
        );
    }
    
}

export default Contabilidad;