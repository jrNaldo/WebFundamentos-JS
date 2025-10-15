//Factory
const cachorroProto = {
    latir(){
        console.log(this.name, "está latindo")
    },
    andar(distancia){
        this.posicao += distancia
        console.log(this.name, 'andou', distancia,"m")
    }  
}
function criarCachorro(name){
    let posicao = 0
    const obj = {
        name,
        get posicao(){
            console.log(`Atual posiçao do ${this.name} é: ${posicao}`)
            return posicao
        },
        set posicao(newPosition){
            console.log(`A nova posicao de ${this.name} é ${newPosition}`)
            posicao = newPosition
            return newPosition
        } 
    }

    Object.setPrototypeOf(obj, cachorroProto)
    return obj
}
let dog1 = criarCachorro("dog1")
let dog2 = criarCachorro("dog2")
// ES5
function Animal(tipo, especie){
    if(this instanceof Animal){
        if(tipo) this.tipo = tipo
        if(especie) this.especie = especie
    }else{
        throw new Error("Animal must be crated with new operator")
    }
}


Animal.prototype.obterTipo = function(){
    return this.tipo
}

Animal.prototype.obterEspecie = function(){
    return this.especie
}
Animal.prototype.tipo = "desconhecido"
Animal.prototype.especie = "desconhecido"

function Cachorro(n){
    this.nome = n
    Animal.call(this, 'mamifero')
    // this.constructor = Cachorro
    this.comer = function(){
        return console.log(`${this.nome} esta comendo`)
    }
}
Cachorro.prototype = new Animal()
Cachorro.prototype.latir = function(){
    return console.log(`${this.nome} esta latindo`)
}
Cachorro.prototype.constructor = Cachorro

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
}

AnimalC.prototype.especie = "desconhecido"
AnimalC.prototype.tipo = "desconhecido"
AnimalC.prototype.obterStr = function(){
    return `${this.tipo} de nome ${this.nome} é da especie ${this.especie}`
}
AnimalC.prototype.obterTipo = function(){
    return this.tipo
}
AnimalC.prototype.obterEspecie = function(){
    return this.especie
}

class GatoC extends AnimalC{
    constructor(nome){
        super("mamifero","malhado") // Chama a função construtora, passando seus parametros
        this.nome = nome
        this.comer = function(){
            console.log(`${this.nome} esta comendo`)
        }
    }
}

class BoiC extends AnimalC{
    constructor(nome){
        super("mamifero",'nelori')
        this.nome = nome
    }
}

let vaca = new AnimalC("mamifero", "Nelori")
let boi = new BoiC("Vinganca")
let gatoC = new GatoC("Mia")

console.log(Animal.prototype)
console.log(AnimalC.prototype)