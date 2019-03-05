
var myVar = setInterval(function(){ myTimer() }, 1000);
var secondlimit = 30;
var steps= new Audio("../sounds/footsteps1.mp3");
var scream= new Audio("../sounds/scream+2.mp3");



function myTimer() {
    steps.play();
    if(secondlimit == 0)
    {
        scream.play();
        myStopFunction();

    }

    document.getElementById("safeTimerDisplay").innerHTML = '00:' + zeroPad(secondlimit,2);
    secondlimit = secondlimit  - 1;

}

function myStopFunction() {
    clearInterval(myVar);
}

function zeroPad(num, places) {
  var zero = places - num.toString().length + 1;
  return Array(+(zero > 0 && zero)).join("0") + num;
}