function changeName(name){
    this.name = name
    this.updateAt = new Date()
}

// changeName("Fora de OBJ") // Refere ao objeto Window no browser

const task1 = {
    name: "task 1",
    createdAt: new Date(),
    updateAt: null,
    completed: false,
    changeName
}
const task2 = {
    name: "task 2",
    createdAt: new Date(),
    updateAt: null,
    completed: false
}

task1.name = "task 1 - updated"
task1.updateAt = new Date()
task1.changeName("Nome atualizado")

console.log(task1)
// console.log(task2)