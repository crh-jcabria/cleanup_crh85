const menuBtn = document.querySelector('.menu');
const hamburger = document.querySelector('.menu-burger');
const hamburgerText = document.querySelector('.menu-burger-text');
const nav = document.querySelector('.nav');

let showMenu = false;
hamburgerText.innerHTML = 'Menu';

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        hamburger.classList.add('open');
        nav.classList.add('open');
        
        hamburgerText.innerHTML = 'Close';
        
        showMenu = true;
    } else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
       
        hamburgerText.innerHTML = 'Menu';

        showMenu = false;
    }
}