//estrutura basica

/*const samuel = {
    nome: 'samuel oliveira',
    idade: 17,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`)
    }
}

samuel.descrever()*/

//posso adicionar ou remover elementos dinamicamente

/*samuel.altura = 1.70
delete samuel.nome

console.log(samuel)*/

//classes

class Pessoa {
    nome;
    idade;
    
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos`)
    }
}

function compPessoa(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`)
    } else if(p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`)
    }else{
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`)
    }
}

const samuel = new Pessoa('samuel', 17)
const igor = new Pessoa('igor', 19)

compPessoa(samuel, igor)