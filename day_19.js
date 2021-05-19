// Desafio - Dia 19: Criar um problema onde o resultado seja um array dentro de outro, e resolva de duas formas para transformar em um array único.
const provider = [
  {
    plan: 'Platium',
    clients: [
      { name: 'Paulo', score: 903.13 },
      { name: 'Caroline', score: 923.63}
    ]
  },
  {
    plan: 'Gold',
    clients: [
      { name: 'Carmen', score: 816.33 },
      { name: 'Debora', score: 866.23}
    ]
  }
];

const getClientScore = client => client.score;
const getPlanScore = plan => plan.clients.map(getClientScore);

// returns an array within another
console.log(provider.map(getPlanScore));
// [ [ 903.13, 923.63 ], [ 816.33, 866.23 ] ]

// Case 01
Array.prototype.flatMap = function(cb) {
  return Array.prototype.concat.apply([], this.map(cb));
}
console.log(provider.flatMap(getPlanScore));
// [ 903.13, 923.63, 816.33, 866.23 ]

// Case 02
console.log(provider.map(getPlanScore).flat(Infinity));
// [ 903.13, 923.63, 816.33, 866.23 ]