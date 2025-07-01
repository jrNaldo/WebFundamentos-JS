

function calcularMedia(){
    let media = 0
    
    for(let i = 0; i < arguments.length; i++){
        if(typeof arguments[i] === "string"){
            console.log("Digte apenas numeros")

        }else if(typeof arguments[i] === "undefined"){
            console.log("Coloque valores nos parametros")

        }
        media += arguments[i]
    }
    return media / arguments.length
}
console.log(calcularMedia(2,2,2))