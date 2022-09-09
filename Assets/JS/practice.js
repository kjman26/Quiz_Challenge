var answers = document.getElementById("#stuff")
var question = document.getElementById("#question")
var test = document.getElementById("#Test")
var questions=[];
var question ="";
var timerEl = document.getElementById("#countdown")
var timerEl = document.getElementById("time")

question.textContent('hello')
// var quiz = ["question", "answer", "answer 2"];


//timer - change to 60seconds - score = timeLeft = X.textcontent or something?
function countdown(){
    var timeLeft = 5;
    var timeInterval = setInterval(function(){
        if (timeLeft > 1){
            time.textContent = timeLeft + "seconds remaining"
            timeLeft--;
        }
        else if (timeLeft === 1){
            time.textContent = timeLeft + "second remaining";
            timeLeft--;
        }
        else {
            timer.textContent = "";
            clearInterval(timeInterval);
            clearInterval(timeInterval)
            // need function here to happen after timer hits zero
        }

    },1000)
    
    countdown();
};