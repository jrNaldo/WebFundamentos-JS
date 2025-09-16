let x = [10]
let y = {n: 10}
const mudaX = x => {
    x.push(11)
    console.log("x interno ",x)
}

const mudaY = obj => obj.n++

mudaX(x)

console.log("X externo ", x)

mudaY(y)
console.log(y)