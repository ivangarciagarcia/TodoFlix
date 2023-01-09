window.onload = ()=>{

   let id =  function conseguirId() {
        var url = document.location;
        var split = url.split(/#(.{2})/)[1];
        var id = split[1];
        return id;
      }
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'Imagenes y scripts/detalle/detalle.json', true);
    xhr.onload = function() {
        if(this.status === 200) {
             const peliculas =  JSON.parse( this.responseText );
             /*peliculas.find();*/
             let htmlTemplate = `<iframe class="embed-responsive-item" title="TRAILER OFICIAL" width="600" height="400" src="${peliculas.trailer}"></iframe>`;
             htmlTemplate += `<table class="table">
             <tbody>
                 <td id="mainrow" class="mainrow">
                     <ul>
                         <li><b>Titulo: </b> ${peliculas.titulo}</li><br><br>
                         <li><b>Año: </b>${peliculas.ano}</li><br><br>
                         <li><b>Duracion: </b>${peliculas.duracion} min</li><br><br>
                         <li><b>Sinopsis: </b>${peliculas.sinopsis}</ul> 
                 </td>
                 <td id="secrow" class="secrow">
                     <img src="${peliculas.imagen}" alt="${peliculas.titulo}" width="300" height="400">
                 </td>
             </tbody>
         </table>`;
             document.getElementById('trailer-table').innerHTML = htmlTemplate;                   
        }
   }

   
     xhr.send();
}