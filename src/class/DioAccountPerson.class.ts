import DioAccount from './DioAccount.class';

export default class DioAccountPerson extends DioAccount {
  private readonly cpf: string;
  readonly type = 'Person';

  constructor(name: string, cpf: string, balance?: number) {
    super(name, balance);
    this.cpf = cpf;
  }

  getCPF = (): string => this.cpf;
}
