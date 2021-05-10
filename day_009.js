// Desafio - Dia 09: Gerar e validar CPF usando classes
class ValidateCPF {
  constructor(cpf) {
    this.cpf = cpf;
    this.onlyNumbersOfCPF = cpf.replace(/\D+/g, "");
  }
  verifyIfIsSequence() {
    return this.onlyNumbersOfCPF.charAt(0).repeat(11) === this.onlyNumbersOfCPF;
  }
  generateDigitsToVerifyCPF() {
    const firstNineNumbersOfCPF = this.onlyNumbersOfCPF.slice(0, -2);
    const firstDigit = ValidateCPF.createDigit(firstNineNumbersOfCPF);
    const secondDigit = ValidateCPF.createDigit(firstNineNumbersOfCPF + firstDigit);
    this.newCPF = firstNineNumbersOfCPF + firstDigit + secondDigit;
  }
  static createDigit(firstNineNumbersOfCPF) {
    let total = 0;
    let regressive = firstNineNumbersOfCPF.length + 1;
    for(let numberOfCPF of firstNineNumbersOfCPF) {
      total += regressive * Number(numberOfCPF);
      regressive--;
    }
    const digit = 11 - (total % 11);
    return digit <= 9 ? String(digit) : "0";
  }
  validate() {
    if(!this.onlyNumbersOfCPF) return false;
    if(typeof this.onlyNumbersOfCPF !== "string") return false;
    if(this.onlyNumbersOfCPF.length !== 11) return false;
    if(this.verifyIfIsSequence()) return false;
    this.generateDigitsToVerifyCPF();
    return this.newCPF === this.onlyNumbersOfCPF
      ? `CPF: ${this.cpf} is valid!`
      : `CPF: ${this.cpf} is invalid!`;
  }
}

class GenerateCPF {
  generateFirstNineDigits(min = 100000000, max = 999999999) {
    return String(Math.floor(Math.random() * (max - min) + min));
  }
  formatToCPF(cpf) {
    return cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4");
  }
  generateNew() {
    const firstNineNumbersOfCPF = this.generateFirstNineDigits();
    const firstDigit = ValidateCPF.createDigit(firstNineNumbersOfCPF);
    const secondDigit = ValidateCPF.createDigit(firstNineNumbersOfCPF + firstDigit);
    return this.formatToCPF(firstNineNumbersOfCPF + firstDigit + secondDigit);
  }
}
const cpf = new GenerateCPF().generateNew();
console.log("CPF:", cpf);
console.log(new ValidateCPF(cpf).validate());
// CPF: 839.631.457-81
// CPF: 839.631.457-81 is valid!