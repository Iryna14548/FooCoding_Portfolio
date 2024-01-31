let burgerIcon = document.querySelector('.js-burger');
let closeIcon = document.querySelector('.js-close-icon');
let menu = document.querySelector('.menu');

if (burgerIcon) {
    burgerIcon.addEventListener('click', () => {
        closeIcon.classList.remove('hidden');
        menu.classList.add('visible');
        burgerIcon.classList.add('hidden');
    });
}

if (closeIcon) {
    closeIcon.addEventListener('click', () => {
        closeIcon.classList.add('hidden');
        menu.classList.remove('visible');
        burgerIcon.classList.remove('hidden');
    });
}

let menuListItem = document.querySelectorAll('.js-menu_list-items');

if (menuListItem.length > 0) {
    menuListItem.forEach((item) => {
        item.addEventListener('click', () => {
            closeIcon.classList.add('hidden');
            menu.classList.remove('visible');
            burgerIcon.classList.remove('hidden');
        });
    });
}
