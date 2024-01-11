//carros

class carro{
    marca;
    cor;
    gmfuel;

    construtor(marca, cor, gmfuel){
        this.marca = marca
        this.cor = cor
        this.gmfuel = gmfuel
    }
}

const civic = new carro('Honda', 'Vinho', 15)

console.log(civic)