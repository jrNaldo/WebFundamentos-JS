function Task(name){ // Quando se cria uma função construtora, inicia-se com uma letra maiúscula
    "use strict"
    if(this === undefined) return
    let _name = name

    this.createdAt = new Date()
    this.updateAt = null
    this.changeName = function(newName){
       if(newName){
            _name = newName
            this.updateAt = new Date()
       }
    }
    this.getName = function(){
        return _name
    }
}

const task1 = new Task("Naldo")
task1.changeName("Maria")

const task2 = new Task("minha segunda tarefa")

console.log(task1)
console.log(task2)
