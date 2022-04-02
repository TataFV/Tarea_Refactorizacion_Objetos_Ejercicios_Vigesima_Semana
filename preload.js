/*
    Esta función sirve para hacer la precarga de la página, ocultando los apartados que no son necesarios o cargando los que si
        */
function preload() {
    ocultarNoUsados();
    selectoresTemporizador();
}

function ocultarNoUsados() {
    //Variables para almacenar los elementos HTML
    var reloj, cronometro, temporizador;
    reloj = document.getElementById("reloj");
    cronometro = document.getElementById("cronometro");
    temporizador = document.getElementById("temporizador");

    //Variables para comprobar que elementos deben ocultarse o si es la primera vez que se inicia
    var esReloj, esCronometro, esTemporizador;
    esReloj = localStorage.getItem("esReloj");
    esCronometro = localStorage.getItem("esCronometro");
    esTemporizador = localStorage.getItem("esTemporizador");

    if (esReloj == null && esCronometro == null && esTemporizador == null) {
        esReloj = 1;
        esCronometro = 0;
        esTemporizador = 0;
        localStorage.setItem("esReloj", esReloj);
        localStorage.setItem("esCronometro", esCronometro);
        localStorage.setItem("esTemporizador", esTemporizador);
    }

    if (esReloj != 1) {
        reloj.hidden = true;
    } else {
        reloj.hidden = false;
    }
    if (esCronometro != 1) {
        cronometro.hidden = true;
    } else {
        cronometro.hidden = false;
    }
    if (esTemporizador != 1) {
        temporizador.hidden = true;
    } else {
        temporizador.hidden = false;
    }
}

function selectoresTemporizador() {
    var horas_temporizador = document.getElementById("horas_temporizador");
    for (var i = 0; i <= 24; i++) {
        var option = new Option(i, i, false, false);
        horas_temporizador.appendChild(option);
    }
    var minutos_temporizador = document.getElementById("minutos_temporizador");
    for (var i = 0; i <= 60; i++) {
        var option = new Option(i, i, false, false);
        minutos_temporizador.appendChild(option);
    }
    var segundos_temporizador = document.getElementById("segundos_temporizador");
    for (var i = 0; i <= 60; i++) {
        var option = new Option(i, i, false, false);
        segundos_temporizador.appendChild(option);
    }
}