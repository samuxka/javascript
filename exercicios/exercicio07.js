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

    classimc(){
        const imc = this.calcimc()

        if (imc < 16.9) {
            return "Cuidado!! Você está muito abaixo do peso"
        } else if (imc >= 17 && imc <= 18.4) {
            return "Você tem está abaixo do peso"
        } else if (imc >= 18.5 && imc <= 24.9) {
            return "Você está no peso normal"
        } else if (imc >= 25 && imc <= 29.9) {
            return "Cuidado! Você está acima do peso"
        } else if (imc >= 30 && imc <= 34.9) {
            return "Cuidado!! Você está com obeside grau 1"
        } else if (imc >= 35 && imc <= 40) {
            return "Cuidado!! Você está com obeside grau 2"
        } else {
            return "Cuidado!! Você está com obeside grau 3"
        }

    }
}

const samuel = new pessoa('Samuel', 150, 1.70)
console.log(samuel)
console.log(samuel.classimc())