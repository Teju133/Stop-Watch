let timerInterval;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let running = false;

function updateDisplay() {
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
    document.getElementById("milliseconds").textContent = String(milliseconds).padStart(2, "0");
}

function startStopwatch() {
    if (running) return; // Prevent multiple intervals
    running = true;
    timerInterval = setInterval(() => {
        milliseconds += 1;
        if (milliseconds === 100) {
            milliseconds = 0;
            seconds += 1;
        }
        if (seconds === 60) {
            seconds = 0;
            minutes += 1;
        }
        updateDisplay();
    }, 10);
}

function stopStopwatch() {
    clearInterval(timerInterval);
    running = false;
}

function resetStopwatch() {
    clearInterval(timerInterval);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    running = false;
    updateDisplay();
}
