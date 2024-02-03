'use strict';

const HOSTING_PATH = 'https://foocoding-portfolio-server.onrender.com';

const initializeContactForm = () => {
    const contactForm = document.getElementById('js-contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            submitContactForm(contactForm);
        });
    }
};

const submitContactForm = async (contactForm) => {
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');

    const data = {
        name: name,
        email: email,
        phone: phone,
        message: message,
        siteId: 'Iryna',
    };

    fetch(HOSTING_PATH + '/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then((response) => {
        if (response.ok) {
            contactForm.reset();
            const snackbar = document.getElementById('snackbar');
            snackbar.className = 'show snackbar--green';
            setTimeout(function () {
                snackbar.className = '';
            }, 3000);
        }
    });
};

const getAllContactForms = async () => {
    return fetch(HOSTING_PATH + '/contacts?siteId=Iryna', {
        method: 'GET',
    });
};
