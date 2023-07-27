import DioAccount from './DioAccount.class';

export default class DioAccountCompany extends DioAccount {
  private readonly cnpj: string;
  readonly type = 'Company';

  constructor(name: string, cnpj: string, balance?: number) {
    super(name, balance);
    this.cnpj = cnpj;
  }

  getCNPJ = (): string => this.cnpj;

  getLoan(value: number): string {
    this.validate();
    this.setBalance(this.getBalance() + value);
    this.addMoviment(`Emprestimo: R$${value} AUTORIZADO`);
    return `Emprestimo realizado no valor de R$${value}. Saldo: R$${this.getBalance()};`;
  }
}
