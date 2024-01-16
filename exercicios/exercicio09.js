/*var num = [0,1,2,3,4,5,6,7,8,9,10]

for (let i = 0; i < num.length; i++) {
    const numero = num[i]
    if (numero % 2 === 0) {
        console.log(numero)
    }
    
}*/

const numerospares = []

for (let i = 0; i < 10; i = i+2) {
    numerospares.push(i)
}

console.log(numerospares)