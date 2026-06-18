import header from './header.js'
import cursor from './cursor.js';
import services from './services.js';
import cases from './cases.js';
import cookies from './cookies.js';

new header()
new cursor();
new services();
new cases();
new cookies();

// Preloader
const preloader = document.getElementById('preloader');
const bar = document.getElementById('preloaderBar');
const percent = document.getElementById('preloaderPercent');

if (preloader) {
    let progress = 0;

    const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            setTimeout(() => {
                preloader.classList.add('is-hidden');
            }, 300);
        }
        bar.style.width = progress + '%';
        percent.textContent = Math.floor(progress) + '%';
    }, 100);
}

//  Intersection Observer для fade-in
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('img, .results__card, .about-teaching__card').forEach(el => {
    observer.observe(el);
});