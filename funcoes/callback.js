const teste = function(cb){
    console.log("Função teste")
    typeof cb === "function" && cb(5,78)
}
const fn = function(n1,n2) {
    console.log(n1**2 * n2)
}

teste(fn)