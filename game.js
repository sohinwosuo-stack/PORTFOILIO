const question = document.getElementById("question");
const choices =  Array.from(document.getElementsByClassName("choice-text"));
console.log(choices);

let currentQuestion = {};
let acceptingAnswers = true;
let questionCounter = 0;
let availableQuestions = [];

let questions = [ 
     { question:   " Choose The word that is closest in meaning to the  word in CAPITAL  (The teaches explanation was EXPLICIT)",
        choice1: "Confusing",
        choice2: "clear",
        choice3:" short",
        choice4:" wrong",
        answer: 2
    },
    {
        question:" Choose the word that is oposite in meaning to the CAPITALISED word( The manager gave a generous donation)",
        choice1: "mean",
        choice2:"huge",
        choice3:"kind",
        choice4:" large",
        answer: 1
    },
    {
        question:"If i had known, I___have told you",
        choice1:"shall ",
        choice2:"will",
        choice3:"would",
        choice4:"should",
        answer: 3
    },
    {   question:" Neither of the girls ____ was present at the meeting",
        choice1:"are",
        choice2:"were",
        choice3:"is",
        choice4:"have been",
        answer: 3
    },
    {   
        question:"He insisted____paying the fine",
        choice1:"at",
        choice2:"in",
        choice3:" on",
        choice4:"for",
        answer: 3
    },
    {   
        question:"   SYNONYM TO THE CAPITALIZED WORD (The teacher told the students to HAND IN their assignments)",
        choice1:"submit",
        choice2:" rewrite",
        choice3:" copy",
        choice4:" postpone",
        answer: 1
    },
    {   
        question:"SYNONYM TO THE CAPITALISED WORD (the principal blew his top when he saw the damage.)",
        choice1:"shouted loudly",
        choice2:"bcame very angry",
        choice3:"Left the room",
        choice4:"started crying",
        answer: 2
    },
    {   
        question:" Which of the following words has the same vowel sound as book ",
        choice1:" food",
        choice2:"boot",
        choice3:"look",
        choice4:" flood",
        answer: 3
    },{   
        question:" In which of the following words is the stress placed on the second syllable ",
        choice1:" table",
        choice2:"advise",
        choice3:"teacher",
        choice4:" market",
        answer: 2
    },
{   
        question:" Vhoose the best summary for this sentence( In spite of the heavy rain, the match continued )",
        choice1:" The match was stopped because of the rain",
        choice2:"The players refused to play in the rain.",
        choice3:"The match went on despite of the rain",
        choice4:" The Math was posponed till later",
        answer: 3
    },


]; 
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
};
getNewQuestion = () => {
    if(availableQuestions.length == 0 || questionCounter >=MAX_QUESTIONS.length){
        //go to the endpage//
        return window.location.assign("/end.html");
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;
    

    choices.forEach(choice => { 
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);

    console.log(availableQuestions);
    acceptingAnswers = true;

};
choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedchoice = e.target;
        const selectedAnswer = selectedchoice.dataset["number"];
        
        const classToApply = 
        
        console.log();
        
        getNewQuestion();

        
    });
});


startGame();