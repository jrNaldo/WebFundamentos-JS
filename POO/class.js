// ES5
function Animal(tipo, especie){
    if(this instanceof Animal){
        if(tipo) this.tipo = tipo
        if(especie) this.especie = especie
    }else{
        throw new Error("Animal must be crated with new operator")
    }
}

function Cachorro(n){
    this.nome = n
    Animal.call(this, 'mamifero')
    // this.constructor = Cachorro
}

Cachorro.prototype = new Animal("Mamifero", "Caramelo")
Cachorro.prototype.constructor = Cachorro
Animal.prototype.obterTipo = function(){
    return this.tipo
}

Animal.prototype.obterEspecie = function(){
    return this.especie
}
Animal.prototype.tipo = "desconhecido"
Animal.prototype.especie = "desconhecido"


let gato = new Animal('mamifero','felino')
let cachorro= new Animal("mamifero")
let cobra = new Animal("reptil")
let peixe = new Animal()
let dog = new Cachorro("Rex")

// ES6
// Construtora
class AnimalC{
    constructor(tipo, especie){ // Funcao construtora
        if(tipo) this.tipo = tipo
        if(especie) this.especie = especie
    }
    // Metodos
    obterTipo(){ 
        return this.tipo
    }

    obterEspecie(){
        return this.especie
    }

    obterStr(){
        return `${this.tipo} de nome ${this.nome} é da especie ${this.especie}`
    }
}


class GatoC extends AnimalC{
    constructor(nome){
        super("mamifero","malhado") // Chama a função construtora, passando seus parametros
        this.nome = nome
    }
}

class BoiC extends AnimalC{
    constructor(nome){
        super("mamifero",'nelori')
        this.nome = nome
    }
}

AnimalC.prototype.especie = "desconhecido"
AnimalC.prototype.tipo = "desconhecido"

let vaca = new AnimalC("mamifero", "Nelori")
let boi = new BoiC("Vinganca")
let gatoC = new GatoC("Mia")

console.log(Animal.prototype)
console.log(AnimalC.prototype)