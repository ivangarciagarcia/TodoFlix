// Comprobar el valor de la cookie de idioma y actualizar el texto del enlace
function actualizarEnlaceIdioma() {
  var idioma = localStorage.getItem("idioma");
  if (idioma === "EN") {
    document.getElementById("cambiarIdioma").querySelector("a").textContent = "EN";
  } else {
    document.getElementById("cambiarIdioma").querySelector("a").textContent = "ES";
  }
}

// Actualizar el enlace cuando se carga la página
document.addEventListener("DOMContentLoaded", actualizarEnlaceIdioma);

// Actualizar el enlace cuando se cambia la cookie de idioma
document.getElementById("cambiarIdioma").addEventListener("click", function() {
  if (localStorage.getItem("idioma") === "ES") {
    localStorage.setItem("idioma", "EN");
  } else {
    localStorage.setItem("idioma", "ES");
  }
  actualizarEnlaceIdioma();
});