function calcularIMC(p,h, cb){
    if(p === undefined || h === undefined){
        throw Error("Necessita de dois parametros")
    }
    let imc = p / (h*h)
    if(typeof cb === "function"){
        return cb(imc)
    }
    return imc
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
let imc = calcularIMC(100, 2.0)
let imc2 = calcularIMC(100,2.0,classificaImc)
console.log(imc, imc2)