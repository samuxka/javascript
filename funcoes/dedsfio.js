var nome = 'Samuel'

function calcimc(peso, altura) {
    return peso / (altura * altura)
}

function classimc(imc) {
    if (imc < 16.9) {
        return "Olá " + nome + ", Cuidado!! Você está muito abaixo do peso"
    } else if (imc >= 17 && imc <= 18.4) {
        return "Olá " + nome + ", Você tem está abaixo do peso"
    } else if (imc >= 18.5 && imc <= 24.9) {
        return "Olá " + nome + ", Você está no peso normal"
    } else if (imc >= 25 && imc <= 29.9) {
        return "Olá " + nome + ", Cuidado! Você está acima do peso"
    } else if (imc >= 30 && imc <= 34.9) {
        return "Olá " + nome + ", Cuidado!! Você está com obeside grau 1"
    } else if (imc >= 35 && imc <= 40) {
        return "Olá " + nome + ", Cuidado!! Você está com obeside grau 2"
    } else {
        return "Olá " + nome + ", Cuidado!! Você está com obeside grau 3"
    }
}

(function main() {
    var peso = 65
    var altura = 1.70

    var imc = calcimc(peso, altura)
    console.log(classimc(imc))
})();