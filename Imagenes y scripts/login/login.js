const iniciar = ()=>{
    // asociamos al evento button del elemento formulario la función de validación
    document.getElementById("login").addEventListener("click", comprobar)
}

document.addEventListener("DOMContentLoaded", iniciar);

import { validateEmail } from "./validacion.js";

function comprobar(e) {
    let hayError = false;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let mensaje="<hr>";


    if (validateEmail(email) == false) {
        hayError= true;
        mensaje += "El email no es valido <br>"
    }

    if (password == null || password.length < 8) {
        hayError = true;
        mensaje += "Debe ingresar una contraseña superiror a 7 caracteres <br>";
    }


     // si hay algún error no efectuamos la acción submit del form
     if (!hayError){
        window.location.href = "./index.html";
    } else {
        e.preventDefault();
        document.getElementById("errores").innerHTML = mensaje;
    }

    

   
};