const nome = () => "Naldo"

function teste(str, n){
    console.log(this.name)
    console.log(str, n)
}

teste.call({name: "Maria", num: 20}, "string", nome())
// O call muda o this, por exemplo, a funcao acima o this e esse
teste.apply({name: "Naldo"}, [" de Melo", 28])
teste.call({name: "Joao"}, ...[" de Melo", 20])

const teste2 = teste.bind({name: "Joana"})

teste2("Joaquina", 30)
teste("Manuela", 40)

document.addEventListener("click", teste2)