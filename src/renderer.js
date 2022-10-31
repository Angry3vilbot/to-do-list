import{changeState, hideForm, hideTabForm, submitEntry, submitTab, logItemsToStorage} from './logic'

let overlay = document.getElementById('overlay')
let newEntryBtn = document.getElementById('new-entry-btn')
let form = document.getElementById('add-entry-form')
let submit = document.getElementById('submit')
let todoContainer = document.getElementById('todo-container')
let inProgContainer = document.getElementById('inprogress-container')
let finContainer = document.getElementById('done-container')
let footer = document.querySelector('footer')

function createEntry(){
    let currentTab = document.getElementById('current-tab')
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
    let loc = document.createElement('p')
    loc.classList.add('location')
    date.classList.add('task-duedate')
    des.classList.add('task-description')
    h3.classList.add('task-title')
    div.classList.add('task-card')
    div.classList.add(`${importance}-importance`)
    btn.classList.add(`${importance}-importance-button`)
    loc.innerHTML = 'needtodo'
    des.innerHTML = desc
    date.innerHTML = `Due: ${due}`
    h3.innerHTML = n
    btn.innerHTML = 'Move to "In progress"'
    btn.addEventListener('click', changeState)
    div.append(h3, des, date, btn, loc)
    todoContainer.append(div)
    logItemsToStorage()
    hideForm()
}

function createNewViewTab(){
   let allCards = document.querySelectorAll('.task-card')
   allCards.forEach(item => item.remove())
}
function createTab(){
    let currentTabCheck = document.getElementById('current-tab')
    console.log(currentTabCheck)
    let name = submitTab()
    let div = document.createElement('div')
    div.innerHTML = name
    let items = logItemsToStorage()
    window.localStorage.setItem(name, items)
    footer.append(div)
    if(currentTabCheck != null){
        console.log(`CURRENT TAB CHECK NULL:   ${currentTabCheck}`)
        currentTabCheck.removeAttribute('id')
        console.log(`CURRENT TAB NO ID:   ${currentTabCheck}`)
    }
    div.id = 'current-tab'
    hideTabForm()
    createNewViewTab()
}
 export{createEntry, createTab, createNewViewTab}