export default class Operacao {

    constructor(
        private operacao: string[] = []
    ) {

    }

    add(valor: string): number {
        return this.operacao.push(valor);
    }

    get length(): number {
        return length
    }

}