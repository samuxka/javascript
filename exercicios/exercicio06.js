//carros

class carro{
    marca;
    cor;
    gmfuel;

    constructor(marca, cor, gmfuel){
        this.marca = marca;
        this.cor = cor;
        this.gmfuel = gmfuel;
    }

    calcgasto(distancia, precofuel){
        return precofuel * (distancia / this.gmfuel)
    }

}

const civic = new carro('Honda', 'Vinho', 15)
console.log(civic.calcgasto(1000, 13).toFixed(2))