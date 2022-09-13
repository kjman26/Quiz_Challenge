const timerEl = document.getElementById("#countdown");
const timeLeft = document.getElementById("#time");;
const currentQuestion = {};
const questionCounter = 0;
const availableQuestions = [questionSet.quest];
const maxQuestions = 5;

// questions
 var questionSet = [
    {
        quest: "What global phenom K-pop group debuted in 2013?",
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
    }
];

// start!
function startGame(){
    questionCounter = 0
    availableQuestions = questionSet.question
    showQuestion()
    newQuestion()
};

function showQuestion(question, index){

    let inquiry = document.getElementById("question")
    inquiry.textContent = questionSet[0].quest;    

    const alts = document.querySelectorAll('.alternative')

    alts.forEach(function(p, index){
    p.textContent = questionSet[0].answers[index]
})
};   
    let choices = document.getElementById('alternative');
     choices.addEventListener("click", function(){
        console.log('click')});
    


// get next questions
function newQuestion(){
    if (availableQuestions.length === 0){
        localStorage.setItem('recentScore', score)
        
        return window.location.assign('./score.html')
    }

    const questionIndex = Math.floor(Math.random()*availableQuestions.length)
    currentQuestion = availableQuestions[questionIndex]
    question.innerText = currentQuestion.question

    answer.forEach(answer => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['answer', number]
    })
}

// answers.forEach(answer =>{
    // answer.addEventListener('click', )
// })

// for (var i=0; i <= questionSet.length; i++){
//     var thisOne = document.getElementById('#question');
//     thisOne.textContent = ('sup')
//     console.log(thisOne)
    
// }


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
            time.textContent = "";
            clearInterval(timeInterval);
            clearInterval(timeInterval)
            // need function here to happen after timer hits zero
        }

    },1000)
    
};

showQuestion()
countdown()
// startGame();

// function showQuestion()on.('click',XXX){
    
// }


