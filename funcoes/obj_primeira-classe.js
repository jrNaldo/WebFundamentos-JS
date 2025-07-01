function fn(cb){
    console.log("Executar ação de callback")
    console.log(typeof cb)
    typeof cb === "function" && cb()
}
function callback(){
    console.log("função passada por parametro")
}
fn(callback())

const obj = {
    callback
}
obj.callback()

function fn2(n1){
    return function(n2){
        return n1 * n2
    }
}

const funcao2 = fn2(10)
const multi = funcao2(2)
console.log(multi)

function fn3(){
    fn3.count++
    return function (){
        console.log("Função retornada por parametro")
    }
}

fn3.count = 0
const funcao3 = fn3()
const funcao3a = fn3()
const funcao3b = fn3()
const funcao3c = fn3()
const funcao3d = fn3()
const funcao3e = fn3()
funcao3()

console.log(fn3.count)