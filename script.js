let start = document.getElementById('start');
let display = document.querySelector('#timer');
let stop = document.getElementById('stop');
const firstDuration = 60 * 20;
// if (localStorage.getItem("totalDuration") == null) {
    localStorage.setItem("totalDuration", firstDuration); //salvar a primeira vez
// }
realDuration = localStorage.getItem("totalDuration");


function toggleStatus(duration, display, command) {
    // console.log("duration : " +duration)
    // console.log("realDuration : " +realDuration)
    if (command == "start") {
        start.setAttribute("disabled", "disabled");
        stop.removeAttribute("disabled");
        var timer = duration, minutes, seconds;
        if (typeof regressiveTime !== undefined) {
            regressiveTime = setInterval(function () {
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);
                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;
                display.textContent = minutes + ":" + seconds;
                if (--timer < 0) {
                    timer = duration;
                }

                //atualizar a duração
                calc = (minutes * 60) + seconds;
                // console.log(calc)
                localStorage.setItem("totalDuration", calc);
                // console.log(localStorage.getItem("totalDuration")) 
                //atualizar a duração
            }, 1000);
        }else{
            const regressiveTime = setInterval(function () {
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);
                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;
                display.textContent = minutes + ":" + seconds;
                if (--timer < 0) {
                    timer = duration;
                }

                //atualizar a duração
                calc = (minutes * 60) + seconds;
                // console.log(calc)
                localStorage.setItem("totalDuration", calc);
                // console.log(localStorage.getItem("totalDuration")) 
                //atualizar a duração
            }, 1000);
        }
    }else{
        stop.setAttribute("disabled", "disabled");
        start.removeAttribute("disabled");
        realDuration = localStorage.getItem("totalDuration");
        window.clearInterval(regressiveTime);
    }
}


// var duration = 60 * 20; // Converter para segundos
// start.addEventListener("click", toggleStatus(duration, display, "start"));  // iniciando o timer
// stop.addEventListener("click", toggleStatus(null, null, "stop"));  // iniciando o timer