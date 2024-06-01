function acierto(lasTarjetas){
//retira as cartas encontradas
    lasTarjetas.forEach(function(elemento){
    elemento.classList.add("acertada"); /*add outra class, ver css*/
    });
}

function error(lasTarjetas) {
    lasTarjetas.forEach(function(elemento) {
        elemento.classList.add('error');
    });

setTimeout(
    function(){//função só para por em setTimeout
        lasTarjetas.forEach(function(elemento){
            //reviva a carta
                   elemento.classList.remove("descubierta"); /*remove a class*/
                   elemento.classList.remove("error"); /*remove a class*/
                });
    }, 1000);
}