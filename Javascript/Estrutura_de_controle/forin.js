/* O for in irá te dar o indice de cada elemento e não os valores */
/* Usar mais para Objetos*/


const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas){
    console.log(`Indice: ${i}, Notas = ${notas[i]}`)
}

const pessoa = {
    nome: 'Rafael',
    sobrenome: 'Lopes',
    idade: 20,
    peso: 75
}

for(let teste in pessoa){
    console.log(`${teste} = ${pessoa[teste]}`)
}