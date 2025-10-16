class Animal{
    constructor(tipo){
        if(this.constructor === Animal){
            throw new Error("Animal is a abstract class")
        }
        if(tipo) this.tipo = tipo
    }

    comer(){
        throw new Error("Method 'comer()' must be implemented")
    }
}

class Gato extends Animal{
    constructor(n){
        super("mamifero")
        if(n) this.nome = n
    }

    comer(){
        console.log(`${this.nome} está comendo`)
    }
}
let gato = new Gato("Mingau")