function readCookie(idioma) {

  var idiomaEQ = idioma + "="; 
  var cookie = document.cookie.split(';');

  for(var i=0;i < cookie.length;i++) {

    var c = cookie[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(idiomaEQ) == 0) {
      return decodeURIComponent( c.substring(idiomaEQ.length,c.length) );
    }

  }

  return null;

}

idioma.addEventListener('click', function() {
  let caducidad = new Date().getTime() + 7*24*60*60*1000;
  if (this.textContent ===  "Es") {
    document.cookie = `idioma=En; path=/; expires=${caducidad}`;
    this.textContent = 'En';
    location.reload();
  } else if (this.textContent ===  "En") {
    document.cookie = `idioma=Es; path=/; expires=${caducidad}`;
    this.textContent = 'Es';
    location.reload();
  }
});


// Creamos una cookie
//document.cookie = "idioma=" + encodeURIComponent( "Es" );

// Leemos la cookie
var miCookie = readCookie( "idioma" );
document.getElementById("idioma").innerText = miCookie;



