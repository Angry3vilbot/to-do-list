import {createProject, createEntry} from './renderer';
import {revealForm, hideForm, submitEntry, changeState} from './logic'

let newEntryBtn = document.getElementById('new-entry-btn')
let submit = document.getElementById('submit')



newEntryBtn.addEventListener('click', revealForm)
submit.addEventListener('click', createEntry)