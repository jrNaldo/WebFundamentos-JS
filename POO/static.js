//ES5 

function Animal(){}
Animal.prototype.whoAmI = function (){
    return this
}

Animal.categoria = "ser vivo" // Propriedade estatica

const dog = new Animal()

// ES6
class Cachorro{
    constructor(nome){
        this.nome = nome
        console.log("Chamando metodo estatico")
        Cachorro.beber()
    }

    static comer(){
        // console.log(this) Cachorro
        console.log("comendo")
        this.beber()
    }

    static beber(){
        console.log("bebendo")
    }
}

const dog2 = new Cachorro("fjfjd")

class Validar{
    constructor(email){
        Validar.validaEmail(email)
        this.email = email
    }

    static validaEmail(email){
        if(email.includes("@") && email.endsWith("gmail.com")){
            return email
        }else{
            throw new Error("Parameter don't includes '@' or 'gmail.com'")
        }
    }
}

const user = new Validar("sjffjjdjdjdgmail.com")
console.log(user)