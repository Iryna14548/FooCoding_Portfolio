// Login Form
const validUsername = 'admin';
const validPassword = 'password';

const initializeLoginForm = () => {
    const loginForm = document.getElementById('js-loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(loginForm);
            const username = formData.get('username');
            const password = formData.get('password');
            console.log(username, password);

            if (username === validUsername && password === validPassword) {
                getHTML('/pages/admin');
                const loginButton = document.getElementById('js-loginButton');
                loginButton.innerHTML = 'Admin';
                loginButton.href = '/pages/admin';
            } else {
                const snackbar = document.getElementById('snackbar');
                snackbar.className = 'show';
                setTimeout(function () {
                    snackbar.className = '';
                }, 3000);
            }
        });
    }
};
