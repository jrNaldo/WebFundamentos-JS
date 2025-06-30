console.log("Hello World")
console.log("JS funcionando")
const n1 = function(v1,v2){
    return v1 + v2
}
console.log(n1(2,3))
const arr = [[1,2,3], [12,312,333], [11,22,34,55]]
for(let i = 0; i < arr.length;i++){
    const arrNum = arr[i]
    console.table(arrNum)
    for(let j = 0; j < arrNum.length;j++){
        console.table(arrNum[j])
    }
}