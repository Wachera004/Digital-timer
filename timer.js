let timer;//empty container for the timer variable
function startClock() {
    if (!timer) { //if the clock isnt already running, go ahead and start it
        timer =setInterval(showTime, 1000);
    }
}
function showTime() {
    const date = new Date();// ask the computer for the exact current time 
    myDisplayer(date.toLocaleTimeString());// forwrads that raw computer time into a readable clock format
}

function stopClock() {// so that it knows which clock to turn off
    clearInterval(timer);
    timer =undefined; //reset the timer variable so that the clock can be started again
}

function myDisplayer(text) {// to display any text
    let demo = document.getElementById("demo");
    demo.innerHTML = text;
}
