// Desafio - Dia 18: Analise o código da image e responda qual o retorno:
// a) Mercedes | BMW | Rolls-Royce
// b) Mercedes | Rolls-Royce |
// c) Rolls-Royce | Mercedes | BMW |
// d) Rolls-Royce | BMW |
const cars = new Array("Ferrari", "Mercedes", "BMW");
cars.shift();
cars.splice(1, 1, "Rolls-Royce");
for(let i = 0; i < cars.length; i++) {
  console.log(cars[i] + " | ");
}
// Mercedes | Rolls-Royce |