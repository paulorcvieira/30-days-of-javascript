// Desafio - Dia 29: Criar uma conta bancária, que possa receber e transferir valores, e o saldo da conta poupança deve receber um juro anual
class Account {
  constructor(balanceCA, balanceSA, fees) {
    this.balanceCA = balanceCA;
    this.balanceSA = balanceSA;
    this.fees = fees;
  }

  deposit(value) {
    this.balanceCA += Number(value);
  }

  withdraw(value) {
    this.balanceCA -= Number(value);
  }

  annualInterest() {
    const fees = (this.balanceSA * this.fees) / 100;
    this.balanceSA += fees;
  }
}

const account = new Account(633.33, 100, 0.23);
console.log(account); // Account { balanceCA: 633.33, balanceSA: 100, fees: 10 }

account.withdraw(200.22);
console.log(account); // Account { balanceCA: 433.11, balanceSA: 100, fees: 10 }

account.deposit(10.50);
console.log(account); // Account { balanceCA: 443.61, balanceSA: 100, fees: 10 }

account.annualInterest();
console.log(account); // Account { balanceCA: 443.61, balanceSA: 100.23, fees: 0.23 }
