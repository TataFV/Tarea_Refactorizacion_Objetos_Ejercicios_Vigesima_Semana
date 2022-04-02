/*
Reset se crea aquí por se una función específica, pues hará que los valores de los relojes vuelvan a por defecto
*/

function reset() {
    var fecha = new Date();
    document.getElementById("text_reloj").innerHTML = fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();
    document.getElementById("text_cronometro").innerHTML = "00:00:00";
    document.getElementById("text_temporizador").innerHTML = "00:00:00";
}

/*
Permite crear el evento que muestre el primer argumento y oculte los otros dos
*/
function evento_activar(show, hide1, hide2) {
    var div_show, div_hide1, div_hide2;

    div_show = document.getElementById(show.id.split("_")[1]);
    div_hide1 = document.getElementById(hide1.id.split("_")[1]);
    div_hide2 = document.getElementById(hide2.id.split("_")[1]);
    //Al diseñar los divs de tal manera que su nombre sea la extensión del resto de elmentos podemos
    //Referenciarlos simplemente dividiendo la cadena del ID del resto y recogiendo el primer elemento.
    show.addEventListener("click", () => {
        reset();
        div_show.hidden = false;
        div_hide1.hidden = true;
        div_hide2.hidden = true;
    });

}

/* 
Función para establecer la funcionalidad de los botones
*/
function botones() {
    var activar_reloj, activar_cronometro, activar_temporizador;
    activar_reloj = document.getElementById("activar_reloj");
    activar_cronometro = document.getElementById("activar_cronometro");
    activar_temporizador = document.getElementById("activar_temporizador");
    evento_activar(activar_reloj, activar_cronometro, activar_temporizador);
    evento_activar(activar_cronometro, activar_reloj, activar_temporizador);
    evento_activar(activar_temporizador, activar_cronometro, activar_reloj);

    var start_cronometro = document.getElementById("start_cronometro");
    var buttonFlag = document.getElementById("flag_cronometro");
    start_cronometro.addEventListener('click', () => {

        if (window.intervalo_cronometro == null) {
            crearIntervaloCronometro()
            buttonFlag.disabled = false;
        } else {
            stopIntervaloCronometro()
        }
    });

    buttonFlag.addEventListener('click', () => {
        crearSegmentoCronometro()
    })

    var start_temporizador = document.getElementById("start_temporizador");
    start_temporizador.addEventListener('click', () => {
        crearIntervaloTemporizador()
    });

    var stop_temporizador = document.getElementById("stop_temporizador");
    stop_temporizador.addEventListener('click', () => {
        stopIntervaloTemporizador()
    });
}


function __main__() {

    preload(); //preload debe ser una función puramente gráfica, no funcional generalmente
    reset();
    botones();

    //Vamos a utilizar el objeto "window" para establecer las variables de los intervalos y temporizadores de forma global
    //Y no tener que utilizar parámetros para enviar o recibirlas, pues puede acabar liándonos en estos ejercicos.

    window.intervalo_reloj = null;
    window.intervalo_cronometro = null;
    window.temporizador_temporizador = null;

    //AQUI LAS LLAMADAS A CREACIÓN DE INTERVALOS

    crearIntervaloReloj(); //Como es un reloj, no haría falta detener el intervalo, pero se crea el método stopIntervaloReloj, por se acaso
}

__main__();