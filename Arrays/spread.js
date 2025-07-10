const arr = [1,2,3]
const arr2 = [4,5,6]
function sum(){
    console.log(arguments)
    console.log(arguments.length)
}
sum(1,2,3)
sum(arr)
sum(...arr) // ... - spread operator - Vi fazer aparecer as virgulas dos parametros do array, nao funciona em todos os browser
console.log("______________________________")
arr.push(...arr2)
console.log(arr)
console.log(arr2)