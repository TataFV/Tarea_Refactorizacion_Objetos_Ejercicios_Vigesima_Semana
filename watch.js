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