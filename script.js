'use strict';

async function getHTML(url) {
    const response = await fetch(url);
    const HTML = await response.json();
    console.log(HTML);
}

const links = document.getElementsByClassName('link');
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener(
        'click',
        function (event) {
            event.preventDefault();
            getHTML(links[i].href);
        },
        false
    );
}
