var timer = document.getElementById('countdown')
var time = document.getElementById('time')
//all functions need to be on click?????????

// questions for quiz split by '?' character
var message = "why did the chicken cross the road? where are you now? what is your favorite food?" 

var words = message.split('?')

function countdown(){
    var timeLeft = 5;
    var timeInterval = setInterval(function(){
        if (timeLeft > 5){
            timer.textContent = timeLeft + "seconds remaining"
            timeLeft--;
        }
        else if (timeLeft === 1){
            time.textContent = timeLeft + "second remaining"
        }
        else {
            timer.textContent = "";
            clearInterval(timeInterval);

            // need function here to happen after timer hits zero
        }

    },5000)
};

countdown();