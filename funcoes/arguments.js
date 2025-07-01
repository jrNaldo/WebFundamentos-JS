function somarArr(arr){
    let total = 0;
    for(let i = 0; i < arr.length;i++){
        total += arr[i]
    }
    return total
}
console.log(somarArr([1,2,3,4]))

function somar1(){
    console.log(arguments)
    let total = 0
    for(let i = 0; i < arguments.length;i++){
        total += arguments[i]
    }
    return total
}
console.log(somar1(1,2,3,4))

const somar2 = function (){
    console.log(arguments)
    let total = 0
    for(let i = 0; i < arguments.length;i++){
        total += arguments[i]
    }
    return total
}
console.log(somar2(1,2,3,4))