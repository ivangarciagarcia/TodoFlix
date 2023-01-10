window.onload = ()=>{

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
