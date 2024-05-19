import {commandData} from './assets/data.js';

const main = document.querySelector('main');
const header = document.querySelector('header')

function search(query) {
    if (query) {
        main.innerHTML = `
            <h3 id="search-results-label">Search Results:</h3>
            <section id="search-results"></section>
        `
        generateHeader(null, null, null, "Search");


        let matches = []
        for (const subject in commandData) {
            if (subject.toLowerCase().includes(query.toLowerCase())) {
                matches.push([subject]);
            }
            for (const topic in commandData[subject]) {
                if (topic.toLowerCase().includes(query.toLowerCase())) {
                    matches.push([subject, topic]);
                }
                for (const formula in commandData[subject][topic]) {
                    if (formula.toLowerCase().includes(query.toLowerCase()) ||
                        commandData[subject][topic][formula].description.toLowerCase().includes(query.toLowerCase())) {
                        matches.push([subject, topic, formula]);
                    }
                }
            }
        }

        if (matches.length === 0) {
            main.innerHTML += `
                <h3 id="results-none">No Results For "${query}"</h3>
            `
        } else {
            matches.sort((a, b) => a.length - b.length);

            for (const match of matches) {
                const type = match.length
                const id = match[match.length - 1].replace(/\s/g, '-');
                document.querySelector('#search-results').innerHTML += `
                    <article class="search-result">
                        <h4 class="search-result-type">${['Subject', 'Topic', 'Formula'][type - 1]}</h4>
                        <h4 class="search-result-dir">
                            ${match.length > 1 ? match[0] : ''}
                            ${match.length > 2 ? ` > ${match[1]}` : ''}
                        </h4>
                        <h3 id="search-result-${id}" onclick="">${match[match.length - 1]}</h3>
                        ${match.length === 3 ? `<p>${commandData[match[0]][match[1]][match[2]].description}</p>` : ''}
                    </article>
               `
                document.querySelector(`#search-result-${id}`).addEventListener('click', () => { //TODO: Fix bug where only last search result works
                    if (match.length === 1) {
                        displayTopics(match[0])
                    } else if (match.length === 2) {
                        displayFormulas(match[0], match[1])
                    } else if (match.length === 3) {
                        displayCommand(match[0], match[1], match[2])
                    }
                })
            }
        }
    }
}

function displayStart() {
    header.innerHTML = ``
    main.innerHTML = `
        <img draggable="false" src="/assets/images/brand.webp" alt="HelperMathica Branding" id="start-branding" />
        <button id="start_button">Start</button>
    `
    document.querySelector('#start_button').addEventListener('click', () => {
        displaySubjects()
    })
}

function displaySubjects() {
    generateHeader()
    let buttonsHTML = '';
    for (const subject in commandData) {
        const id = subject.replace(/\s/g, '-');
        buttonsHTML += `<button id="${id}">${subject}</button>`;
    }
    main.innerHTML = `<section id="buttons">${buttonsHTML}</section>`;

    for (const subject in commandData) {
        const id = subject.replace(/\s/g, '-');
        document.querySelector(`#${id}`).addEventListener('click', () => {
            displayTopics(subject);
        })
    }

}
function displayTopics(subject) {
    generateHeader(subject)
    let buttonsHTML = '';
    for (const topic in commandData[subject]) {
        const id = topic.replace(/\s/g, '-');
        buttonsHTML += `<button id="${id}">${topic}</button>`;
    }
    main.innerHTML = `<section id="buttons">${buttonsHTML}</section>`;

    for (const topic in commandData[subject]) {
        const id = topic.replace(/\s/g, '-');
        document.querySelector(`#${id}`).addEventListener('click', () => {
            displayFormulas(subject, topic);
        })
    }
}
function displayFormulas(subject, topic) {
    generateHeader(subject, topic)
    let buttonsHTML = '';
    for (const formula in commandData[subject][topic]) {
        const id = formula.replace(/\s/g, '-');
        buttonsHTML += `<button id="${id}">${formula}</button>`;
    }
    main.innerHTML = `<section id="buttons">${buttonsHTML}</section>`;
    for (const formula in commandData[subject][topic]) {
        const id = formula.replace(/\s/g, '-');
        document.querySelector(`#${id}`).addEventListener('click', () => {
            displayCommand(subject, topic, formula);
        })
    }
}
function displayCommand(subject, topic, formula) {
    generateHeader(subject, topic, formula)
    main.innerHTML = ``
}
function generateHeader(subject, topic, formula, other) {
    header.innerHTML = `
        <header>
            <img draggable="false" id="header-company" src="/assets/images/product_full.webp" alt="ITer8ive Solutions HelperMathica">
            <nav id="nav"></nav>
            <input type="search" id="search-input" placeholder="Search">
            <img alt="search" draggable="false" src="/assets/images/search.png" id="search-button">
        </header>
    `;

    const nav_html = document.querySelector('#nav')
    nav_html.innerHTML += `<span id="nav-start">Subjects</span>`;
    if (subject) {
        nav_html.innerHTML += `  >  <span id="nav-subject">${subject}</span>`;
    }
    if (topic) {
        nav_html.innerHTML += `  >  <span id="nav-topic">${topic}</span>`;
    }
    if (formula) {
        nav_html.innerHTML += `  >  <span id="nav-formula">${formula}</span>`;
    }
    if (other) {
        nav_html.innerHTML += `  >  ${other}`;
    }
    const search_input = document.querySelector('#search-input')
    search_input.addEventListener("keypress", function (event) {
        if (event.key === 'Enter') {
            search(search_input.value)
        }
    })
    document.querySelector('#search-button').addEventListener("click", () => {
            search(search_input.value)
    })
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
    document.querySelector('#header-company').addEventListener('click', () => {
        displayStart()
    })
}

displayStart()