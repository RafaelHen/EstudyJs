const peso1 = 3.0
const peso2 = Number('2.0')

console.log(peso1, peso2)

// vendo se é valor inteiro ou não
console.log(Number.isInteger(peso1))

// Controle de casas decimais .toFixed(numero de cassas decimais)

const avaliacao1 = 9.879
const avaliacao2 = 2.879

const media = avaliacao1 + avaliacao2 * 88

console.log(media.toFixed(1))


// converter valores numerico para string .toString
console.log(media.toString(2)) // em binário
console.log(typeof media)