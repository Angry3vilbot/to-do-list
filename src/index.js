let overlay = document.getElementById('overlay')
let newEntryBtn = document.getElementById('new-entry-btn')
let form = document.getElementById('add-entry-form')
let submit = document.getElementById('submit')
let todoContainer = document.getElementById('todo-container')
let inProgContainer = document.getElementById('inprogress-container')
let finContainer = document.getElementById('done-container')

function revealForm(){
    overlay.classList.add("active")
    form.classList.add("active")
}

function hideForm(){
    overlay.classList.remove("active")
    form.classList.remove("active")
}

function submitEntry(){
    let n = document.getElementById('name')
    let importance
    const radioButtons = document.querySelectorAll('input[name="importance"]');
    n = n.value
    for (const sel of radioButtons){
        if (sel.checked) {
            importance = sel.value;
            break;
        }
    }
    return [n, importance]
}
function changeState(){
    let parent = this.parentElement
    let grandparent = parent.parentElement
    if(grandparent.id == "todo-container"){
        let chld = grandparent.removeChild(parent)
        inProgContainer.append(chld)
        this.innerHTML = 'Move to "Done"'
    }
    else if(grandparent.id == "inprogress-container"){
        let chld = grandparent.removeChild(parent)
        finContainer.append(chld)
        this.innerHTML = 'Remove Entry'
    }
    else{
        grandparent.removeChild(parent)
    }
}
function createEntry(){
   let variables = submitEntry()
   let n = variables[0]
   let importance = variables[1]
   console.log(`${n} ||| ${importance}`)
   let div = document.createElement('div')
   let h3 = document.createElement('h3')
   let p = document.createElement('p')
   let btn = document.createElement('button')
   h3.classList.add('task-title')
   p.classList.add(importance)
   div.classList.add('task-card')
   h3.innerHTML = n
   p.innerHTML = `Importance - <mark>${importance}</mark>`
   btn.innerHTML = 'Move to "In progress"'
   btn.addEventListener('click', changeState)
   div.append(h3, p, btn)
   todoContainer.append(div)
   hideForm()
}
newEntryBtn.addEventListener('click', revealForm)
submit.addEventListener('click', createEntry)