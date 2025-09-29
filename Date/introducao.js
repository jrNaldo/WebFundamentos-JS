const data = new Date()
console.log(data)
console.log(data.getDay())
console.log(data.getDate())
console.log(data.getMonth())
console.log(data.getTime())
console.log(data.getFullYear())
console.log(data.getHours())
console.log(data.getUTCHours())
console.log(data.getTimezoneOffset())
// console.log(data)

// data.setDate(15) // Define novos parametros
// data.setFullYear(2024)
// data.setMonth(11)
console.log("-----")
// data.setTime(0)
console.log(data.toString())
console.log(data.toDateString()) // Data
console.log(data.toISOString()) // Transforma em string no padrao convecional
console.log(data.toLocaleDateString())
console.log(data.toLocaleString())
console.log(data.toUTCString())
