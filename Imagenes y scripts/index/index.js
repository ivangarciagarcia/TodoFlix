window.onload = ()=>{

     const languaje = document.getElementById('idioma');
     let originalLanguaje = languaje.textContent;

     function getCookie(idioma){
          let n, nombre, valor;
          let cookie = document.cookie.split(";");
          for (let i = 0; i < cookie.length; i++) {
              n = cookie[i].split("=");
              nombre = n[0];
              valor = n[1];
              if (nombre.trim() == idioma.trim()) {
                    return valor;
              }
          }
          return null;
     }
     languaje.addEventListener('click', function() {
          if (this.textContent === originalLanguaje) {
            this.textContent = 'En';
          } else {
            this.textContent = originalLanguaje;
          }
        });



         const xhr = new XMLHttpRequest();
         xhr.open('GET', 'Imagenes y scripts/index/index.json', true);        
         xhr.onload = function() {
             
              if(this.status === 200) {
                   const tendencias =  JSON.parse( this.responseText );
                   const estrenos =  JSON.parse( this.responseText );
                   
                   let htmlTemplate = '<table class="table"> <tbody> <tr>';
                   tendencias.tendencias.forEach(function(pelicula) {
                         htmlTemplate += `
                        <td><a href="${pelicula.url}"><img id="${pelicula.id}" loading="lazy" src="${pelicula.imagen}" alt="${pelicula.titulo}" width="300" height="400"></a><br>${pelicula.titulo}</td>
                             `;
                   });
                   htmlTemplate += '</tr>';

                   htmlTemplate += '<tr>';
                   tendencias.tendencias2.forEach(function(pelicula) {
                         htmlTemplate += `
                        <td><a href="${pelicula.url}"><img id="${pelicula.id}" loading="lazy" src="${pelicula.imagen}" alt="${pelicula.titulo}" width="300" height="400"></a><br>${pelicula.titulo}</td>
                             `;
                    });
               htmlTemplate += ' </tr> </tbody> </table> <table> <tbody> <tr>';

               htmlTemplate += '<p class="titulo" id="estrenos"><b>ULTIMOS ESTRENOS</b></p>'


               estrenos.estrenos.forEach(function(pelicula) {
                    htmlTemplate += `
                        <td><a href="${pelicula.url}"><img id="${pelicula.id}" loading="lazy" src="${pelicula.imagen}" alt="${pelicula.titulo}" width="300" height="400"></a><br>${pelicula.titulo}</td>
                             `;
                   });
                   htmlTemplate += '</tr>';
 
                   htmlTemplate += '<tr>';
               
               estrenos.estrenos2.forEach(function(pelicula) {
                    htmlTemplate += `
                         <td><a href="${pelicula.url}"><img id="${pelicula.id}" loading="lazy" src="${pelicula.imagen}" alt="${pelicula.titulo}" width="300" height="400"></a><br>${pelicula.titulo}</td>
                              `;
                    });
 
               htmlTemplate += ' </tr> </tbody> </table>';
                   document.getElementById('fila1').innerHTML = htmlTemplate;                   
              }
          }
         xhr.send();
        

  
}
