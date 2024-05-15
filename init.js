import {commandData} from './assets/data.js';

const main = document.querySelector('main')
const startButton = document.querySelector('#start')

function displaySubjects() {
    main.innerHTML = `<section id="buttons"></section>`
    for (const subject in commandData) {
        document.querySelector('#buttons').innerHTML += `<button id="${subject}">${subject}</button>`
        document.querySelector(`#${subject}`).addEventListener('click', () => {
            displayTopics(subject);
        })
    }

}
function displayTopics(subject) {}
function displayFormulas(topic) {}
function displayCommand(formula) {}

startButton.addEventListener('click', () => {
    displaySubjects()
})