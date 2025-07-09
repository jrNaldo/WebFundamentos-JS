let arr = [1,3,5,7,9]

let teste = arr.push(11,13, true, "ola mundo")
console.table(teste)
console.table(arr)

let ultItem = arr.pop()
console.table(ultItem)
console.table(arr)
let item1 = arr.shift()
console.table(arr)
console.table(item1)

teste = arr.unshift(4,5,6)
console.table(teste)
console.table(arr)

let arr2 = arr.slice(2,4) // Recorta uma parte da array, indica pelo indice

console.table(arr2)
console.table(arr)

let arr3 = arr.splice(2, 4, "ola") // Retorna todos os elementos removidos a partir do indice escolhido, e dps da 2 virgula vc add os elementos que voce quiser

console.table(arr)
console.table(arr3)
