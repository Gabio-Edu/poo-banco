import { Banco } from "./banco";
import { Conta } from "./conta";

const banco = new Banco();

export function cadastrarConta(){
    let numero : string = crypto.randomUUID();
    let titular : string = prompt('Digite o titular da conta:')!;
    let conta = new Conta(numero, titular);
    banco.cadastrar(conta);
    alert('Conta cadastrada com sucesso: ' + numero);
}

export function fazerSaque(){
    let numero : string = prompt('Digite o número da conta:')!;
    let conta = banco.buscar(numero);
    if(conta){
        let valor : number = Number(prompt('Digite o valor do saque:'))!;
        conta.sacar(valor);
        alert('Pode entregar o valor: ' + valor);
    }else{
        alert('Conta não encontrada');
    }
}

export function fazerDeposito(){
    let numero : string = prompt('Digite o número da conta:')!;
    let conta = banco.buscar(numero);
    if(conta){
        let valor : number = Number(prompt('Digite o valor do depósito:'))!;
        conta.depositar(valor);
        alert('Depósito realizado com sucesso');
    }else{
        alert('Conta não encontrada');
    }
}

export function fazerTransferencia(){
    let numero : string = prompt('Digite o número da conta:')!;
    let conta = banco.buscar(numero);
    if(conta){
        let valor : number = Number(prompt('Digite o valor da transferência:'))!;
        let numeroDestino : string = prompt('Digite o número da conta destino:')!;
        let contaDestino = banco.buscar(numeroDestino);
        if(contaDestino){
            conta.transferir(valor, contaDestino);
            alert('Transferência realizada com sucesso');
        }else{
            alert('Conta destino não encontrada');
        }
    }else{
        alert('Conta não encontrada');
    }
}

export function verificarSaldo(){
    let numero : string = prompt('Digite o número da conta:')!;
    let conta = banco.buscar(numero);
    if(conta){
        alert('Saldo atual: ' + conta.getSaldo());
    }else{
        alert('Conta não encontrada');
    }
}