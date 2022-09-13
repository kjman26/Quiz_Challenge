const alts = document.querySelectorAll('.alternative');
const timerEl = document.getElementById("#countdown");
const timeLeft = document.getElementById("#time");

var questionSet = [
    {
        quest: "What wildly successful Kpop band debuted in 2013'?",
        answers: ["BTS", "Big Bang", "Stray Kids", "Seventeen"],
        correct: 0
    },
    {
        quest: "What is the popular alcoholic drink that combines soju and beer?",
        answers: ["Mul", "Somaek", "Maekju", "A Good Time"],
        correct: 1
    },
    {
        quest: "How many out of the 9 members of the k-pop girl-group TWICE are Korean?",
        answers: ["1", "3", "5", "6"],
        correct: 2
    },
    {
        quest: "What is the most famous Korean vacation-island?",
        answers: ["Oedo", "Hongdo", "Ulleungdo", "Jeju"],
        correct: 3
    },
    {
        quest: "What is the martial art of Korea?",
        answers: ["Taekwondo", "Karate", "Judo", "Muay Thai"],
        correct: 1
    },
];

var questionCount = 0
function showQuestion() {

    let inquiry = document.getElementById("inquiry")
    inquiry.textContent = questionSet[0].quest;

    alts.forEach(function (element, index) {
        element.textContent = questionSet[questionCount].answers[index]
    });

};

showQuestion();


function checkAnswer(){
questionSet++;
$('.answer-container p').on('click',(event)=>{
    console.log(event.target.dataset.number);

if(event.target.dataset.number === questionSet[questionCount].correct){
    console.log('yay')
}
else{
    console.log('wrong!')
}})

showQuestion(questionSet[questionCount])
};

//     }); 
// $('.answer-container p').on('click',(event)=>{
//     console.log(event.target.dataset.number)
// })
//next question 




//timer
function countdown() {
    var timeLeft = 60;
    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            time.textContent = timeLeft + " seconds remaining"
            timeLeft--;
        }
        else if (timeLeft === 1) {
            time.textContent = timeLeft + " second remaining";
            timeLeft--;
        }
        else {
            time.textContent = "";
            clearInterval(timeInterval);
            clearInterval(timeInterval)
            // need function here to happen after timer hits zero
        }

    }, 1000)

};

countdown();