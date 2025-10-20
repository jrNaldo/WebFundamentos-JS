class Carrinho{
    #itens
    constructor(...itens){
        this.#itens = itens
    }
    addItens(...nomes){
        nomes.forEach(nome =>{
            this.#itens.push(nome.toLowerCase())
        })
    }
    get itens(){
        return [...this.#itens]
    }
    removerItem(nome){
        const indice = this.#obterIndice(nome)
        if(indice >= 0){
            this.#itens.splice(indice, 1)
        }
    }
    #obterIndice(n){
        return this.#itens.indexOf(n.toLowerCase())
    }
}

const carrinho = new Carrinho("aa", "bb","cc")
carrinho.addItens("Kfdkddk","kdkdk")
carrinho.removerItem("cc")
console.log(carrinho.itens)