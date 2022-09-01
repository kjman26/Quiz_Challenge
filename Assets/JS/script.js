var timer = document.getElementById('countdown')
var time = document.getElementById('time')
//all functions need to be on click?????????

// questions for quiz split by '?' character
var questions = ["What global phenom K-pop group do these members belong to?", "What is the popular alcoholic drink that combines soju and beer?", "How many out of the 9 members of the k-pop girl-group TWICE are Korean?", "What is the most famous Korean vacation-island?", "What famous K-drama are these two (now married) actors from?"]
// answer sets for questions
var answerSet1 = ["BTS", "Big Bang", "Stray Kids", "Seventeen"]
var answerSet2 = ["Mul", "Somaek", "Maekju", "A Good Time"]
var answerSet3 = ["1" , "3", "4", "6"]
var answerSet4 = ["Oedo", "Hongdo", "Ulleungdo", "Jeju"]
var answerSet5 = ["Vagabond", "Crash Landing on You", "Attorney Woo", "Prison Playbook"]

// timer

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