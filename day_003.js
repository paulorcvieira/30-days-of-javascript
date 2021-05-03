// Desafio - Dia 03: Utilizando Generators
function bhaskara(a, b, c) {
  const delta = Math.pow(b, 2) - 4 * a * c;

  return new Promise(resolve => setTimeout(() => {
    if (!a || !b || !c) reject("Insira os valores de a, b e c");
    if (a === 0) reject("O valor de 'a', deve ser diferente de '0'");
    if (delta < 0) return reject("Para Delta negativo, não existem raízes reais.");

    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);

    resolve({ x1, x2 });
  }, 1000));
};

function fnAsyncRecursive(gen, result) {
  const obj = gen.next(result);
  if (obj.done) return;
  obj.value.then(result => fnAsyncRecursive(gen, result));
};

function fnAsync(fn) { fnAsyncRecursive(fn()) };

fnAsync(function* () {
  const a = yield bhaskara(1, 12, -13);
  const b = yield bhaskara(2, -16, -18);
  console.log(a,b);
});
// { x1: 1, x2: -13 } { x1: 9, x2: -1 }
