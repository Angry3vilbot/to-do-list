let overlay = document.getElementById('overlay')
let newEntryBtn = document.getElementById('new-entry-btn')
let form = document.getElementById('add-entry-form')
let submit = document.getElementById('submit')
let todoContainer = document.getElementById('todo-container')
let inProgContainer = document.getElementById('inprogress-container')
let finContainer = document.getElementById('done-container')
console.log('logic')
function changeState(){
    let parent = this.parentElement;
    let grandparent = parent.parentElement;
    if (grandparent.id == "todo-container") {
        let chld = grandparent.removeChild(parent);
        inProgContainer.append(chld);
        this.innerHTML = 'Move to "Done"';
    }
    else if (grandparent.id == "inprogress-container") {
        let chld = grandparent.removeChild(parent);
        finContainer.append(chld);
        this.innerHTML = 'Remove Entry';
    }
    else {
        grandparent.removeChild(parent);
    }
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

function revealForm(){
    overlay.classList.add("active")
    form.classList.add("active")
}

function hideForm(){
    overlay.classList.remove("active")
    form.classList.remove("active")
}
export {changeState, revealForm, hideForm, submitEntry}