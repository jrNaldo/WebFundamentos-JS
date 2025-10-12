function teste(n1, n2 , ...nS){ // Rest Operator - Junta os elementos
    console.log(n1)
    console.log(n2)
    console.log(nS)

    console.log(typeof nS)

}
// Spread Operator - Divide os elementos
const nums = [1,2,3,4,5]
console.log(...nums)
teste(1,2,3,4,5)