
function boaNoticia(nota){
    if(nota >= 7){
        console.log('Hoje é seu aniversário! ')
    }else{
        console.log("Hoje não é seu aniversário.")
    }
}

boaNoticia(2.8)
boaNoticia(8.8)

function seForVerdade(valor){
    if(valor){
        console.log('É verdade que...' + valor)
    }
}

seForVerdade(NaN)