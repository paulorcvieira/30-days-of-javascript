// Desafio - Dia 08: Verificar se um CPF é válido com função construtora
/*
7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
Se o primeiro digito for maior que 9, considerar 0.

7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10  9  8  7  6  5  4  3  2
77  0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Segundo dígito)
Se o segundo digito for maior que 9, considerar 0.
*/

// 01
function ValidateCPF(cpf) {
  if (!cpf) throw "You did not pass the CPF.";
  Object.defineProperty(this, 'onlyNumbersOfCPF', {
    enumerable: true,
    get: () =>  cpf.replace(/\D+/g, '')
  });
}

ValidateCPF.prototype.createDigit = function(firstNineNumbersOfCPF) {
  const cpfArray = Array.from(firstNineNumbersOfCPF);

  let regressive = cpfArray.length + 1;
  const total = cpfArray.reduce((acc, value) => {
    acc += (regressive * Number(value));
    regressive--;
    return acc;
  }, 0);

  const digit = 11 - (total % 11);
  return digit > 9 ? '0' : String(digit);
};

// 02
ValidateCPF.prototype.verifyIfIsSequence = function() {
  return this.onlyNumbersOfCPF[0]
    .repeat(this.onlyNumbersOfCPF.length) === this.onlyNumbersOfCPF;
};
ValidateCPF.prototype.validate = function() {
  if(typeof this.onlyNumbersOfCPF !== 'string') return false;
  if(this.onlyNumbersOfCPF.length !== 11) return false;
  if(this.verifyIfIsSequence()) return false;
  const firstNineNumbersOfCPF = this.onlyNumbersOfCPF.slice(0, -2);
  const firstDigit = this.createDigit(firstNineNumbersOfCPF);
  const secondDigit = this.createDigit(firstNineNumbersOfCPF + firstDigit);
  const newCPF = firstNineNumbersOfCPF + firstDigit + secondDigit;
  return newCPF === this.onlyNumbersOfCPF;
};
const [cpf_01, cpf_02] = ["576.341.370-90", "111.111.111-11"];
console.log(new ValidateCPF(cpf_01).validate()
  ? `CPF ${cpf_01}: Valid CPF!`
  : `CPF ${cpf_01}: Invalid CPF!`
);
// CPF 576.341.370-90: Valid CPF!
console.log(new ValidateCPF(cpf_02).validate()
  ? `CPF ${cpf_02}: Valid CPF!`
  : `CPF ${cpf_02}: Invalid CPF!`
);
// CPF 111.111.111-11: Invalid CPF!