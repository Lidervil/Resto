/* import './style.css';
import { navbar, main, footer} from './layout';
import cta from './home.js';
import menu from './menu.js';

const content = document.getElementsByClassName('content')[0];

content.appendChild(navbar());
content.appendChild(main());
content.appendChild(footer());

const newMain = document.getElementsByClassName('main')[0];
const linkone = document.getElementsByClassName('linkone')[0];
const linktwo = document.getElementsByClassName('linktwo')[0];
const linkthree = document.getElementsByClassName('linkthree')[0];

linkone.addEventListener('click', () => homeFunction());
linktwo.addEventListener('click', () => menuFunction());

function menuFunction() {
    wipe();
    const imgTwo = document.createElement('div');
    imgTwo.classList.add('img-2');
    
    newMain.appendChild(menu());
    newMain.appendChild(imgTwo);
}

function homeFunction() {
    wipe();
    const img = document.createElement('div');
    img.classList.add('img');
    newMain.appendChild(img);
    newMain.appendChild(cta());
}

function wipe() {
    newMain.innerHTML = '';
}

homeFunction(); */