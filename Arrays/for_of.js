const arr = [15 ,2,3]
const obj = {
    nome: "Maria",
    Idade: 28,
    email: 'maria@server.com'
}

for(let prop in obj){
    console.log(prop)
    console.log(obj[prop])
}
for(n of arr){
    console.log(n)
}