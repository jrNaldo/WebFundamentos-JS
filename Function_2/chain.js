const calc = {
    value: 0,
    soma(n){
        this.value += n
        return this
    },
    subtrai(n){
        this.value -= n
        return this
    },
    log(){
        console.log(this)
        return this
    }
}
//Encadeamento de metodos
calc.soma(5).soma(3).subtrai(1).soma(1234).log().soma(3).soma(23).subtrai(1200).log().soma(7).log()
