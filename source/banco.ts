import { Conta } from "./conta";

export class Banco{
    private contas:Array<Conta>;

    constructor(){
        this.contas = [];
    }

    public cadastrar(conta:Conta){
        this.contas.push(conta);
    }

    public buscar(numero:string):Conta|undefined{
        let conta = this.contas.find((c)=>c.getNumero() == numero);
        return conta;
    }

}