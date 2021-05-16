// Desafio - Dia 15: Criar uma função que calcule o imc
(function calcIMC({ height, weight }) {
  height = Number(height);
  weight   = Number(weight);
  const imc = (weight / (height ** 2)).toFixed(2);

  const log = (bodily) => console
    .log(`Você está ${bodily} com esse índice de massa corporal: ${imc}`)

  if(imc < 18.5) return log("magro");
  if(imc >= 18.5 && imc < 24.99) return log("normal");
  if(imc >= 25 && imc < 29.99) return log("com sobrepeso");
  if(imc >= 30 && imc < 39.99) return log("com obesidade");

  return log("com obesidade grave")
})({ height: 1.72, weight: 72});
// Você está normal com esse índice de massa corporal: 24.34