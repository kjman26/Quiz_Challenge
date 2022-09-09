var timerEl = document.getElementById("#countdown")
var timerEl = document.getElementById("time")
//all functions need to be on click?????????

//questions and answers, will be in OL


var questionSet = [
    {
        question: "What global phenom K-pop group do these members belong to?",
        answers: ["BTS", "Big Bang", "Stray Kids", "Seventeen"]
    correct: 0
    },
    {
        question: "What is the popular alcoholic drink that combines soju and beer?"
    answers: ["Mul", "Somaek", "Maekju", "A Good Time"]
    },
    {
        question: "How many out of the 9 members of the k-pop girl-group TWICE are not Korean?",
        answers: ["1", "3", "4", "6"],
        answer: 2
    },
    {
        question: "What is the most famous Korean vacation-island?"
        answers: ["Oedo", "Hongdo", "Ulleungdo", "Jeju"]
        answer: 3
    },
    {
        question: "What famous K-drama are these two (now married) actors from?",
        answers: ["Vagabond", "Crash Landing on You", "Attorney Woo", "Prison Playbook"],
        answer: 1,
    }

];

// timer

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
};

countdown();

//update scoreboard
// next page on timeout