let timer;//empty container for the timer variable
function startClock() {
    if (!timer) { //if the clock isnt already running, go ahead and start it
        timer =setInterval(showTime, 1000);
    }
}
function showTime() {
    const date = new Date();
    myDisplayer(date.toLocaleTimeString());
}

function stopClock() {
    clearInterval(timer);
    timer =undefined; //reset the timer variable so that the clock can be started again
}

function myDisplayer(text) {
    document.getElementById("demo")
    demo.innerHTML = text;
}