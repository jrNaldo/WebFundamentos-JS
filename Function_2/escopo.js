const str = 'global str'

function teste(str){
    console.log("----------------- this de teste")
    console.log(this)
    // console.log(str)

    setTimeout(() => {
        console.log("-----------------")
        console.log(this)   
    },2000)
}

const teste2 = () => {
    console.log("Arrow function")
    console.log(this)
}

const obj = {
    foo: "bar",
    teste
}

obj.teste()
// teste2()