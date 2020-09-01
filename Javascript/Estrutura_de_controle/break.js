// o break e continue influenciam nos lanços for, while, switch. If não.
// Evitar o máximo uso do break. pois desvia o percurso. Break serve para pular fluxo. Ele pula para fora do bloco.

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5){
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums){
    if (y == 5) continue
    console.log(`${y} = ${nums[y]}`)
}