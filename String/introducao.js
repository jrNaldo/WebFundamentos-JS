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