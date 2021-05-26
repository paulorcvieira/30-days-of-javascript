// Desafio - Dia 25: Criar um contador regressivo
const staringPointInMinutes = 6.5;
let time = staringPointInMinutes * 60;
setInterval(regressiveCounter, 1000);
function regressiveCounter(timeInMinutes) {
  time = timeInMinutes ? Number(timeInMinutes) * 60 : time;

  let minutes = Math.floor(time / 60);
  minutes = minutes < 10 ? "0" + minutes : minutes;

  let seconds = time % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  console.log(`${minutes}:${seconds}`);

  time !== 0 ? time-- : time
}

regressiveCounter(9.5);
