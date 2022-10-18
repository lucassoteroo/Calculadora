export default class Tela {

    constructor(
        private elemento: HTMLDivElement | null = document.querySelector("#values")
    ) {
        this.telaValor = '0';
    }

    set telaValor(valor: string) {
        if (valor.toString().length > 12) {
            valor = 'ERRO'
        }
        if (this.elemento) {
            this.elemento.innerHTML = valor.toString().replace(",", ".");
        }
    }

    get telaValor(): string {
        return this.elemento ? this.elemento.innerHTML : '0';
    }
}