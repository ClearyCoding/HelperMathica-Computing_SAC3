import {commandData} from './assets/data.js';

const main = document.querySelector('main');

function displayStart() {
    main.innerHTML = `
        <img draggable="false" src="/assets/images/brand.webp" alt="HelperMathica Branding" id="start-branding" />
        <button id="start_button">Start</button>
    `
    document.querySelector('#start_button').addEventListener('click', () => {
        displaySubjects()
    })
}

function displaySubjects() {
    let buttonsHTML = '';
    for (const subject in commandData) {
        buttonsHTML += `<button id="${subject}">${subject}</button>`;
    }
    main.innerHTML = `
        <header>
            <img draggable="false" id="header-company" src="/assets/images/product_full.webp" alt="ITer8ive Solutions HelperMathica">
            <nav id="nav"></nav>
            <h2></h2>
        </header>
        <section id="buttons">${buttonsHTML}</section>
    `;
    generateNav(document.querySelector('#nav'), null, null, null);
    document.querySelector('#header-company').addEventListener('click', () => {
        displayStart()
    })

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
    main.innerHTML = `
        <header>
            <img draggable="false" id="header-company" src="/assets/images/product_full.webp" alt="ITer8ive Solutions HelperMathica">
            <nav id="nav"></nav>
            <h2></h2>
        </header>
        <section id="buttons">${buttonsHTML}</section>
    `;
    generateNav(document.querySelector('#nav'), subject, null, null);
    document.querySelector('#header-company').addEventListener('click', () => {
        displayStart()
    })

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
    main.innerHTML = `
        <header>
            <img draggable="false" id="header-company" src="/assets/images/product_full.webp" alt="ITer8ive Solutions HelperMathica">
            <nav id="nav"></nav>
            <h2></h2>
        </header>
        <section id="buttons">${buttonsHTML}</section>
    `;
    generateNav(document.querySelector('#nav'), subject, topic, null);
    document.querySelector('#header-company').addEventListener('click', () => {
        displayStart()
    })

    for (const formula in commandData[subject][topic]) {
        document.querySelector(`#${formula}`).addEventListener('click', () => {
            displayFormulas(subject, topic, formula);
        })
    }
}
function displayCommand(subject, topic, formula) {

}
function generateNav(html_object, subject, topic, formula) {
    html_object.innerHTML += `<span id="nav-start">Subjects</span>`;
    if (subject) {
        html_object.innerHTML += `  >  <span id="nav-subject">${subject}</span>`;
    }
    if (topic) {
        html_object.innerHTML += `  >  <span id="nav-topic">${topic}</span>`;
    }
    if (formula) {
        html_object.innerHTML += `  >  <span id="nav-formula">${formula}</span>`;
    }
    document.querySelector('#nav-start').addEventListener('click', () => {
        displaySubjects();
    })
    if (subject) {
        document.querySelector('#nav-subject').addEventListener('click', () => {
            displayTopics(subject);
        })
    }
    if (topic) {
        document.querySelector('#nav-topic').addEventListener('click', () => {
            displayFormulas(subject, topic);
        })
    }
    if (formula) {
        document.querySelector('#nav-formula').addEventListener('click', () => {
            displayCommand(subject, topic, formula);
        })
    }
}

displayStart()