// Desafio - Dia 16: Inverter chave por valor de uma lista com objetos.
function reverseObject(array) {
  return array.map(object => {
    return Object.fromEntries(Object.entries(object)
      .map(keyValue => keyValue.reverse()));
  });
}

const invertedObject = reverseObject([
  { key1: 'value1', key2: 'value2', key3: 'value3'},
  { key4: 'value4', key5: 'value5', key6: 'value6'},
])
console.log(invertedObject);
// [
//   { value1: 'key1', value2: 'key2', value3: 'key3' },
//   { value4: 'key4', value5: 'key5', value6: 'key6' }
// ]