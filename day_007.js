// Desafio - Dia 07: Encontrar o carro mais rápido do mundo em um array, utilizando reduce
const cars = [
  { name: 'Hennessey Venom GT', maxVelocity: 435.1 },
  { name: 'McLaren F1', maxVelocity: 386.4 },
  { name: 'Koenigsegg Agera RS', maxVelocity: 447 },
  { name: 'Bugatti Veyron 16.4', maxVelocity: 408.4 },
  { name: 'Bugatti Chiron Super Sport 300+', maxVelocity: 490.3 },
  { name: 'SSC Ultimate Aero TT', maxVelocity: 412.1 },
  { name: 'Bugatti Veyron Super Sport', maxVelocity: 430.9 },
  { name: 'Koenigsegg CCR', maxVelocity: 388 }
];
const { name, maxVelocity } = cars.reduce(function(acc, value, _index, _array) {
  return acc.maxVelocity > value.maxVelocity ? acc : value;
});
console.log(`The fastest car in the world is: ${name} \
reaching a speed of ${maxVelocity} km/h.`);
// The fastest car in the world is: Bugatti Chiron Super Sport 300+ reaching a speed of 490.3 km/h.