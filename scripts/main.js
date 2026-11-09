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

function animateCaseStats() {
    const stats = document.querySelector('.cases-stats');
    if (!stats || matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const counters = Array.from(stats.querySelectorAll('[data-count]'), element => ({
        element,
        total: parseInt(element.textContent, 10)
    }));

    const observer = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const duration = 5000;

        function update(now) {
            const progress = Math.min(Math.max((now - start) / duration, 0), 1);
            const eased = 1 - (1 - progress) ** 2;

            counters.forEach(({ element, total }) => {
                element.textContent = Math.floor(total * eased) + '+';
            });

            if (progress < 1) requestAnimationFrame(update);
        }

        requestAnimationFrame(update);
    }, { threshold: 0.5 });

    observer.observe(stats);
}

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
                animateCaseStats();
            }, 300);
        }
        bar.style.width = progress + '%';
        percent.textContent = Math.floor(progress) + '%';
    }, 100);
} else {
    animateCaseStats();
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

document.querySelectorAll('img').forEach(el => {
    observer.observe(el);
});

const revealTargets = [
    '.why__title',
    '.why__item',
    '.about-hero__image-wrap',
    '.about-hero__content > *',
    '.about-teaching__title',
    '.about-teaching__desc',
    '.about-teaching__card > h3',
    '.about-teaching__card > p',
    '.about-pro__content > *',
    '.about-pro__image',
    '.about-trust__title',
    '.about-trust__line',
    '.about-trust__item',
    '.about-approach__left > *',
    '.about-approach__right > *'
];

document.querySelectorAll(revealTargets.join(', ')).forEach(el => {
    el.classList.add('why-reveal-ready');
    observer.observe(el);
});

document.querySelectorAll('[data-carousel]').forEach(carousel => {
    const rail = carousel.querySelector('.help__scroll');
    const controls = carousel.querySelector('.help__controls');
    const previous = controls.querySelector('[data-carousel-step="-1"]');
    const next = controls.querySelector('[data-carousel-step="1"]');
    const cards = [...rail.querySelectorAll('.help__card')];

    const updateControls = () => {
        const maxScroll = rail.scrollWidth - rail.clientWidth;
        controls.hidden = maxScroll <= 1;
        previous.disabled = rail.scrollLeft <= 1;
        next.disabled = rail.scrollLeft >= maxScroll - 1;
    };

    controls.addEventListener('click', event => {
        const button = event.target.closest('[data-carousel-step]');
        if (!button || button.disabled) return;

        const step = cards[1].getBoundingClientRect().left - cards[0].getBoundingClientRect().left;
        rail.scrollBy({
            left: step * Number(button.dataset.carouselStep),
            behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'
        });
    });

    rail.addEventListener('scroll', updateControls, { passive: true });
    new ResizeObserver(updateControls).observe(rail);
    updateControls();

    cards.forEach((card, index) => {
        card.classList.add('help__card--reveal');
        card.style.setProperty('--help-reveal-delay', `${(index % 3) * 100}ms`);
        observer.observe(card);
    });
});
