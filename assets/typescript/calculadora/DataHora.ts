export default class DataHora {

    constructor(
        private elementoData: HTMLDivElement | null = document.querySelector("#datetime > div:nth-child(2"),
        private elementoHora: HTMLTimeElement | null = document.querySelector("#datetime time")
    ) {
        this.renderizarDataHora();
        setInterval(() => this.renderizarDataHora(), 1000);
    }

    renderizarDataHora() {
        const dataAtual = new Date();
        const dia = dataAtual.getDate();
        const mes = dataAtual.toLocaleDateString("pt-BR", {
            month: "long"
        });
        const ano = dataAtual.getFullYear();
        const hora = dataAtual.getHours();
        const minuto = dataAtual.getMinutes().toString().padStart(2, '0');
        const doisPontos = dataAtual.getSeconds() % 2 === 0 ? ":" : " ";

        this.data = `${dia} ${mes} ${ano}`;
        this.hora = `${hora}${doisPontos}${minuto}`;
    }

    set data(valorData: string) {
        if (this.elementoData) {
            this.elementoData.innerHTML = valorData;
        }
    }

    set hora(valorHora: string) {
        if (this.elementoHora) {
            this.elementoHora.innerHTML = valorHora;
        }
    }
}