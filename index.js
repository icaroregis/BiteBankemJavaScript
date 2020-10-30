import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 12311122237);
const cliente2 = new Cliente("Alice", 88811122237);

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrenteRicardo._saldo = 0;
contaCorrenteRicardo.depositar(500);

const contaCorrenteAlice = new ContaCorrente(102, cliente2);
contaCorrenteAlice._saldo = 0;

contaCorrenteRicardo.transferir(200, contaCorrenteAlice);

console.log(cliente1);
console.log(cliente2);
console.log(ContaCorrente.numeroDeContas);
