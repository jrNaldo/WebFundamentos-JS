const pessoa = {nome: "Dani", sobrenome: "Elias", empresa: "Serliv"}
const {nome, sobrenome, empresa: company, idade = null} = pessoa
console.log(`${nome} ${sobrenome} com ${idade} anos e dono da ${company}`)


const pessoa2 = {nome: "Pedro", sobrenome: "Melo", idade: 50}
const {nome: nome2, ...restante} = pessoa2
console.log(nome2, restante)

function dizOla({nome, sobrenome = "" }){
    const nomeCompleto = sobrenome ? `${nome} ${sobrenome}`: nome
    return console.log(`Ola ${nomeCompleto} `)
}
const pessoa3 = {nome: "Joao", idade: 20}
dizOla({nome: "Maria",sobrenome: "Duarte"})
dizOla(pessoa3)