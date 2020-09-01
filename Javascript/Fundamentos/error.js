function tratarError(erro){
    throw 'Arrumando...'
}

function imprimiNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e){
        tratarError(e)
    } finally{
        console.log('final')
    }
    
}

const obj = { nome: 'Rafael' }
imprimiNomeGritado(obj)
