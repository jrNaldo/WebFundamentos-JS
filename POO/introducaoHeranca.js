// Como funciona por debaixo dos panos
function Animal(tipo){
    if(tipo) this.tipo = tipo
}


Animal.prototype.obterTipo = function(){
    return this.tipo
}
Animal.prototype.tipo = "desconhecido"

function Gato(nome, tipo){
    this.nome = nome
    Animal.call(this, tipo)
    // this.constructor = Gato
    // cria uma propriedade que nao seja mostrada em um loop, por exemplo
    Object.defineProperty(Gato.prototype, "constructor", {
        value: Gato,
        enumerable: false
    })
}

Gato.prototype = new Animal()

let rex = new Gato("Rex","mamifero" )
console.log(rex)


for(let prop in rex){
    if(rex.hasOwnProperty(prop)) console.log(prop)
}

console.log(rex instanceof Object) // Consegue mostrar pelos elementos da cadeia de prototipos

console.log(Gato.prototype.isPrototypeOf(rex)) // Se o obj prototype é prototipo de rex

console.log(Object.getPrototypeOf(rex))// é um metodo de Object, que retorna o prototype de rex, ou de outro obj

function Cachorro(nome, tipo) {
    this.nome = nome
    Animal.call(this, tipo)
}

let lux = new Cachorro("Lux","Mamifero")
Cachorro.prototype = new Animal()
Cachorro.prototype.constructor = Cachorro