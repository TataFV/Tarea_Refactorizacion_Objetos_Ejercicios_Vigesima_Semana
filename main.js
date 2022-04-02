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


function activarReloj() {
    var text_reloj = document.getElementById("text_reloj");
    var fecha = new Date();
    var hora = fecha.getHours();
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();
    text_reloj.innerHTML = hora + ":" + minutos + ":" + segundos;

}

function crearIntervaloReloj() {
    intervalo_reloj = setInterval(activarReloj, 1000);
}

function stopIntervaloReloj() {
    clearInterval(intervalo_reloj);
}

function activarCronometro() {
    var text_cronometro = document.getElementById("text_cronometro");
    var horas = 0;
    var minutos = 0;
    var segundos = 0;
    var tiempo = text_cronometro.innerHTML; // tiempo = "HH:MM:SS"

    tiempo = tiempo.split(':'); // tiempo = [ "HH", "MM", "SS" ]

    segundos = parseInt(tiempo[2]);
    minutos = parseInt(tiempo[1]);
    horas = parseInt(tiempo[0]);

    segundos++

    if (segundos == 60) {
        minutos++;
        segundos = 0;
    }

    if (minutos == 60) {
        horas++;
        minutos = 0;
    }

    text_cronometro.innerHTML = horas + ":" + minutos + ":" + segundos;
}

function activarTemporizador() {

    var text_temporizador = document.getElementById("text_temporizador");
    var horas = 0;
    var minutos = 0;
    var segundos = 0;
    var tiempo = text_temporizador.innerHTML; // tiempo = "HH:MM:SS"

    tiempo = tiempo.split(':'); // tiempo = [ "HH", "MM", "SS" ]

    segundos = parseInt(tiempo[2]);
    minutos = parseInt(tiempo[1]);
    horas = parseInt(tiempo[0]);

    segundos--

    if (segundos == -1) {
        minutos--;
        segundos = 59;
    }

    if (minutos == -1) {
        horas--;
        minutos = 59;
    }

    text_temporizador.innerHTML = horas + ":" + minutos + ":" + segundos;

    if (horas == 0 && minutos == 0 && segundos == 0) {
        stopIntervaloTemporizador()
        alert("Se acabó el tiempo");
    }
}

function stopIntervaloTemporizador() {
    clearInterval(intervalo_temporizador);
    intervalo_temporizador = null;

    var stop_temporizador = document.getElementById("stop_temporizador")
    stop_temporizador.disabled = true;
}


function crearIntervaloTemporizador() {
    var horas_temporizador = document.getElementById("horas_temporizador")
    console.log(horas_temporizador.value);
    var minutos_temporizador = document.getElementById("minutos_temporizador")
    console.log(minutos_temporizador.value);
    var segundos_temporizador = document.getElementById("segundos_temporizador")
    console.log(segundos_temporizador.value);

    var text_temporizador = document.getElementById("text_temporizador");

    text_temporizador.innerHTML = horas_temporizador.value + ":" + minutos_temporizador.value + ":" + segundos_temporizador.value;

    var milisegundos_temporizador = parseInt(horas_temporizador.value) * 3600;
    milisegundos_temporizador += parseInt(minutos_temporizador.value) * 60;
    milisegundos_temporizador += parseInt(segundos_temporizador.value);
    milisegundos_temporizador *= 1000;

    var temporizador_temporizador = setTimeout(alert, milisegundos_temporizador, "Se acabó el tiempo");
    window.intervalo_temporizador = setInterval(activarTemporizador, 100);

    var stop_temporizador = document.getElementById("stop_temporizador")
    stop_temporizador.disabled = false;

}
function crearIntervaloCronometro() {
    window.intervalo_cronometro = setInterval(activarCronometro, 100);
}
function stopIntervaloCronometro() {
    clearInterval(intervalo_cronometro);
    intervalo_cronometro = null;
}

function crearSegmentoCronometro() {
    const ul = document.getElementById('tiempos_parciales');
    let li = document.createElement('li');

    var cronometro = document.getElementById("text_cronometro")
    li.innerHTML = cronometro.innerHTML;

    ul.appendChild(li)
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