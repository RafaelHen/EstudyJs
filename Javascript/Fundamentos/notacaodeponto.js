const obj1 = {}
obj1.nome = 'Bola'
//bj1['nome'] = 'Bola2' *melhor de se utilziar*

console.log(obj1.nome)

function Object(nome){
    this.nome = nome
}

const obj2 = new Object('Cadeira')
const obj3 = new Object('Mesa')

console.log(obj2.nome)
console.log(obj3.nome)

console.log(obj1)