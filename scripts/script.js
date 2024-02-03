'use strict';

async function getHTML(url) {
    try {
        const response = await fetch(window.location.href + url, { method: 'GET' });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const contentDiv = document.getElementById('content');
        const responseHtml = await response.text();
        contentDiv.innerHTML = responseHtml;

        initializePage();

        window.scrollTo({ top: 0, behavior: 'smooth' });
        //window.history.pushState({ html: response.html, pageTitle: response.pageTitle }, '', url);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

getHTML('/pages/home');

function linkClick(event) {
    event.preventDefault();
    const pathName = new URL(this.href).pathname;

    document.querySelectorAll('.js-link').forEach((item) => {
        item.classList.remove('active');
    });
    document.querySelectorAll(`[href*="${pathName}"]`).forEach((item) => {
        item.classList.add('active');
    });

    getHTML(pathName);
}

const initializeClickEvents = () => {
    const links = document.getElementsByClassName('js-link');
    for (let i = 0; i < links.length; i++) {
        links[i].removeEventListener('click', linkClick);
        links[i].addEventListener('click', linkClick, false);
    }
};

const initializePage = () => {
    initializeClickEvents();

    if (initializeLoginForm) {
        initializeLoginForm();
    }

    if (initializeContactForm) {
        initializeContactForm();
    }

    if (initializeAdminPage) {
        initializeAdminPage();
    }
};
