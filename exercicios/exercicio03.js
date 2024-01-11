var valor = 100
var condPag = 'pix' //debito = 10%, a vista ou pix = 15%, / 2x =  n juros, > / 2x = preço + 10%

if (condPag === 'debito'){
    var calc = valor - (valor / 10)
    console.log("Na compra no debito você tem direito a 10% de desconto!\na sua compra ficou no valor de R$" + calc)
}
if (condPag === 'divx'){
    var calc = valor + (valor / 10)
    console.log("dividindo acima de 2x, tem 10% de juros!\nO valor da sua compra é de R$" + calc)
}
if(condPag === 'creditoSJ'){
    console.log("O valor a sua compra é de R$" + valor)
}
if(condPag === 'dinheiro' || condPag === 'pix'){
    var perc = 15 / 100
    var calc = valor - (valor * perc)
    console.log("Comprando no dinheiro ou no pix você tem 10% de desconto!\nO valor da sua compra é de R$" + calc)
}