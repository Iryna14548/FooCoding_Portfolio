const initializeAdminPage = () => {
    const adminContent = document.getElementById('js-adminContent');

    if (adminContent) {
        getAllContactForms().then(async (response) => {
            const contactForms = await response.json();
            if (contactForms.length > 0) {
                // adminContent.innerHTML = '';
                contactForms.forEach((form, index) => {
                    if (index < 12) {
                        adminContent.innerHTML += `
                        <div class="admin__form">
                            <h2 class="admin-form-header">${form.name}</h2>
                            <p>${form.email}</p>
                            <p>${form.phone}</p>
                            <p>${form.message}</p>
                        </div>
                    `;
                    }
                });
            }
        });
    }
};
