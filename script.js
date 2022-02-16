"use strict"

var mm = 20;
var ss = 60;

var tempo = 1000; //Quantos milésimos valem 1 segundo
var cron;

//
function start() {
    cron = setInterval(() => {timer(); }, tempo)
}

//
function pause() {
    clearInterval(cron);
}

//
function stop(){
    clearInterval(cron);
    mm = 0;
    ss = 0;

    document.getElementById('counter').innerText = '20:00'
}

function timer() {
    while (ss != 0){
        ss = 60;
        ss--;
    }
    mm--;


    var format = (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    document.getElementById('counter').innerText = format;
}
