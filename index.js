const timeDisplay = document.querySelector("timeDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let startTime = 0;
let elapsedTime  = 0;
let currentTime = 0;
let pasused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;
//adding event listeners to our buttons

startBtn.addEventListener("click", () => {
    if(paused){
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 1000);
    }
});
pauseBtn.addEventListener("click", () => {
    if(!paused){
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);
    }
});
resetBtn.addEventListener("click", () => {
    paused = true;
    clearInterval(intervalId);
        startTime = 0;
        elapsedTime = 0;
        currentTime = 0;
        hrs = 0;

        mins = 0;
        secs = 0;
    timeDisplay.textContent = "00:00:00";
});

//function to declare our time
function updateTime(){
    elapsedTime = Date.now() - startTime;

    secs = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

    timeDisplay.textContent = '${hrs}:${mins}:${secs}';

    secs = pad(secs);
    mins = pad(mins);
    hrs = pad(hrs);
    //adding an extra zero as a padding
    function pad(unit){
        return (("0") + unit).length > 2 ? unit : "0" + unit;
    }

}