//Faça um programa para calcular o valor de uma viagem.

/*Você tera 5 variaveis. sendo elas:
    1 - preço do etanol
    2 - preço da gasolina
    3 - o tipo de combustivel que está no seu carro
    4 - gasto medio de combustivel do carro por km
    5 - distancia em km da viagem

imprima o valor que será gasto para fazer a viagem*/

var Gfuel = 5.79
var Efuel = 3.64
var kmpl = 10
var tour = 1500
var tipoFuel = 'Etanol'

var calcG = (tour / kmpl) * Gfuel
var calcE = (tour / kmpl) * Efuel

if (tipoFuel === 'Gasolina'){
    console.log("Abastecendo com gasolina voce vai gastar R$" + calcG.toFixed(2))
} else if (tipoFuel === 'Etanol'){
    console.log("Abastecendo com Etanol voce vai gastar R$" + calcE.toFixed(2))
}
