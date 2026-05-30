import header from './header.js'
import Cursor from './cursor.js';
import Services from './services.js';

new header()
new Cursor();
new Services();

// Плавный переход между страницами
document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    
    // только внутренние ссылки на другие страницы
    if (
        href &&
        !href.startsWith('#') &&
        !href.startsWith('http') &&
        !href.startsWith('tel') &&
        !href.startsWith('mailto') &&
        !link.hasAttribute('target')
    ) {
        link.addEventListener('click', e => {
            e.preventDefault();
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.3s ease';
            setTimeout(() => {
                window.location.href = href;
            }, 300);
        });
    }
});

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