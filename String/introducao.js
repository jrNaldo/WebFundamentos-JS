let str1 = "minha string"
console.log(str1.replace("i","o"))
console.log(str1)

console.log(str1.indexOf("i"))
console.log(str1.lastIndexOf("i"))
console.log(str1.includes("i"))

console.log(str1.includes("aaaa"))
console.log(str1.indexOf("aaaa"))
console.log(str1.indexOf("aaaa") >= 0)

console.log(str1.slice(-2, 5)) // Permite passar valores negativos
console.log(str1.substring(6,0))

let strAsObj = new String("minha string como objeto")
console.log(strAsObj)
console.log(strAsObj.valueOf()) // Mostra o verdadeiro valor da string
console.log(strAsObj.toString())

const str2 = "   minha string legal  "
console.log(str2)
console.log(str2.trimStart())
console.log(str2.trimEnd())
console.log(str2.trim()) // Remove espaços vazios

const str3 = "0123456789"
console.log(str3.padEnd(20,"*"))
console.log(str3)

let tel1 = "91234-5678"
let tel2 = "1234-2345"
function mascararTel(num){
    let hifenPosicao = num.indexOf("-")
    let numIncio = num.slice(0,hifenPosicao)
    let numFinal = num.slice(hifenPosicao + 1)
    let doisUltimos = numFinal.slice(-2)
    return `${numIncio.charAt(0).padEnd(numIncio.length, "*")}-${doisUltimos.padStart(numFinal.length, "*")}`
}
console.log(mascararTel(tel1))
console.log(mascararTel(tel2))

const email = "naldo@gmail.com"

console.log(email.startsWith("a", 1))

// if(email.endsWith(".com") && email.startsWith("naldo")){
//    console.log("Senha:'1234'")
// }
let alfabeto = "abcdefgh"

console.log(alfabeto.charAt(1))
console.log(alfabeto.charCodeAt(1))// Codigo da letra, por exemplo b = 98