function Animal(tipo, especie){
    if(tipo) this.tipo = tipo
    if(especie) this.especie = especie
}
Animal.prototype.obterTipo = function(){
    return this.tipo
}

let gato = new Animal('mamifero','felino')
let cachorro= new Animal("mamifero")
let cobra = new Animal("reptil")
let peixe = new Animal()

let sapo = new Object({tipo: 'Anfibio'})
// gato.consoleLog()
Animal.prototype.obterEspecie = function(){
    return this.especie
}

Animal.prototype.tipo = "desconhecido"
Animal.prototype.especie = "desconhecido"
Animal.prototype.consoleLog = function(){
    return console.log(this.tipo, this.especie)
}
console.log(Animal.prototype.obterTipo.call(sapo))