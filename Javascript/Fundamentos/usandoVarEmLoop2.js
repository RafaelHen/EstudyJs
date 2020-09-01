const list = []

for (var i = 0; i < 10; i++){
     list.push(function(){
         console.log(i)
     })
}
console.log(list)

