window.onload = function() {

    let segundos = 00;
    let milisegundos = 00;

    let adicionarSegundos = document.getElementById("segundos");
    let adicionarMilisegundos = document.getElementById("milisegundos");

    let botãoIniciar = document.getElementById("começar")
    let botãoParar = document.getElementById("parar")
    let botãoRecomeçar = document.getElementById("recomeçar")

    let interval;

    botãoIniciar.onclick = function() {

        clearInterval(interval);
        interval = setInterval(startTimer, 1000);
    }

    botãoParar.onclick = function() {

        clearInterval(interval);
    }

    botãoRecomeçar.onclick = function() {

        clearInterval(interval);
        segundos = "00";
        milisegundos = "00";

        adicionarSegundos.innerHTML = segundos;
        adicionarMilisegundos.innerHTML = milisegundos;

    }

    function startTimer() {
        milisegundos++;

        if (milisegundos <= 9) {
            adicionarMilisegundos.innerHTML = "0" + milisegundos; // 01, 02 ...
        }

        if (milisegundos > 9) {
            adicionarMilisegundos.innerHTML = milisegundos;
        }

        if (milisegundos > 99) {
            console.log("segundos")
            segundos++;

            adicionarSegundos.innerHTML = "0" + segundos;
            milisegundos = 0;
            adicionarMilisegundos.innerHTML = "0" + 0; // 01, 02 ...
        }

        if (segundos > 9) {
            adicionarSegundos.innerHTML = segundos;
        } 
    }
}