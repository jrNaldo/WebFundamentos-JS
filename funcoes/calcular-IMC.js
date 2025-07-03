function calcularIMC(p,h){
    if(p === undefined || h === undefined){
        throw Error("Necessita de dois parametros")
    }
    return p / (h*h)
}

function classificaImc(imc){
    if(imc < 16.9){
        return "Muito abaixo do peso"
    }else if( imc < 18.4){
        return "Abaixo do peso"
    }else if(imc < 24.9){
        return "Peso normal"
    }else if(imc < 29.9){
        return "Acima do Peso"
    }else if(imc < 34.9){
        return "Obesidade I"
    }else if(imc < 40){
        return "Obesidade II"
    }else{
        return "Obesidade III"
    }
}
let imc = calcularIMC(72, 1.73,)
console.log(imc)
console.log(classificaImc(imc))