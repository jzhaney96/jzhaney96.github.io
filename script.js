const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const heroTitles = [
    "Authentic Caribbean Flavours",
    "Savor the Taste of the Islands",
    "Experience Caribbean Culinary Delights",
    "A Journey Through Caribbean Cuisine"
];

let index = 0;
const heroTitle = document.getElementById('hero-title');

setInterval(() => {
    index = (index + 1) % heroTitles.length;
    heroTitle.textContent = heroTitles[index];
}, 3000);

const cards = document.querySelectorAll('.card');
window.addEventListener('scroll', () => {
    cards.forEach(card => {
        const postition = card.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            card.classList.add('show');
        }
    });
});
    