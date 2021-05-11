// Desafio - Dia 11: Um carro tem 5 níveis hepotético de velocidade, decubra a velocidade de cada nível utilizando WeakSet
const cars = new WeakSet();
function Cars(velocity) {
  cars.add(this);
  this.velocity = velocity;
}
Cars.prototype.calculateVelocity = function() {
  return Math.pow(this.velocity, 2);
}
const car = new Cars(5);
for (let i = 0; i < 5; i++) {
  console.log(`Nível ${i + 1}: \
Velocity: ${car.calculateVelocity.call({ velocity: i })} km/h`);
}
// Nível 1: Velocity: 0 km/h
// Nível 2: Velocity: 1 km/h
// Nível 3: Velocity: 4 km/h
// Nível 4: Velocity: 9 km/h
// Nível 5: Velocity: 16 km/h