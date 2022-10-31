import { loadEntry, loadEntryProgress, loadEntryDone } from "./renderer"

let overlay = document.getElementById('overlay')
let newEntryBtn = document.getElementById('new-entry-btn')
let form = document.getElementById('add-entry-form')
let submit = document.getElementById('submit')
let todoContainer = document.getElementById('todo-container')
let inProgContainer = document.getElementById('inprogress-container')
let finContainer = document.getElementById('done-container')
let tabForm = document.getElementById('add-tab-form')

function changeState(){
    let parent = this.parentElement;
    let grandparent = parent.parentElement;
    let location = parent.querySelector('.location')
    if (grandparent.id == "todo-container") {
        let chld = grandparent.removeChild(parent);
        inProgContainer.append(chld);
        location.innerHTML = 'inprog'
        this.innerHTML = 'Move to "Done"';
        localStorage.clear()
        logItemsToStorage()
    }
    else if (grandparent.id == "inprogress-container") {
        let chld = grandparent.removeChild(parent);
        finContainer.append(chld);
        location.innerHTML = 'final'
        this.innerHTML = 'Remove Entry';
        localStorage.clear()
        logItemsToStorage()
    }
    else {
        //? Add a way to remove element from dataStorage
        grandparent.removeChild(parent);
        localStorage.clear()
        logItemsToStorage()
    }
}

function logItemsToStorage(){
    let items = document.querySelectorAll('.task-card')
    let parser = new DOMParser()
    let array = []
    items.forEach(item => array.push(item.outerHTML))
    localStorage.setItem('todos', JSON.stringify(array));
}

function submitEntry(){
    let n = document.getElementById('name')
    let desc = document.getElementById('description')
    let date = document.getElementById('date')
    let importance
    const radioButtons = document.querySelectorAll('input[name="importance"]');
    n = n.value
    desc = desc.value
    date = date.value
    for (const sel of radioButtons){
        if (sel.checked) {
            importance = sel.value;
            break;
        }
    }
    return [n, desc, date, importance]
}
function submitTab(){
    let n = document.getElementById('tab-name')
    n = n.value
    return n
}

function revealForm(){
    overlay.classList.add("active")
    form.classList.add("active")
}

function hideForm(){
    overlay.classList.remove("active")
    form.classList.remove("active")
}

function revealTabForm(){
    overlay.classList.add("active")
    tabForm.classList.add("active")
}

function hideTabForm(){
    overlay.classList.remove("active")
    tabForm.classList.remove("active")
}

function loadFromStorage(){
    let storage = localStorage.getItem('todos')
    console.log(storage.length)
    let parser = new DOMParser()
    storage = JSON.parse(storage)
    console.log(storage)
    console.log(storage.length)
    for(let i = 0; i<=storage.length; i++){
        let a = parser.parseFromString(storage[i], "text/html")
        console.log(a)
        let b = a.documentElement.innerHTML
        console.log(b)
        b = b.split('')
        console.log(b)
        b.splice(0, 19)
        console.log(b)
        console.log(b)
        b = b.join("")
        console.log(b)
        if(b.includes('inprog')){
            let ba = parser.parseFromString(b, "text/html")
            ba = ba.scrollingElement
            ba = ba.getElementsByClassName('task-card')
            Array.from(ba).forEach((el) => {
                inProgContainer.append(el)
            });
        }
        else if(b.includes('final')){
            let ba = parser.parseFromString(b, "text/html")
            ba = ba.scrollingElement
            ba = ba.getElementsByClassName('task-card')
            Array.from(ba).forEach((el) => {
                finContainer.append(el)
            });
        }
        else if(b.includes('needtodo')){
            let ba = parser.parseFromString(b, "text/html")
            ba = ba.scrollingElement
            ba = ba.getElementsByClassName('task-card')
            Array.from(ba).forEach((el) => {
                todoContainer.append(el)
            });
        }
        else{
            console.log('EROOOOOORRRRR')
        }
    }
}
export {changeState, logItemsToStorage, revealForm, hideForm, submitEntry, revealTabForm, hideTabForm, submitTab, loadFromStorage}