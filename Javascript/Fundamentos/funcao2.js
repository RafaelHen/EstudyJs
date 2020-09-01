// armazenando uma função em uma variável

const imprimirSoma = function (a,b){
        console.log(a+b)   
}
imprimirSoma(2,3)

// Armazenando um funcao arrow em uma variavel 
const soma = (a,b) => {
    return a + b    
}

console.log(soma(2,3))

// Retorno implícito
const subtracao = (a,b) => a-b

console.log(subtracao(20,5))


const maiusculo = texto => console.log(texto.toUpperCase())

maiusculo('kkkkkkkkkkkkkk só to fazendo um teste porraaa')