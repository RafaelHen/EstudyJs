Number.prototype.entre = function (inicio,fim){
    return this >= inicio && this <= fim
}

const imprimirResultado = function(nota){
    if(nota.entre(9,10)){
        console.log('Quadro de honra')
    }else if(nota.entre(9, 7.99)){
        console.log('Aprovado')
    }else if(nota.entre(4, 6)){
        console.log('Reprovado')
    }else if(nota.entre(0, 3)){
        console.log('Muito ruim!')
    }
    console.log('fim')
}

imprimirResultado(10)