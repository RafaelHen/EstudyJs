function getInteiroAleatorioEntre(min,max){
    const valor = Math.random() * (min - max) + min
    return Math.floor(valor)

}

let opcao = 0

/* enquanto a expressão for verdadeira, continue. Caso seja falsa, pare!*/
while (opcao != -1){
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até a próxima!')