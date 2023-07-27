import DioAccount from './DioAccount.class';

export default class DioAccount10 extends DioAccount {
  readonly type = 'DioAccount10';

  constructor(name: string, balance?: number) {
    super(name, balance);
  }

  toDeposit(value: number): string {
    this.validate();
    this.setBalance(this.getBalance() + value + 10);
    this.addMoviment(`Deposito: R$${value} AUTORIZADO + R$10 BÔNUS. Saldo: R$${this.getBalance()}`);
    return `Deposito realizado no valor de R$${value} + R$10 BÔNUS. Saldo: R$${this.getBalance()};`;
  }
}
