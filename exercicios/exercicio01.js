var nome = 'Samuel'
var nota1b = 4 
var nota2b = 5
var nota3b = 2

var calc = (nota1b + nota2b + nota3b) / 3

if (calc >= 5){
    console.log("Olá " + nome + ", parabens você foi aprovado! A sua nota foi " + calc.toFixed(1))
}else {
    console.log("Olá " + nome + ", Você foi reprovado! A sua nota foi " + calc.toFixed(1))
}