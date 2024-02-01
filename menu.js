let burgerIcon = document.querySelector('.js-burger');
let closeIcon = document.querySelector('.js-close-icon');
let menu = document.querySelector('.menu');

function closeMobileMenu() {
    closeIcon.classList.add('hidden');
    menu.classList.remove('visible');
    burgerIcon.classList.remove('hidden');
}

function openMobileMenu() {
    closeIcon.classList.remove('hidden');
    menu.classList.add('visible');
    burgerIcon.classList.add('hidden');
}

if (burgerIcon) {
    burgerIcon.addEventListener('click', () => {
        openMobileMenu();
    });
}

if (closeIcon) {
    closeIcon.addEventListener('click', () => {
        closeMobileMenu();
    });
}

let mobileMenuItems = document.querySelectorAll('.js-menu_list-items');

if (mobileMenuItems.length > 0) {
    mobileMenuItems.forEach((item) => {
        item.addEventListener('click', () => {
            closeMobileMenu();
        });
    });
}

// let menuListItems = document.querySelectorAll('.js-link');

// if (menuListItems) {
//     menuListItems.forEach((item) => {
//         item.addEventListener('click', () => {
//             menuListItems.forEach((item) => {
//                 item.classList.remove('active');
//             });
//             item.classList.add('active');
//         });
//     });
// }
