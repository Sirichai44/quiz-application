const questionData = [
	{
	  question:"1.Which one is not Operating system",
      a:"Dos system",
      b:"Microsoft word",
      c:"Microsoft Windows",
      d:"Android",
      correct:"b"
	},
    {
        question:"2.Which one is Web Browser",
        a:"Google Chrome",
        b:"Keyboard",
        c:"Mouse",
        d:"Monitor",
        correct:"a"
    },
    {
        question:"3.Which one is Hardware",
        a:"Keyboard",
        b:"Mouse",
        c:"Monitor",
        d:"All Correct",
        correct:"d"
    }
];

const questionEl = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const choiceA = document.getElementById('a-text');
const choiceB = document.getElementById('b-text');
const choiceC = document.getElementById('c-text');
const choiceD = document.getElementById('d-text');
const quizContainer = document.getElementById('quiz-container');

const submitBtn = document.getElementById('submit');
// console.log(answerEls);

let currentQuestion = 0;
let score = 0;
loadQuestion();

function loadQuestion(){
    checkchoice();
    const currrentQuizData = questionData[currentQuestion];
    questionEl.innerText = currrentQuizData.question;
    choiceA.innerText = currrentQuizData.a;
    choiceB.innerText = currrentQuizData.b;
    choiceC.innerText = currrentQuizData.c;
    choiceD.innerText = currrentQuizData.d;
}

function checkchoice(){
    answerEls.forEach(answerEl => answerEl.checked = false);
}

submitBtn.addEventListener('click',()=>{
    let answer = getChoiceAnswer();
    // console.log(answer);
    if(answer){
        if(answer === questionData[currentQuestion].correct){
            score++;
        }
        currentQuestion++;
        if(currentQuestion<questionData.length){
            loadQuestion();
        }else{
            quizContainer.innerHTML = `<h2>Your Score : ${score}/${questionData.length}</h2>`;
        }
    }
});

function getChoiceAnswer(){
    let answer;
    answerEls.forEach(answerEl =>{
       if(answerEl.checked) {
            answer = answerEl.id;
       }
    });
    return answer
}