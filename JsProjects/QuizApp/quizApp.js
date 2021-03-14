const quizData = [
    {
        question: 'Who is the first programmer-woman in the world?',
        a: 'Ada Lavolace',
        b: 'Kateryna Yushchenko',
        c: 'Grace Hopper',

        correct: 'a'
    }, {
        question: 'What is depicted in the Java logo?',
        a: 'Nothing',
        b: 'There is a cup of coffee in it',
        c: 'High building',

        correct: 'b'
    },{
        question: 'In what year was JavaScript founded?',
        a: '1994',
        b: '1995',
        c: '1996',

        correct: 'b'
    }, {
        question: 'What is HTML?',
        a: 'Programming language',
        b: 'HyperText Markup Language',
        c: 'I don`t know, but I`ll know!',

        correct: 'b'
    }, {
        question: 'What is the main task of using CSS?',
        a: 'Giving style to the web-sites',
        b: 'Create apps for android',
        c: 'Create apps for PC',

        correct: 'a'
    }
]

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.app__answer')
const questionEl= document.getElementById('question')


const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')


let currentQuiz= 0;
let score= 0;

loadQuiz();

function loadQuiz(){
    deselectAnswer();
    const currentQuizData= quizData[currentQuiz];

    questionEl.innerText= currentQuizData.question;
    a_text.innerText=currentQuizData.a
    b_text.innerText=currentQuizData.b
    c_text.innerText=currentQuizData.c
}
const submitBtn= document.getElementById('submit')

function getSelected(){
    let answer = undefined;

    answerEls.forEach((answerEl)=>{
        if(answerEl.checked){
           answer = answerEl.id
        }
    });
    return(answer)

  
}

function deselectAnswer(){
    answerEls.forEach((answerEl)=>{
        answerEl.checked = false;
    })
}

submitBtn.addEventListener('click', ()=>{

    const answer = getSelected();


    if(answer === quizData[currentQuiz].correct){
        score++;
    }

    if(answer){
        currentQuiz++;
        if(currentQuiz <quizData.length){
            loadQuiz();
        }else{
           quiz.innerHTML = `<h2> Your score: ${quizData.length} /  ${score} </h2>`

           if(score === quizData.length){
               quiz.innerHTML=`<h1> Your score: ${quizData.length}/  ${score} Super! </h1>`
           }
        }
    }
})



