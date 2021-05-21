// Desafio - Dia 20: Como usar: map, filter, reduce, every, some, find, includes e has.
// map() - Modificar valores
const fahrenheit = [33, 36, 39, 63, 66, 69];
console.table("map(): ", fahrenheit.map(elem => Math.round((elem - 32) * 5 / 9)));

// filter() - Filtrar com base em algum dado
const multipleArrays = [2, 3, [4, [5, 4, [12, 19], 7], 2], 5];
const uniqueArray = multipleArrays
   .flat(3)
   .filter((elem, index, arr) => arr.indexOf(elem) === index);
console.log("filter(): ", uniqueArray);

// reduce() - Reduzir a um elemento acumulado
const population = [
  { country: "Russia", people: 144000000 },
  { country: "US", people: 328000000 },
  { country: "China", people: 1398000000 }
];
console.log("reduce(): ", population.reduce((acc, elem) => acc + elem.people, 0));

// every() - Verificar se todos os elementos são verdadeiros
const people = [
  { id: 12, name: "Paulo", age: 17 },
  { id: 47, name: "Caroline", age: 18 },
];
console.log("every(): ", people.every(p => p.age >= 18));

// some() - Verificar se pelo menos um elementos é verdadeiro
console.log("some(): ", people.some(p => p.age === 18));


// find() = Buscar elemento baseado em uma regra
const pizzas = [ "mussarela", "calabresa", "portuguesa", "marguerita"];
console.log("find(): ", pizzas.find(p => p.startsWith("m")));

// includes() - Verificar se um array possui um elemento em seu índice
const phones = [
  { name: "samsung", price: 5400 },
  { name: "iphone", price: 12000}
];
console.log("includes(): ", phones.filter(p => p.name.includes("one")));

// has() - Verificar se um Map tem um determinado elemento
const team = new Map();
team.set("Node.js", "JavaScript", "React.js", "React Native");
console.log("has(): ", team.has("Node.js"));