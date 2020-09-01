/* Array - Lista em python */

const valores = [8.7, 8.9, 6.3, 6.5]
console.log(valores[0],valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length) // diz quantos elementos tem em um array

valores.push({id: 3}, false, null, 'teste') // adiciona novos elementos num array
console.log(valores)

console.log(valores.pop()) // tira o ultimo valor do array e imprime. Igual python
delete valores[0]
console.log(valores)