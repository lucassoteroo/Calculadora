import DataHora from "./DataHora.js";
import Operacao from "./Operacao.js";
import Tela from "./Tela.js";

export default class CalculadoraControle {

    constructor(
        private tela = new Tela(),
        private operacao = new Operacao()
    ) {
        new DataHora();
        this.eventosBotoes();
    }

    eventosBotoes(): void {
        document.querySelectorAll("#teclado button").forEach(elemento => {
            elemento.addEventListener("click", (evento: Event) => {
                const target = evento.target as HTMLButtonElement;
                switch (target.id) {
                    case "zero":
                    case "um":
                    case "dois":
                    case "tres":
                    case "quatro":
                    case "cinco":
                    case "seis":
                    case "sete":
                    case "oito":
                    case "nove":
                    case "dez":
                        this.addNumero(Number(target.dataset.valor));
                        break;
                    case "adicao":
                    case "subtracao":
                    case "multiplicacao":
                    case "divisao":
                        this.addOperador(target.dataset.valor as string);
                        break;

                    case "ponto":

                        break;

                    case "limpar":

                        break;

                    case "desfazer":

                        break;

                    case "porcentagemo":

                        break;

                    case "igual":

                        break;
                }
            });
        });
    }

    addOperacao(valor: string): void {
        this.operacao.add(valor);
        console.log(this.operacao.length);
    }

    addNumero(numero: number): void {
        this.tela.telaValor = numero.toString();
        this.addOperacao(numero.toString());
    }

    addOperador(operador: string): void {
        this.operacao.add(operador);
    }
}