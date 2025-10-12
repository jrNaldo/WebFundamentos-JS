// Mostra que é muito mais facil criar funções que retorne objetos, para facilitar correções, como se fossem funções construtoras
function criarCachorro(name){
    let posicao = 0
    return  {
        name,
        get latir(){
            console.log(this.name, "está latindo")
        },
        andar(distancia){
            posicao += distancia
            console.log(this.name, 'andou', distancia,"m")
        },
        // Usar a palavra get transforma uma função em um parametro de objeto normal, podendo ser chamado normalmente, obj.posicao
        // O get não funciona com metodos que necessitam de parâmetros
        get posicao(){
            console.log(`Atual posiçao do ${this.name} é: ${posicao}`)
            return posicao
        }
    }
}

const rex = criarCachorro("Rex")
const toto = criarCachorro("Toto")
rex.latir
rex.andar(10)
rex.andar(5)
rex.andar(2)
toto.andar(20)
toto.andar(-10)

console.log(rex.posicao)
console.log(toto.posicao)
// toto.posicao()