/*Faça um programa para calcular o valor de uma viagem.

Você tera 3 variaveis . sesndo elas:
    1 - Preço do combustivel;
    2 - Gasto medio de combustivel do carro por Km;
    3 - Distancia em Km da viagem

imprima no console o valor que será gasto de combusstivel para realizar esta viagem.*/

const fuel = 5.79
const kmpl = 13 /*Km por litro*/
const dist = 1700 /*Distancia*/

var calc = (dist / kmpl) * fuel

console.log(calc.toFixed(2))