var minutes = 0;
var seconds = 0;
var timer = setInterval(countdown, 1000);

function countdown() {
    if (seconds == 0 && minutes == 0) {
        clearInterval(timer);
        restartTimer();
        return;
    } else if (seconds == 0) {
        seconds = 59;
        minutes--;
    } else {
        seconds--;
    }
    document.getElementById("minutes").innerText = padZero(minutes);
    document.getElementById("seconds").innerText = padZero(seconds);
}

function padZero(num) {
    if (num < 10) {
        return "0" + num;
    } else {
        return num;
    }
}

function restartTimer() {
    minutes = 59;
    seconds = 0;
    timer = setInterval(countdown, 1000);
}
