// function latir(){
//     return 
// }
function miar(){
    return console.log(`${this.name} fala miau`)
}

const dog = {
    name: "rex",
    falar (){
        console.log(`${this.name} fala au au`)
    }
}

const cat = {
    name: "miu",
    falar (){
        miar.call(this)
    }
}
dog.falar()
cat.falar()
