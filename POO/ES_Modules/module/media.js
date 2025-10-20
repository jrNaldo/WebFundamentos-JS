import soma from "./soma.js"
function media(...args){
    const total = soma(...args)
    return total / args.length
}
const IP = "000.000.000.000"
function testarNome(){
    return console.log("sjdjjd media ")
}
export {media, IP, testarNome}