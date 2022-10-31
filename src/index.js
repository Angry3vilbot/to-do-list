import {createEntry, createTab} from './renderer';
import {revealForm, revealTabForm, loadFromStorage, changeState} from './logic'

let newEntryBtn = document.getElementById('new-entry-btn')
let submit = document.getElementById('submit')
let newTabBtn = document.getElementById('new-tab-button')
let submitTab = document.getElementById('submit-tab')
let todoArray = []
let inprogressArray = []
let finishedArray = []

window.onload = function(){
    loadFromStorage()
    let high = document.getElementsByClassName('high-importance-button')
    let medium = document.getElementsByClassName('med-importance-button')
    let low = document.getElementsByClassName('low-importance-button')
    Array.from(high).forEach((el) => {
        el.addEventListener('click', changeState)
    });
    Array.from(medium).forEach((el) => {
        el.addEventListener('click', changeState)
    });
    Array.from(low).forEach((el) => {
        el.addEventListener('click', changeState)
    });
}

newTabBtn.addEventListener('click', revealTabForm)
newEntryBtn.addEventListener('click', revealForm)
submitTab.addEventListener('click', createTab)
submit.addEventListener('click', createEntry)

export{todoArray, inprogressArray, finishedArray}