const menuBtn = document.querySelector('.menu');
const hamburger = document.querySelector('.menu-burger');
const hamburgerText = document.querySelector('.menu-burger-text');
const nav = document.querySelector('.nav');
const backToTop = document.getElementById('backToTop');

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


// window.addEventListener('scroll', function() {
//     if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         backToTop.style.display = 'block';
//     } else {
//         backToTop.style.display = 'none';
//     }
// })

// backToTop.addEventListener('click', function() {
//     window.scrollTo(0, 0);
// })


$(window).scroll(function() {
    if ($(this).scrollTop() >= 20) {
        $('#backToTop').fadeIn(400);
    } else {
        $('#backToTop').fadeOut(400);
    }
});

$('#backToTop').click(function() {
    $('body, html').animate({
        scrollTop: 0
    }, 500);
});