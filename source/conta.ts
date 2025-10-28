export class Conta{
    private numero:string;
    private titular:string;
    private saldo:number;

    public constructor(numero:string, titular:string){
        this.numero = numero;
        this.titular = titular;
        this.saldo = 0;
    }

    public depositar(valor:number){
        this.saldo += valor;
    }

    public sacar(valor:number){
        this.saldo -= valor;
        this.saldo -= this.calcularTaxa(valor);
    }

    private calcularTaxa(valor:number):number{
        let taxa = valor * 0.01;
        if(taxa>2){
            taxa = 2;
        }
        return taxa;
    }

    public transferir(valor:number, contaDestino:Conta){
        this.sacar(valor);
        contaDestino.depositar(valor);
    }

    public getSaldo():number{
        return this.saldo;
    }

    public getNumero():string{
        return this.numero;
    }

    public setNumero(numero:string){
        this.numero = numero;
    }


}