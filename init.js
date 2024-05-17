import {commandData} from './assets/data.js';

const main = document.querySelector('main');
const startButton = document.querySelector('#start_button');

function displaySubjects() {
    let buttonsHTML = '';
    for (const subject in commandData) {
        buttonsHTML += `<button id="${subject}">${subject}</button>`;
    }
    main.innerHTML = `<section id="buttons">${buttonsHTML}</section>`;

    for (const subject in commandData) {
        document.querySelector(`#${subject}`).addEventListener('click', () => {
            displayTopics(subject);
        })
    }

}
function displayTopics(subject) {
    let buttonsHTML = '';
    for (const topic in commandData[subject]) {
        buttonsHTML += `<button id="${topic}">${topic}</button>`;
    }
    main.innerHTML = `<section id="buttons">${buttonsHTML}</section>`;

    for (const topic in commandData[subject]) {
        document.querySelector(`#${topic}`).addEventListener('click', () => {
            displayFormulas(subject, topic);
        })
    }
}
function displayFormulas(subject, topic) {
    console.log(commandData[subject][topic]);
    let buttonsHTML = '';
    for (const formula in commandData[subject][topic]) {
        buttonsHTML += `<button id="${formula}">${formula}</button>`;
    }
    main.innerHTML = `<section id="buttons">${buttonsHTML}</section>`;

    for (const formula in commandData[subject][topic]) {
        document.querySelector(`#${formula}`).addEventListener('click', () => {
            displayFormulas(subject, topic, formula);
        })
    }
}
function displayCommand(subject, topic, formula) {

}

startButton.addEventListener('click', () => {
    displaySubjects()
})