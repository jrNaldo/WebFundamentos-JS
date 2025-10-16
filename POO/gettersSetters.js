(function(){
    let classe = ''
    const classesPermitidas = ['mamifero','peixe','reptil','anfibio']
    const gato = {
        nome: "Miau",
        get classe(){
            return classe
        },
        set classe(_classe){
            if(classesPermitidas.includes(_classe)){
                classe = _classe
            }
        } 
    }
    this.gato = gato
    })();
console.log(gato)

function criarAnimal(nome,classe){
    let _classe = classe
    const _classesPermitidas = ['mamifero','peixe','reptil','anfibio']
    return {
        nome, 
        get classe(){
            return _classe
        },
        set classe(novaClasse){
            if(_classesPermitidas.includes(novaClasse.trim())){
                _classe = novaClasse
            }
        }
    }
}
const tartaruga = criarAnimal("beluga", "reptil")

class Animal{
    #classe // Transforma propriedade em privada
    constructor(nome, classe){
        this._nome = nome
        this.#classe = classe
    }
    get classe(){
        return this.#classe
    }

    set classe(novaClasse){
        const _classesPermitidas = ['mamifero','peixe','reptil','anfibio']
        if(_classesPermitidas.includes(novaClasse.trim())){
            this.#classe = novaClasse
        }

    }

    #metodoPrivado(){
        console.log("Metodo privado")
        return "3"
    }
    metodoPublico(){
        console.log("Metodo Publico")
        this.#metodoPrivado()
    }
}

const nemo = new Animal("NEMO",'peixe')
console.log(nemo)
nemo.classe = "mamifero"
console.log(nemo.classe)
nemo.classe = "poero"
console.log(nemo.classe)