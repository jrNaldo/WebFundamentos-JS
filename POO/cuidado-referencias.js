class Carrinho{
    #produtos

    constructor(){
        this.#produtos = []
    }
    add(produto){
        this.#produtos.push(produto)
    } 
    get produtos(){
        return [...this.#produtos]
        // Retornando uma nova array, toda vez que a class seja chamada
    }   
}

const carrinho = new Carrinho()
carrinho.add("caneta")
carrinho.add("camisa")
console.log(carrinho.produtos)
carrinho.add("lapis")
console.log(carrinho.produtos)

const ref = carrinho.produtos
console.log(ref)
ref.push("borracha")
console.log(carrinho.produtos)
ref.length = 0
console.log(ref)
console.log(carrinho.produtos)