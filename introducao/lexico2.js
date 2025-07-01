let x = 10
x = "uma string"
console.log(x)
let msg = `uma "string"`
console.log(msg)

function teste(){
    console.log(this)
}
const teste2 = () => {
    console.log("teste 2")
    console.log(this)
}
teste()
const obj = {
    n: 0,
    teste,
    teste2

}
obj.teste()
obj.teste2()