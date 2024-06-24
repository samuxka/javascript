const {gets} = require('./aula')

const numerosSorteados = []

for(let i=0;i<5;i++){
    const numeroSorteado = gets()
    numerosSorteados.push(numeroSorteado)
}

const pessoa = {
    nome: 'samukinha'
}

print(gets())
print(gets())
print(gets())
print(gets())
print(gets())