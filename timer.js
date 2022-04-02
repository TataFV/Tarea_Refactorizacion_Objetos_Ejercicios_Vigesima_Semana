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
