// Desafio - Dia 05: Ordenando um array de objetos utilizando o método sort em Javascript
const people = [
  { name: "Paulo", age: "25" },
  { name: "Caroline", age: "26" },
  { name: "Carmen", age: "27" },
  { name: "Débora", age: "29" },
  { name: "Debora", age: "28" },
];
people.sort(function(a, b) {
  return a.name < b.name ? -1 : 1;
});
console.log(people);
people.sort( (a, b) => a.name.localeCompare(b.name, 'pt-BR', {
  sensitivity: 'variant',
  ignorePunctuation: true
}));
console.log(people);

// [{ name: 'Carmen', age: '27' },
// { name: 'Caroline', age: '26' },
// { name: 'Debora', age: '28' },
// { name: 'Paulo', age: '25' }]