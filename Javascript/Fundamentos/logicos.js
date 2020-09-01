/* || -> OU , && -> E, !!() converter para boolean
*/

function compras(salario1, salario2) {
    const comprarPizza = salario1 || salario2
    const comprarTV = salario1 && salario2
    //const comprarTV32 = !!(salario1 ^ salario2) // bitwise xor
    const comprarTV32 = salario1 != salario2
    const manterSaudavel = !comprarPizza 
    return {comprarPizza, comprarTV, comprarTV32, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(false, true))
console.log(compras(true, false))
console.log(compras(false, false))