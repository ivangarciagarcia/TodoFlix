const paises = ["Australia","España","Francia","Italia","Portugal"];

function nuevoPais(pais,callback){
    setTimeout(function(){
        paises.push(pais);
        callback();
    },7000);

}

function mostrarPaises(){
    setTimeout(function(){
        let html="";paises.forEach(function(pais){
            html+=`${pais}\n`;
        });
        document.getElementById("resultado").innerHTML=html;console.log(`Listado Paises: ${html}`);
    },1000);
}

nuevoPais("Alemania",mostrarPaises);

nuevoPais("Colombia",mostrarPaises);

mostrarPaises();