import { cadastrarConta, fazerDeposito, fazerSaque, fazerTransferencia, verificarSaldo } from "./operacoes";

let op : number = 1;

while(op!=0){
    op = Number(prompt('Digite a opção desejada:\n1 - Cadastrar conta\n2 - Fazer saque\n3 - Fazer depósito\n4 - Fazer transferência\n5 - Verificar saldo\n0 - Sair'))!;
    switch(op){
        case 1:
            cadastrarConta();
            break;
        case 2:
            fazerSaque();
            break;
        case 3:
            fazerDeposito();
            break;
        case 4:
            fazerTransferencia();
            break;
        case 5:
            verificarSaldo();
            break;
        case 0:
            alert('Obrigado por usar nosso sistema');
            break;
        default:
            alert('Opção inválida');
            break;
    }
}