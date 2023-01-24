const iniciar = ()=>{
    // asociamos al evento button del elemento formulario la función de validación
    document.getElementById("register").addEventListener("click", comprobar)
}

document.addEventListener("DOMContentLoaded", iniciar);

import { validateEmail } from "./validacion.js";

function comprobar(e) {
    let hayError = false;
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let email = document.getElementById('email').value;
    let mensaje="<hr>";

    if (username == null || username.length < 4) {
        hayError = true;
        mensaje += "Debe ingresar un nombre con al menos 4 caracteres <br>";
    }

    if (validateEmail(email) == false) {
        hayError= true;
        mensaje += "El email no es valido <br>"
    }

    if (password == null || password.length < 8) {
        hayError = true;
        mensaje += "Debe ingresar una contraseña superiror a 7 caracteres <br>";
    }

    if (!registro.checked) {
        hayError = true;
        mensaje += `Debe aceptar los <a href="/Footer/terminosDeUso.html" target="_blank"><b>Terminos de uso</b></a> <br>`;
    }

     // si hay algún error no efectuamos la acción submit del form
     if (!hayError){
        window.location.href = "./login.html";
    } else {
        e.preventDefault();
        document.getElementById("errores").innerHTML = mensaje;
    }

    


};


