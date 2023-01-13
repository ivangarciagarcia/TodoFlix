// Crea una cookie llamada "idioma" con el valor "Español"
localStorage.setItem("idioma", "Español");

// Asigna un evento click al elemento con id "cambiarIdioma"
document.getElementById("cambiarIdioma").addEventListener("click", function() {
  // Obtiene el valor actual de la cookie "idioma"
  var idiomaActual = localStorage.getItem("idioma");

  // Si el idioma actual es Español, cambia la cookie a "Ingles"
  if (idiomaActual === "Español") {
    localStorage.setItem("idioma", "Ingles");
  }
  // Si el idioma actual es Ingles, cambia la cookie a "Español"
  else {
    localStorage.setItem("idioma", "Español");
  }
});

