// Desafio - Dia 27: Multiplicar os valores [1,2,3,4,5,6,7,8,9] que devem passados por parametro, multiplicar cada argumento pelo elemento anterior, começando com zero. Modificar cada elemento retornado no item anterior, onde deve conter o argumento que foi recebido, o valor calculado, e o índice. Por último deve retornar somente os argumentos menores que 6 e o total seja maior que 6.
function calArgs(...args) {

  let table = []
  args.reduce((acc, value) => table.push({ a: value, b: acc *= value }), 0);
  console.table(table);

  const modifyEl = table.reverse().map((el, i) => {
    return { argument: el.a, total: el.b , index: i};
  });
  console.table(modifyEl);

  const filterEl = modifyEl.filter(el => el.argument < 6 && el.total > 6);
  return console.table(filterEl);

}

calArgs(1,2,3,4,5,6,7,8,9);

// ┌─────────┬──────────┬───────┐
// │ (index) │ argument │ total │
// ├─────────┼──────────┼───────┤
// │    0    │    5     │  20   │
// │    1    │    4     │  12   │
// └─────────┴──────────┴───────┘