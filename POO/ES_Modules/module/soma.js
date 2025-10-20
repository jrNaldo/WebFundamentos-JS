// O default significa que ele importa somente a função, nao o seu nome tbm
export default function soma(...args){
    if(args.length === 0){
        throw new Error("A função requer pelo menos um parametro")
    }

    if(args.some(n => typeof n !== "number" || Number.isNaN(n))){
        throw new Error("Parametro invalido: Todos devem ser numeros")
    }

    return args.reduce((a,b) => a + b, 0)
}

export function testarNome(){
    return console.log("sjdjjd soma")
}