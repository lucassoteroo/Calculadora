export default class Operacao {
    constructor(options, operacao = []) {
        this.operacao = operacao;
        this.onCalculado = options.onCalculado;
    }
    add(valor) {
        if (this.operacao.length === 3) {
            this.calcular();
        }
        return this.operacao.push(valor);
    }
    resultado() {
        let resultado = '0';
        try {
            resultado = (eval(this.operacao.join(''))).toString();
        }
        catch (err) {
            resultado = 'Erro';
        }
        return resultado;
    }
    calcular() {
        let resultado = this.resultado();
        if (resultado.length > 12) {
            resultado = resultado.substr(0, 12);
        }
        this.operacao = [resultado];
        this.onCalculado(resultado);
    }
    get length() {
        return this.length;
    }
}
//# sourceMappingURL=Operacao.js.map