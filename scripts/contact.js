'use strict';

const hostingPath = 'http://localhost:3006';

const initializeContactForm = () => {
    const contactForm = document.getElementById('js-contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
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
            };

            fetch(hostingPath + '/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            }).then(async (response) => {
                // ToDo:
                // Contact was submitted OK.
            });
        });
    }
};

const submitContactForm = async (event) => {
    // ToDo
};

const getAllContactForms = async () => {
    // ToDo
};
