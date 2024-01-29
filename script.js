'use strict';
const hostingPath = 'https://iryna14548.github.io/FooCoding_Portfolio/';

async function getHTML(url) {
    try {
        const response = await fetch(hostingPath + url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const HTML = await response.text();
        const contentDiv = document.getElementById('content');
        contentDiv.innerHTML = HTML;
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

const links = document.getElementsByClassName('link');
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener(
        'click',
        function (event) {
            event.preventDefault();
            getHTML(links[i].href.split('/').pop());
        },
        false
    );
}
