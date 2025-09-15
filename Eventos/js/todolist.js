;(function(){
    "use strict"

    // Armazenar o DOM em variaveis
    const itemInput = document.getElementById("item-input")
    const todoAddForm = document.getElementById("todo-add")
    const ul = document.getElementById("todo-list")

    let arrTasks = [
        {
            name: "Task 1",
            createAt: Date.now(),
            completed: false
        }
    ]

    function generateLiTask(obj){
        const li = document.createElement("li")
        const p = document.createElement("p")
        const checkButton = document.createElement("button")
        const i = document.createElement("i")
        const editIcon = document.createElement("i")
        const deleteIcon = document.createElement("i")
        const editContainer = document.createElement("div")
        const editInput = document.createElement("input")
        const containerEditButton = document.createElement("button")
        const containerCancelButton = document.createElement("button")

        p.className = "task-name"
        p.setAttribute("data-action","task-name")
        p.textContent = obj.name
        li.className = "todo-item"
        checkButton.className = "button-check"
        checkButton.setAttribute("data-action", "checkButton")
        i.className = "fas fa-check displayNone"
        editIcon.className = "fas fa-edit"
        editIcon.setAttribute("data-action", "editIcon")
        deleteIcon.className = "fas fa-trash-alt"
        deleteIcon.setAttribute("data-action", "deleteIcon")
        editContainer.className = "editContainer"
        editInput.className = "editInput"
        editInput.setAttribute("type", "text")
        editInput.setAttribute("name", "editInput")
        containerEditButton.className = "editButton"
        containerEditButton.textContent = "Edit"
        containerEditButton.setAttribute("data-action", "editButton")
        containerCancelButton.className = "cancelButton"
        containerCancelButton.textContent = "Cancel"
        containerCancelButton.setAttribute("data-action", "cancelButton")

        checkButton.appendChild(i)
        li.appendChild(checkButton)
        li.appendChild(p)
        li.appendChild(editIcon)
        editContainer.appendChild(editInput)
        editContainer.appendChild(containerEditButton)
        editContainer.appendChild(containerCancelButton)
        li.appendChild(editContainer)
        li.appendChild(deleteIcon)
        ul.appendChild(li)

        return li
    }
    
    function renderTasks(){
        ul.innerHTML = ""
        arrTasks.forEach(task =>{
            ul.appendChild(generateLiTask(task))
        })
    }

    function addTask(task){
        arrTasks.push({
            name: task,
            createAt: Date.now(),
            completed: false 
        })
    }

    function clickedUl(e){
        if(e.target.classList.contains("fa-edit")){
            const el = e.target.nextElementSibling
            const input = el.firstChild
            const p = e.target.parentElement.getElementsByTagName("p")[0]
            el.style.display= "flex"
            input.focus()
            input.value = p.textContent
        }else if(e.target.classList.contains("fa-trash-alt")){
            const el = e.target.parentElement
            el.remove()
        }else if(e.target.classList.contains("checkButton")){
            // const button = e.target.classList.contains("checkButton") ? e.target : e.target.parentElement;
            // const i = button.firstChild;
            // i.classList.toggle("displayNone");
        }else if(e.target.classList.contains("editButton")){
            const input = e.target.parentElement.firstChild
            const p = e.target.parentElement.parentElement.getElementsByTagName("p")[0]
            p.textContent = input.value
            e.target.parentElement.style.display = "none"
        }else if(e.target.classList.contains("cancelButton")){
            // elCancel.style.display = "none"
            e.target.parentElement.style.display = "none"
        }
    }

    todoAddForm.addEventListener("submit", function(e){
        e.preventDefault()
        addTask(itemInput.value)
        renderTasks()
        itemInput.value = ""
        itemInput.focus()
    })

    ul.addEventListener("click", clickedUl)
    renderTasks()
})()