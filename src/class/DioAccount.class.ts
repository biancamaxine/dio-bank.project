import {v4 as uuidv4} from 'uuid';

export default abstract class DioAccount {
  private readonly name: string;
  private readonly account_number: string = uuidv4();

  private balance: number;
  private status: boolean = true;
  private moviments: string[] = [];

  constructor(name: string, balance?: number) {
    this.name = name;
    this.balance = balance || 0;
    this.addMoviment(`Saldo Inicial: R$${this.balance}`);
  }

  // GETs && SETs
  getAccountNumber = (): string => this.account_number;

  getName = (): string => this.name;

  getBalance = (): number => this.balance;
  setBalance(balance: number): void { this.balance = balance; }

  getStatus = (): boolean => this.status;
  changeStatus(): void { this.status = !this.status; }

  addMoviment(moviment: string): void {
    this.moviments.push(`${new Date().toUTCString()} - ${moviment};`);
  }

  // Methods
  seeExtract = (): string[] => this.moviments;
  toDeposit(value: number): string {
    this.validate();
    this.setBalance(this.getBalance() + value);
    this.addMoviment(`Deposito: R$${value} AUTORIZADO. Saldo: R$${this.getBalance()}`);
    return `Deposito realizado no valor de R$${value}. Saldo: R$${this.getBalance()};`;
  }
  toWithdraw(value: number): string {
    this.validate();
    if (this.balance >= value) {
      this.setBalance(this.getBalance() - value);
      this.addMoviment(`Saque: R$${value} AUTORIZADO. Saldo: R$${this.getBalance()}`);
      return `Saque realizado no valor de R$${value}. Saldo: R$${this.getBalance()};`;
    }
    this.addMoviment(`Saque: R$${value} NEGADO (Saldo Insuficiente). Saldo: R$${this.getBalance()}`);
    return `Saldo insuficiente para realizar essa operação;`;
  }

  validate() {
    if (!this.getStatus())
      throw new Error('Esta conta não se encontra ativa.\nContacte nosso suporte para mais informações');
  }
}
