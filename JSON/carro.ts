class Carro {
    modelo: string;
    ano: number;
    cor: string;

    constructor(modelo: string, ano: number, cor: string) {
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }

    info() {
        const returnInfo = {
            modelo: this.modelo,
            ano: this.ano,
            cor: this.cor
        }

        return `${returnInfo.modelo} ${returnInfo.cor} ano ${returnInfo.ano}`;
    }
}


const car = new Carro('Tempra', 2001, 'branco');

console.log(car.info());