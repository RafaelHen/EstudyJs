const list = []

for (let i = 0; i < 10; i++){
     list.push(function(){
         console.log(i)
     })
}
list[2]()
list[3]()