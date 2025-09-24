function getRandowNumber(inicio = 0, fim = 5, integer = true){
    const numAleatorio = Math.random()* (fim - inicio + 1) + inicio
    return integer ? parseInt(numAleatorio) : numAleatorio
}

// console.log(getRandowNumber(20,19,false))