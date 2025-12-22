/* ===================================================
   MAIN JS FOR INTERACTIONS
=================================================== */

/* ===== STICKY NAVBAR ===== */
const header = document.querySelector('.main-header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});


/* ===== HAMBURGER MENU TOGGLE ===== */
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

if(hamburger){
    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('active');
        hamburger.classList.toggle('open'); // Optional: animate hamburger
    });
}


/* ===== SCROLL ANIMATIONS ===== */
const faders = document.querySelectorAll('.fade-in');
const slidersLeft = document.querySelectorAll('.slide-left');
const slidersRight = document.querySelectorAll('.slide-right');
const zooms = document.querySelectorAll('.zoom-in');

const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));
slidersLeft.forEach(slider => appearOnScroll.observe(slider));
slidersRight.forEach(slider => appearOnScroll.observe(slider));
zooms.forEach(zoom => appearOnScroll.observe(zoom));


/* ===== OPTIONAL: FORM VALIDATION ===== */
const forms = document.querySelectorAll('form');

forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        const name = form.querySelector('#name').value.trim();
        const email = form.querySelector('#email').value.trim();
        if(name === "" || email === ""){
            e.preventDefault();
            alert("Please fill in all required fields!");
        }
    });
});