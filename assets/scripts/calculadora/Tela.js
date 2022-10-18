export default class Tela {
    constructor(elemento = document.querySelector("#values")) {
        this.elemento = elemento;
        this.telaValor = '0';
    }
    set telaValor(valor) {
        if (valor.toString().length > 12) {
            valor = 'ERRO';
        }
        if (this.elemento) {
            this.elemento.innerHTML = valor.toString().replace(",", ".");
        }
    }
    get telaValor() {
        return this.elemento ? this.elemento.innerHTML : '0';
    }
}
//# sourceMappingURL=Tela.js.map