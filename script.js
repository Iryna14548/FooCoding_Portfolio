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
        initialize();

        window.scrollTo({ top: 0, behavior: 'smooth' });
        //window.history.pushState({ html: response.html, pageTitle: response.pageTitle }, '', url);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

getHTML('/pages/home');

function linkClick(event) {
    event.preventDefault();

    debugger;
    const currentUrl = window.location; // Gets the current URL
    const url = new URL(this.href, currentUrl.origin); // Resolves the full URL against the current origin
    let fullUrl = url.href.substring(url.origin.length); // Extracts the part after the domain

    // Extract the pathname from the URL
    let pagePath = url.pathname;
    document.querySelectorAll('.js-link').forEach((item) => {
        item.classList.remove('active');
    });
    document.querySelectorAll(`[href*="${pagePath}"]`).forEach((item) => {
        item.classList.add('active');
    });

    getHTML(fullUrl);
}

const initialize = () => {
    const links = document.getElementsByClassName('js-link');
    for (let i = 0; i < links.length; i++) {
        if (links[i].linkClickListener) {
            links[i].removeEventListener('click', links[i].linkClickListener);
        }
        links[i].linkClickListener = linkClick; // Store the reference
        links[i].addEventListener('click', links[i].linkClickListener, false);
    }
};

//(function () {
//getHTML('pages/home');
//})();
