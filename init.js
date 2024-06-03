import {commandData} from './assets/data.js';

const main = document.querySelector('main');
const header = document.querySelector('header')

function search(query) {
    console.log("Searching... ")
    if (query) {
        main.innerHTML = `
            <h3 id="search-results-label">Search Results:</h3>
            <section id="search-results"></section>
        `
        generateHeader(null, null, null, "Search");

        query = query.replace(/[^a-zA-Z0-9 ]/g, "");
        let query_split = query.split(" ")
        query_split = query_split.filter(item => item.trim() !== "");
        console.log(query_split)

        let matches = []
        let uniqueMatches = new Set(); // Initialize a new Set

        for (const i in query_split) {
            for (const subject in commandData) {
                if (subject.toLowerCase().includes(query_split[i].toLowerCase())) {
                    let match = [subject];
                    if (!uniqueMatches.has(JSON.stringify(match))) { // Check if the Set contains the match
                        uniqueMatches.add(JSON.stringify(match)); // Add the match to the Set
                        matches.push(match); // Push the match into the matches array
                    }
                }
                for (const semester in commandData[subject]) {
                    for (const topic in commandData[subject][semester]) {
                        if (topic.toLowerCase().includes(query_split[i].toLowerCase())) {
                            let match = [subject, topic];
                            if (!uniqueMatches.has(JSON.stringify(match))) {
                                uniqueMatches.add(JSON.stringify(match));
                                matches.push(match);
                            }
                        }
                        for (const formula in commandData[subject][semester][topic]) {
                            if (formula && formula.toLowerCase().includes(query_split[i].toLowerCase()) ||
                                commandData[subject][topic][formula] && commandData[subject][topic][formula].description && commandData[subject][topic][formula].description.toLowerCase().includes(query_split[i].toLowerCase())) {
                                let match = [subject, topic, formula];
                                if (!uniqueMatches.has(JSON.stringify(match))) {
                                    uniqueMatches.add(JSON.stringify(match));
                                    matches.push(match);
                                }
                            }
                        }
                    }
                }
            }
        }

        if (matches.length === 0) {
            main.innerHTML += `
                <h3 id="results-none">No Results For "${query}"</h3>
                <button id="back">Back</button>
            `
            document.querySelector(`#back`).addEventListener('click', () => {
                displaySubjects();
            })
        } else {
            matches.sort((a, b) => a.length - b.length);

            for (const [index, match] of matches.entries()) {
                document.querySelector('#search-results').innerHTML += `
                    <article class="search-result">
                        <h4 class="search-result-type">${['Subject', 'Topic', 'Formula'][match.length - 1]}</h4>
                        <h4 class="search-result-dir">
                            ${match.length > 1 ? match[0] : ''}
                            ${match.length > 2 ? ` > ${match[1]}` : ''}
                        </h4>
                        <h3 id="search-result-${index}" onclick="">${match[match.length - 1]}</h3>
                        ${match.length === 3 ? `<p>${commandData[match[0]][match[1]][match[2]].description}</p>` : ''}
                    </article>
               `
            }
            main.innerHTML += `<h3 id="back">Back</h3>`;
            for (const [index, match] of matches.entries()) {
                document.querySelector(`#search-result-${index}`).addEventListener('click', () => {
                    if (match.length === 1) {
                        displayTopics(match[0])
                    } else if (match.length === 2) {
                        displayFormulas(match[0], match[1])
                    } else if (match.length === 3) {
                        displayCommand(match[0], match[1], match[2])
                    }
                })
            }
            document.querySelector(`#back`).addEventListener('click', () => {
                displaySubjects();
            })
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
        console.log("Begin!")
        displaySubjects()
    })
}
function displaySubjects() {
    console.log("Choosing subject...")
    generateHeader()    
    let buttonsHTML = '';
    for (const subject in commandData) {
        const id = subject.replace(/[\s\/,&]/g, '-');
        buttonsHTML += `<button id="${id}">${subject}</button>`;
    }
    main.innerHTML = `<section class="buttons">${buttonsHTML}</section>`;

    for (const subject in commandData) {
        const id = subject.replace(/[\s\/,&]/g, '-');
        document.querySelector(`#${id}`).addEventListener('click', () => {
            console.log(`Subject chosen: ${subject}. `)
            displayTopics(subject);
        })
    }

}
function displayTopics(subject) {
    console.log("Choosing topic...")
    generateHeader(subject)
    let semestersHTML = '';
    for (const semester in commandData[subject]) {
        let buttonsHTML = '';
        for (const topic in commandData[subject][semester]) {
            const id = topic.replace(/[\s\/,&]/g, '-');
            buttonsHTML += `<button id="${id}">${topic}</button>`;
        }
        semestersHTML += `<section class="buttons buttons-with-back">
                                            <h2 class="semester-title">${semester}</h2>
                                            ${buttonsHTML}
                                        </section>`;
    }
    main.innerHTML = `<section id="semesters-group">${semestersHTML}</section>`
    main.innerHTML += `<h3 id="back">Back</h3>`;

    for (const semester in commandData[subject]) {
        for (const topic in commandData[subject][semester]) {
            const id = topic.replace(/[\s\/,&]/g, '-');
            document.querySelector(`#${id}`).addEventListener('click', () => {
                console.log(`Topic chosen: ${topic}`)
                displayFormulas(subject, semester, topic);
            })
        }
    }

    document.querySelector(`#back`).addEventListener('click', () => {
        displaySubjects();
    })
}
function displayFormulas(subject, semester, topic) {
    console.log("Choosing formula... ")
    generateHeader(subject, topic)
    let buttonsHTML = '';
    for (const formula in commandData[subject][semester][topic]) {
        const id = formula.replace(/[\s\/,&]/g, '-');
        buttonsHTML += `<button id="${id}">${formula}</button>`;
    }
    main.innerHTML = `<section class="buttons buttons-with-back">${buttonsHTML}</section>`;
    main.innerHTML += `<h3 id="back">Back</h3>`;
    for (const formula in commandData[subject][semester][topic]) {
        const id = formula.replace(/[\s\/,&]/g, '-');
        document.querySelector(`#${id}`).addEventListener('click', () => {
            console.log(`Formula chosen: ${formula}. `)
            displayCommand(subject, semester, topic, formula);
        })
    }
    document.querySelector(`#back`).addEventListener('click', () => {
        displayTopics(subject);
    })
}
function displayCommand(subject, semester, topic, formula) {
    generateHeader(subject, topic, formula)
    main.innerHTML = `
        <h2>${formula}</h2>
        <div class="command">
            <h3 id="syntax">${commandData[subject][semester][topic][formula].syntax}</h3>
            <button id="copy"><img draggable="false" alt="Copy" src="/assets/images/clipboard.png"></button>
        </div>
        <p>${commandData[subject][semester][topic][formula].description}</p>
        ${'syntax2' in commandData[subject][semester][topic][formula] ? 
        `<div class="command">
            <h3 id="syntax2">${commandData[subject][semester][topic][formula].syntax2}</h3>
            <button id="copy2"><img draggable="false" alt="Copy" src="/assets/images/clipboard.png"></button>
        </div>`
        : ''}
        ${'description2' in commandData[subject][semester][topic][formula] ?
        `<p>${commandData[subject][semester][topic][formula].description2}</p>`
        : ''}
        ${'syntax3' in commandData[subject][semester][topic][formula] ?
        `<div class="command">
            <h3 id="syntax3">${commandData[subject][semester][topic][formula].syntax3}</h3>
            <button id="copy3"><img draggable="false" alt="Copy" src="/assets/images/clipboard.png"></button>
        </div>`
        : ''}
        ${'description3' in commandData[subject][semester][topic][formula] ?
        `<p>${commandData[subject][semester][topic][formula].description3}</p>`
        : ''}
    `
    main.innerHTML += `<button id="back">Back</button>`;
    document.querySelector(`#back`).addEventListener('click', () => {
        displayFormulas(subject, semester, topic);
    })
    document.querySelector('#copy').addEventListener('click', () => {
        navigator.clipboard.writeText(commandData[subject][semester][topic][formula].syntax)
            .then(() => {
                console.log('Command is copied to the clipboard');
                document.querySelector('#copy img').src = "/assets/images/tick.png";
                setTimeout(() => {
                    document.querySelector('#copy img').src = "/assets/images/clipboard.png";
                }, 4000);
            })
            .catch(err => {
                console.error('Could not copy text: ', err);
            });
    })
}
function generateHeader(subject, semester, topic, formula, other) {
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
            displayFormulas(subject, semester, topic);
        })
    }
    if (formula) {
        document.querySelector('#nav-formula').addEventListener('click', () => {
            displayCommand(subject, semester, topic, formula);
        })
    }
    document.querySelector('#header-company').addEventListener('click', () => {
        displayStart()
    })
}

displayStart()