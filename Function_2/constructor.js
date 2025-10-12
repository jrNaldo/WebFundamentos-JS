// Diferente do exemplo da função factory, a costrutora precisa começar com a letra maiúscula, e ser chamada com new
function Cachorro(name){
    let posicao = 0
    this.name = name
    this.latir = () => console.log(`${this.name} está latindo`)
    this.andar = distancia => {
        posicao += distancia
        console.log(`${this.name} andou ${distancia} metros`)
    }
    this.posicao = () => console.log(`A posição de ${this.name} é ${posicao}m`)
}

const rex = new Cachorro("Rex")
const toto = new Cachorro("Toto")

rex.latir()
rex.andar(120)
rex.posicao()
console.log(rex.name)

toto.latir()
toto.andar(20)
toto.andar(20)
toto.andar(20)
toto.posicao()