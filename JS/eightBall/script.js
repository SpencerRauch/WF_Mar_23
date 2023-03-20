var answers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes - definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

var ballElement = document.querySelector("#ball")
var viewPortElement = document.querySelector("#viewPort")
var responseFieldElement = document.querySelector("#responseField")
var currentQuestionElement = document.querySelector("#currentQuestion")
var questionInputElement = document.querySelector("#questionInput")
var response = "";

function consultEightBall(){
    console.log("ran the function")
    ballElement.classList.add("elementToShake");
    setTimeout(finishConsult, 3000);
    responseFieldElement.innerText = "";
    response = answers[Math.floor(Math.random()*answers.length)]
    currentQuestionElement.innerText = questionInputElement.value;
    questionInputElement.value = "";
}


function finishConsult(){
    ballElement.classList.remove("elementToShake")
    fadeInAnswer();
}

function fadeInAnswer(){
    responseFieldElement.innerText = response;
    responseFieldElement.classList.add("elementToFadeIn");
    setTimeout(()=>responseFieldElement.classList.remove("elementToFadeIn"),2000);
}

