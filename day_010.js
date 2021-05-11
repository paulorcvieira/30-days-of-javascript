// Desafio - Dia 10: Gerador de senha randômica
const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const generatesUppercaseLetters = () => String.fromCharCode(rand(65, 91));
const generatesLowercaseLetters = () => String.fromCharCode(rand(97, 123));
const generatesNumbers = () => String.fromCharCode(rand(48, 58));
const symbols = "><[]~|^{}!@#$%*()_+=-;.,";
const generatesSymbols = () => symbols[rand(0, symbols.length)];

function generatePassword(uppercase, numbers, symbols, amount = 6) {
  const passwordArray = [];
  const numAmount = Number(amount);

  for(let i = 0; i < numAmount; i++) {
    passwordArray.push(generatesLowercaseLetters());
    uppercase && passwordArray.push(generatesUppercaseLetters());
    numbers && passwordArray.push(generatesNumbers());
    symbols && passwordArray.push(generatesSymbols());
  }

  return passwordArray.join('').slice(0, numAmount);
}

console.log(generatePassword(false, false, false)); // xkffrm
console.log(generatePassword(true, false, false, 10)); // lErWkKqQgQ
console.log(generatePassword(true, true, false, 10)); // cR1tA4aB3d
console.log(generatePassword(true, true, false, 10)); // iB1fM9vS8q
console.log(generatePassword(false, false, true, 10)); // h>a@a+g^g%
