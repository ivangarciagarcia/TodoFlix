window.onload = ()=>{

   let id =  function conseguirId() {
        var url = document.location.hash;
        var split = url.split(/#/);
        var id = split[1];
        return id;
      }

    const indice = id();


    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'Imagenes y scripts/detalle/detalle.json', true);
    xhr.onload = function() {
        if(this.status === 200) {
             const peliculas = JSON.parse( this.responseText );  /*[...JSON.parse( this.responseText )]*/ 
             const pelicula = peliculas.filter(pelicula => (pelicula.id == indice))[0];
             console.log(peliculas);
             console.log(pelicula);
             let htmlTemplate = `<iframe class="embed-responsive-item" title="TRAILER OFICIAL" width="600" height="400" src="${pelicula.trailer}"></iframe>`;
             htmlTemplate += `<table class="table">
             <tbody>
                 <td id="mainrow" class="mainrow">
                     <ul>
                         <li><b>Titulo: </b> ${pelicula.titulo}</li><br><br>
                         <li><b>Año: </b>${pelicula.ano}</li><br><br>
                         <li><b>Duracion: </b>${pelicula.duracion} min</li><br><br>
                         <li><b>Sinopsis: </b>${pelicula.sinopsis}</ul> 
                 </td>
                 <td id="secrow" class="secrow">
                     <img src="${pelicula.imagen}" alt="${pelicula.titulo}" width="300" height="400">
                 </td>
             </tbody>
         </table>`;
             document.getElementById('trailer-table').innerHTML = htmlTemplate;                   
        }
   }

   
     xhr.send();
}


/*"id" : 1,
            "imagen":"Imagenes y scripts/img/tendencias/blackAdam.jpg" ,
            "titulo":"BlackAdam",
            "ano":2022,
            "duracion":125,
            "sinopsis": "Black Adam es la película del antihéroe de DC Comics que da nombre al filme -encarnado por Dwayne Johnson- gran antagonista de Shazam!.Este largometraje es la hisotoria de su origen y revelando su pasado como esclavo en el país Kahndaq. Nacido en el Antiguo Egipto, Black Adam tiene superfuerza, velocidad, resistencia, la capacidad de volar y disparar rayos. Alter ego de Teth-Adam e hijo del faraón Ramsés II, fue consumido por sus poderes mágicos y se transformó en un hechicero. Gran enemigo de Shazam! en los cómics, a pesar de creer en su potencial e incluso ofrecerlo como guerrero del bien, Black Adam acaba utilizando sus habilidades especiales para el mal. Sin embargo, un grupo de héroes conocido como la JSA encabezados por Doctor Fate (Pierce Brosnan) tratarán que el peligroso superhumano busque la redención y pase a utilizar sus poderes para hacer el bien, ievocando a la humanidad que alguna vez habitó en su interior.",
            "url": "detalle.html",
            "trailer": "https://www.youtube.com/embed/_yn30cCrPJM"*/