import DioAccount10 from '../class/DioAccount10.class';
import DioAccountCompany from '../class/DioAccountCompany.class';
import DioAccountPerson from '../class/DioAccountPerson.class';
import { printInfo } from './print-info.helper';

export const presents = (
  dioAccount: DioAccountPerson | DioAccountCompany | DioAccount10,
  deposit: number,
  withdraw: number,
  loan?: number,
  ): void => {
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
