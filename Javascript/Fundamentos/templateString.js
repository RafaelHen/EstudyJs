const nome = 'Rafael'
const contatenacao = 'Olá ' + nome + '!'
const teste = `
    Olá
    ${nome} !`
console.log(teste, contatenacao)

// expressões... Expressões feitas em JavaScritp se usa ${}, dolar e chave.
// A função é quase a mesma que a lambda tem em python. OBS: SÓ FUNCIONAM COM ``. CRASE.
console.log(`Olá, teste de expressões: ${1 + 1}`)

const up = texto => texto.toUpperCase()

console.log(`Ei... ${up('Cuidado!!!')}`)

