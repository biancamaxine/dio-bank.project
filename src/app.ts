import { cnpj, cpf } from 'cpf-cnpj-validator';

import DioAccount10 from './class/DioAccount10.class';
import DioAccountCompany from './class/DioAccountCompany.class';
import DioAccountPerson from './class/DioAccountPerson.class';

const company = new DioAccountCompany('Industrias Oscorp', cnpj.generate(), 50000);
const person = new DioAccountPerson('Normam Osborn', cpf.generate());
const dioAcount10 = new DioAccount10('Peter Parker');

function printInfo(text: string = '', value: string = ''): void {
  const LINE: string = '....................................................................';
  const multiplyString = (text: string, multiply: number): string => {
    const aux: string = text;
    text = '';
    for (let i: number = 1; i < multiply; i++)
      text += aux;
    return text;
  }

  const lineInfo: string = LINE
    .replace(multiplyString('.', text.length), text)
    .substring(0, LINE.length - value.length - 1) + ` ${value}`;

  console.log(lineInfo);
}

function presents(
  dioAccount: DioAccountPerson | DioAccountCompany | DioAccount10,
  deposit: number,
  withdraw: number,
  loan?: number,
  ): void {
    printInfo();
    printInfo('NAME: ', dioAccount.getName());
    printInfo('ACCOUNT_TYPE', dioAccount.type);
    if (dioAccount.type === 'Company') printInfo('CNPJ: ', dioAccount.getCNPJ());
    if (dioAccount.type === 'Person') printInfo('CPF: ', dioAccount.getCPF());
    printInfo('ACOUNT_NUMBER: ', dioAccount.getAccountNumber());
    printInfo();
    console.log();

    console.log(dioAccount.toDeposit(deposit))
    if (loan && dioAccount.type === 'Company') console.log(dioAccount.getLoan(loan));
  console.log(dioAccount.toWithdraw(withdraw));
  console.log(dioAccount.toWithdraw(withdraw));
  console.log(dioAccount.seeExtract());
  console.log();
  console.log();
}


presents(company, 100000, 150000, 50000);
presents(person, 50000, 30000);
presents(dioAcount10, 1200, 605);
