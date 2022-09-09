var timerEl = document.getElementById("#countdown")
var timeLeft = document.getElementById("#time")
var question = document.getElementById("#question")

//timer
function countdown(){
    var timeLeft = 60;
    var timeInterval = setInterval(function(){
        if (timeLeft > 1){
            time.textContent = timeLeft + " seconds remaining"
            timeLeft--;
        }
        else if (timeLeft === 1){
            time.textContent = timeLeft + " second remaining";
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
// questions
 var questionSet = [
    {
        question: "What global phenom K-pop group do these members belong to?",
        answers: ["BTS", "Big Bang", "Stray Kids", "Seventeen"],
        correct: 0
    },
    {
        question: "What is the popular alcoholic drink that combines soju and beer?",
        answers: ["Mul", "Somaek", "Maekju", "A Good Time"],
        answer: 1 
    },
    {
        question: "How many out of the 9 members of the k-pop girl-group TWICE are not Korean?",
        answers: ["1", "3", "4", "6"],
        answer: 2
    },
    {
        question: "What is the most famous Korean vacation-island?",
        answers: ["Oedo", "Hongdo", "Ulleungdo", "Jeju"],
        answer: 3
    },
    {
        question: "What famous K-drama are these two (now married) actors from?",
        answers: ["Vagabond", "Crash Landing on You", "Attorney Woo", "Prison Playbook"],
        answer: 1
    }
];

console.log(questionSet[2].question)

// function showQuestion(){

// }


