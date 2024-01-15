class pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome
        this.peso = peso
        this.altura = altura
    }

    calcimc(){
        return this.peso / (this.altura * this.altura)
    }
}

const samuel = new pessoa('Samuel', 65, 1.70)
console.log(samuel)
console.log(samuel.calcimc)