const hamburger = document.querySelector('.hamburger-lines');
const menuItems = document.querySelector('.menu-items');

hamburger.addEventListener('click', () => {
    menuItems.classList.toggle('active');
});

// Scroll Animations
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    observer.observe(section);
});

// Form Submission
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Thank you for contacting me! I will get back to you soon.');
});