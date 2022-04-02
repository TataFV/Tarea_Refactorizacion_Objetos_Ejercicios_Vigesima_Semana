class StopWatch {
    constructor(isActivated) {
        this.isActivated = false;
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