// Desafio - Dia 26: Criar um Quiz simples
const quizData = [
  {
    question: 'Na linguagem JavaScript, o operador === (três sinais de igualdade) realiza a comparação apenas do:',
    a: 'tipo dos operandos.',
    b: 'conteúdo dos operandos.',
    c: 'valor dos operandos.',
    d: 'valor lógico dos operandos.',
    e: 'valor e do tipo dos operandos.',
    correct: 'e'
  }
];

let currentQuiz = 0;
let score = 0;

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];
  return console.log(`Question: ${currentQuizData.question}
  a) ${currentQuizData.a}
  b) ${currentQuizData.b}
  c) ${currentQuizData.c}
  d) ${currentQuizData.d}
  e) ${currentQuizData.e}`);
}

function generateQuiz() {
  loadQuiz();
  const answer = prompt('What is the correct answer? ');
  if(answer) {
    if(answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if(currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      console.log(`You answered ${score}/${quizData.length} questions`);
      const reload = prompt('Do you want to start the quiz again? yes/no ');
      if(reload == 'yes') {
        currentQuiz = 0;
        score = 0;
        loadQuiz();
      }
    }
  }
}

generateQuiz();