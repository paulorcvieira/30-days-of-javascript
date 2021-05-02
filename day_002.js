// Desafio - Dia 02: Interceptar operações com Proxy e utilizar métodos com Reflect

function createBrand() {
  return new Proxy({}, {
    set(target, key, value) {
      target.length = target.length || 0;
      target.length++;
      Reflect.set(target, key, value);
    },
    get(target, key) {
      if (typeof key === "string" && key.match(/\d+/)) {
        if (!(Reflect.has(target, key))) {
          throw `Property ${key} not found.`;
        }
      }
      return Reflect.get(target, key);
    },
    deleteProperty(target, key) {
      if (Reflect.has(target, key)) {
        target.length--;
        Reflect.deleteProperty(target, key);
        console.log(`Car in position ${key} has deleted.`);
      }
    }
  });
}
const cars = createBrand();
cars[0] = "Lamborghini"; cars[1] = "Mercedes"; cars[2] = "BMW";
console.log(`cars: ${JSON.stringify(cars)} \nsize: ${cars.length}`);
delete cars[1]; delete cars[2]; delete cars[3];
console.log(`cars: ${JSON.stringify(cars)} \nsize: ${cars.length}`);
console.log(cars[0]); console.log(cars[1]);
// cars:  { '0': 'Lamborghini', '1': 'Mercedes', '2': 'BMW', length: 3 }
// cars.length:  3
// Car in position 1 has deleted.
// Car in position 2 has deleted.
// cars:  { '0': 'Lamborghini', length: 1 }
// cars.length:  1
// Lamborghini
// Property 1 not found.