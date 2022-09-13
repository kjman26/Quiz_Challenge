

var questionSet = [
    {
        quest: "Who is the biggest global sensation to emerge in the Kpop world?",
        answers: ["BTS", "Big Bang", "Stray Kids", "Seventeen"],
        correct: 0
    },
    {
        quest: "What is the popular alcoholic drink that combines soju and beer?",
        answers: ["Mul", "Somaek", "Maekju", "A Good Time"],
        correct: 1 
    }
];

function showQuestion(){

    let inquiry = document.getElementById("inquiry")
    inquiry.textContent = questionSet[0].quest;  
 
let alts = document.querySelectorAll('.alternative')

alts.forEach(function(p, index){
    p.textContent = questionSet[0].answers[index]
})
};

var thisOne = document.getElementById('.answer-container')

thisOne.addEventListener("click", function(){
    console.log('did it!')
});


// check answers
// alts.forEach(function(){

// ) if (questionSet.correct){
//     console.log("got it!")
//  }
//  else{
//     console.log("incorrect")
//     timeLeft--;
//  }



// function nextQuestion(){

// }
// select dom element
showQuestion(questionSet);