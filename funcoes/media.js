

function calcularMedia(){
    let media = 0
    console.table(arguments)
    
    for(let i = 0; i < arguments.length; i++){
        if(typeof arguments[i] === "string"){ 
           throw Error("Somente numeros")

        }else if(typeof arguments[i] === "undefined"){
            throw Error("De valores ao parametro")

        }
        media += arguments[i]
    }
    return media / arguments.length
}
console.log(calcularMedia())