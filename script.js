'use strict';
//const hostingPath = 'https://iryna14548.github.io/FooCoding_Portfolio/';

async function getHTML(url) {
    try {
        const response = await fetch(url, { method: 'GET' });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const contentDiv = document.getElementById('content');
        const responseHtml = await response.text();
        contentDiv.innerHTML = responseHtml;

        document.title = response.pageTitle;
        //window.history.pushState({ html: response.html, pageTitle: response.pageTitle }, '', url);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

getHTML('/pages/home.html');
const links = document.getElementsByClassName('js-link');
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener(
        'click',
        function (event) {
            event.preventDefault();
            let pageName = links[i].href;
            getHTML(pageName);
        },
        false
    );
}

//(function () {
//getHTML('pages/home.html');
//})();
