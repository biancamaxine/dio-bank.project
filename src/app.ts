import { cnpj, cpf } from 'cpf-cnpj-validator';

import DioAccount10 from './class/DioAccount10.class';
import DioAccountCompany from './class/DioAccountCompany.class';
import DioAccountPerson from './class/DioAccountPerson.class';
import { presents } from './helpers/presents.helper';

const company = new DioAccountCompany('Industrias Oscorp', cnpj.generate(), 50000);
const person = new DioAccountPerson('Normam Osborn', cpf.generate());
const dioAcount10 = new DioAccount10('Peter Parker');

presents(company, 100000, 150000, 50000);
presents(person, 50000, 30000);
presents(dioAcount10, 1200, 605);
