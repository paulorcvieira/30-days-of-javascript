// Desafio - Dia 13: Criar três diferentes formas de obter o valor total de despesas de produtos em um determinado array.
function expensesOne(itens) {
  let total = 0
  for (let item of itens)
    total += item.price
    return total
}
function expensesTwo(itens) { return itens
  .map(item => item.price)
  .reduce((accumulator, value) => accumulator + value)
}
function expensesTree(itens) {
  return itens
    .reduce((accumulator, value) => accumulator + value.price, 0)
}
const arrayProducts = [
  { name: "Gasoline", category: "Car", price: 1399.99 },
  { name: "Diesel", category: "Truck", price: 3333.90 }
];
console.log(expensesOne(arrayProducts)); // 4733.89
console.log(expensesTwo(arrayProducts)); // 4733.89
console.log(expensesTree(arrayProducts)); // 4733.89
