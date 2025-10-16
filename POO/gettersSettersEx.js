class Produto{
    #itensEstoque
    #contador
    constructor(nome, itensEstoque){
        this.nome = nome
        this.#contador = 0
        this.#itensEstoque = (typeof itensEstoque === "number" && itensEstoque > 0) ? itensEstoque : 0
    }
    get itensEstoque(){
        console.log(`Compras de ${this.nome} realizadas com sucesso: ${this.#contador}`)
        return this.#itensEstoque
    }
    comprar(qtd){
        if(qtd > this.#itensEstoque){
            throw new Error("Quantity is greater than stock")
            return
        }
        if(typeof qtd !== "number" || qtd <= 0){
            throw new Error("Valor of parameter: x <= 0 or NaN")
            return
        }
        this.#contador++
        this.#itensEstoque -= qtd
    }
    addEstoque(qtd){
        if(typeof qtd === "number" && qtd > 0){
            this.#itensEstoque += qtd
        }else{
            throw("Parameter invalid")
        }
    }
}
const reguas = new Produto("regua",30)

console.log(reguas)
reguas.addEstoque(20)
reguas.addEstoque(20)
reguas.addEstoque(20)
reguas.comprar(10)
reguas.comprar(10)
reguas.comprar(10)
console.log(reguas.itensEstoque)
console.log(reguas)