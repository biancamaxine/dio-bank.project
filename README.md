
# POO TypeScript
## Desenvolvendo o DIO Bank
* **Professora:** Nathally Souza
* **Tecnologias:** TypeScript
___
### Como rodar o projeto
1. Clone o repositório;
2. Instale as dependências;
```
$ npm install
$ yarn install
```
3. Execute o projeto
```
$ npm run dev
$ yarn dev:server
```

## Desafios

### DioAccount
- [x] Implementar os métodos de depósito (`deposit`) e saque (`withdraw`) na classe *"DioAccount"*;
- [x] O valor do saldo deve ser alterado, de acordo com o valor informado para depósito;
- [x] Apenas contas com o status `true` e saldo (`balance`) maior ou igual ao valor solicitado podem fazer saques;

### DioAccountCompany
- [x] Implementar o método de empréstimo (`getLoan`) na classe *"DioAccountCompany"*;
- [x] O valor do saldo deve ser acrescido, de acordo com o valor informado para empréstimo;
- [x] Apenas contas com o status `true` podem fazer empréstimo;

### DioAccount10
- [X] Criar um novo tipo de conta a partir da *"DioAccount"*:
- [ ] Esta conta não deve receber novos atributos;
	- Um atributo `type` foi inserido para facilitar na impressão dos métodos das instâncias.
- [x] Esta conta terá um método de depósito, que acresce 10 a mais ao valor informado para depósito. (Ex: Um depósito de 100, será de 110 no final);

### General
- [x] Todos os atributos de qualquer conta devem ser privados
- [x] Os atributos `name` e `accountNumber` não podem ser alterados internamente ou externamente;
- [x] Criar instancias para cada um dos tipos de conta no `app.ts` e executar os métodos possíveis.
