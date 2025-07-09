const arr = [1,5,10, "ola", false]

let soNum = arr.some(function(elemento){
    return typeof elemento === "number"

})
let arr1 = arr.filter(function(el, i, array){
    return typeof el === "number"
})

arr.forEach(function(el,i,arr){
    console.log(i," : ", el)
})
let arr2 = arr1.map(function(el,i,arr){
    return el * el
})
console.log(arr1)
console.log(arr2)
console.table(soNum)