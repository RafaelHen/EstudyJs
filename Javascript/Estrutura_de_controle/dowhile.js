function getInteiroAleatorio(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

opcao = -1

do{
    opcao = getInteiroAleatorio(-1, 2)
    console.log(`A opcao escolhida foi ${opcao}.`)
}while(opcao != -1)

console.log('Até a próxima!')