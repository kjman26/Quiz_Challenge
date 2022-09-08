var timerEl = document.getElementById("#countdown")
var timerEl = document.getElementById("time")
//all functions need to be on click?????????

//questions and answers, will be in OL
var questionSet = []

var questions=[
    ["What global phenom K-pop group do these members belong to?","BTS", "Big Bang", "Stray Kids", "Seventeen"], 
    ["What is the popular alcoholic drink that combines soju and beer?","Mul", "Somaek", "Maekju", "A Good Time"], 
    ["How many out of the 9 members of the k-pop girl-group TWICE are Korean?","1" , "3", "4", "6"], 
    ["What is the most famous Korean vacation-island?","Oedo", "Hongdo", "Ulleungdo", "Jeju"], 
    ["What famous K-drama are these two (now married) actors from?","Vagabond", "Crash Landing on You", "Attorney Woo", "Prison Playbook"]
];

function showQuestion (){
    document.getElementById("#questions").textContent = questionSet;
    JSON.stringify(Q1)
}
showQuestion();

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