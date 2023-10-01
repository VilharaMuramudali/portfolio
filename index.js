
/***********************menu icon bar***************************/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/******************Scroll sections active link**************************/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.header .navbar a');

function handleScroll() {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
            document.querySelector('.header .navbar a[href*="' + id + '"]').classList.add('active');
        }
    });

    /*Sticky navbar*/
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);
}

/* Attach the scroll event handler to the window */
window.addEventListener('scroll', handleScroll);


/*------------Dark Light Mode------------------*/
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () =>{
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode')
}

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration:1000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container , .portfolio-box, .contact form',{ origin: 'bottom' });
ScrollReveal().reveal('.home-content, .about-img, .heading', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p,  .about-content', { origin: 'right' });



/***********************read more in servises***************************/

    const readMoreButtons = document.querySelectorAll('.read-more');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();

            const hiddenParagraph = this.previousElementSibling; // Get the previous sibling, which is the hidden paragraph

            if (hiddenParagraph) {
                hiddenParagraph.classList.toggle('visible');
                this.textContent = hiddenParagraph.classList.contains('visible') ? 'Show Less' : 'Read More';
            }
        });
    });


