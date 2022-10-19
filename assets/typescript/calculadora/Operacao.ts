import { OperacaoOpcoes } from "../interface/OperacaoOpcoes";

export default class Operacao {

    private onCalculado: any;

    constructor(
        options: OperacaoOpcoes,
        private operacao: string[] = []
    ) {
        this.onCalculado = options.onCalculado;
    }

    add(valor: string): number {
        if (this.operacao.length === 3) {
            this.calcular()
        }
        return this.operacao.push(valor);
    }

    resultado(): string {
        let resultado: string = '0';
        try {
            resultado = (eval(this.operacao.join(''))).toString();
        } catch (err) {
            resultado = 'Erro';
        }
        return resultado;
    }

    calcular(): void {
        let resultado = this.resultado();
        if (resultado.length > 12) {
            resultado = resultado.substr(0, 12);
        }
        this.operacao = [resultado];
        this.onCalculado(resultado);
    }

    get length(): number {
        return this.length
    }

}