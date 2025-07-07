let arr = [4,5,6,4,66,20,24,6]

console.log(arr.indexOf(6)) // o indice do elemento
console.log(arr.lastIndexOf(6)) // Indica o ultimo indice do elemento

console.log(arr.includes(5))
console.log(arr.find(function(el){
    return el > 10
}))
console.log(arr.findIndex(function(el){
    return el > 10
}))