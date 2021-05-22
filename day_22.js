// Desafio - Dia 22: Gerador de numeros pra mega sena
function generateNumbers(num) {
  const amount = Number(num) ** 2;
  const asc = (a, b) => a - b;
  const generatedNumbers = Array(amount).fill(0)
    .map(() => parseInt(Math.random() * 60 + 1));
  return Array.from(new Set(generatedNumbers)).splice(0, 6).sort(asc);
}

console.log(generateNumbers(6));
// [ 6, 27, 31, 34, 36, 55 ]