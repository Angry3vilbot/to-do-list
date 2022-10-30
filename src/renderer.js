import{changeState, hideForm, submitEntry} from './logic'

let overlay = document.getElementById('overlay')
let newEntryBtn = document.getElementById('new-entry-btn')
let form = document.getElementById('add-entry-form')
let submit = document.getElementById('submit')
let todoContainer = document.getElementById('todo-container')
let inProgContainer = document.getElementById('inprogress-container')
let finContainer = document.getElementById('done-container')

function createEntry(){
    let variables = submitEntry()
    let n = variables[0]
    let desc = variables[1]
    let due = variables[2]
    let importance = variables[3]
    console.log(`${n} ||| ${importance}`)
    let div = document.createElement('div')
    let h3 = document.createElement('h3')
    let des = document.createElement('p')
    let date = document.createElement('p')
    let btn = document.createElement('button')
    date.classList.add('task-duedate')
    des.classList.add('task-description')
    h3.classList.add('task-title')
    div.classList.add('task-card')
    div.classList.add(`${importance}-importance`)
    btn.classList.add(`${importance}-importance-button`)
    des.innerHTML = desc
    date.innerHTML = `Due: ${due}`
    h3.innerHTML = n
    btn.innerHTML = 'Move to "In progress"'
    btn.addEventListener('click', changeState)
    div.append(h3, des, date, btn)
    todoContainer.append(div)
    hideForm()
 }
 export{createEntry}