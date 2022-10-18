import DataHora from "./DataHora.js";
import Tela from "./Tela.js";

export default class CalculadoraControle {

    constructor(
        private tela = new Tela(),
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

    addNumero(numero: number): void {
        this.tela.telaValor = numero.toString();
    }
}