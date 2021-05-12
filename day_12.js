// Desafio - Dia 12: Uma função que recebe um número de 1 a 12 e retorna o mês correspondente
function returnMonth(number) {
  const months = [
    "janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho",
    "agosto", "setembro", "outubro", "novembro", "dezembro"
  ]
  return months[--number];
}

console.log(returnMonth(3)); // março
console.log(returnMonth(12)); // dezembro
