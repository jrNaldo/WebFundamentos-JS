const teste = (function(n){
    return function testeInterno(){
       return console.log("testeInterno ", ++n)
    }
})(10)

console.log(teste)

const testeInerno = teste()
teste()
teste()
teste()
teste()
testeInerno