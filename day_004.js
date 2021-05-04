// Como utilizar callback

// Callback
function sum(a, b, callback) {
  if (!a || !b || !callback) {
    throw `Invalid argument '${!a
      ? 'a'
      : 'b'}', callback is not a function.`;
  }
  setTimeout(function() {
    callback(a + b);
  }, 1000);
}
sum(4, 4, function(result) {
  console.log('Resultado da soma: ', result);
});
// Resultado da soma:  8

// Promise
function subtract(a, b) {
  return new Promise(function(resolve, reject) {
    if (!a || !b) return reject(`Invalid argument '${!a ? 'a' : 'b'}'.`);
    setTimeout(function() {
      resolve(a - b);
    }, 1000);
  });
}

subtract(17, 4).then(function(a) {
  return subtract(10, 5).then(function(b) {
    return subtract(a, b).then(function(result) {
      console.log('Resultado da subtração: ', result);
    });
  })
}).catch(function(err) {
  console.error(err);
});
// Resultado da subtração:  8


// Async/Await
function divide(a, b) {
  return new Promise(function(resolve, reject) {
    if (!a || !b) return reject(`Invalid argument '${!a ? 'a' : 'b'}'.`);
    setTimeout(function() {
      resolve(a / b);
    }, 1000);
  });
}

(async function() {
  try {
    const result = await divide(await divide(128, 8), await divide(16, 8));
    console.log('Resultado da divisão: ', result);
  } catch (err) {
    console.error(err);
  }
})();
// Resultado da divisão:  8

// Como iterar utilizando async/await (ES2019)
// Neste caso é preciso evitar o uso de forEach pois o forEach não espera o
// retorno da execução da função, chamando o resultado antes de resolver as
// funções, desta forma para conseguir controlar melhor, recomenda-se utilizar o
// uso do for-await-of.

// Async/Await iterando com for-await-of
function multiply(a, b) {
  return new Promise(function(resolve, reject) {
    if (!a || !b) return reject(`Invalid argument '${!a ? 'a' : 'b'}'.`);
    setTimeout(function() { resolve(a * b) }, 1000);
  });
}

(async function() {
  try {
    const functions = [multiply(2, 2), multiply(1, 2)];
    const results = [];
    // functions.forEach(async function(fn) { results.push(await fn) });
    // for (let fn of functions) { results.push(await fn) };
    for await (let result of functions) {
      results.push(result);
    };
    const [a, b] = results;
    const result = await multiply(a, b);
    console.log('Resultado da multiplicação: ', result);
  } catch (err) {
    console.error(err);
  }
})();
// Resultado da multiplicação:  8