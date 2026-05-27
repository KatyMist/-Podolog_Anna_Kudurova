export default class Header {
    constructor() {
        this.burger  = document.querySelector('.burger');
        this.nav     = document.querySelector('.header__nav');
        this.links   = document.querySelectorAll('.header__nav-link');
        this.line    = document.querySelector('.header__inner');

        this.initBurger();
        this.initLine();
        this.initResize();
    }

    initBurger() {
        this.burger?.addEventListener('click', () => {
            const isOpen = this.nav.classList.toggle('is-open');
            this.burger.setAttribute('aria-expanded', String(isOpen));
            this.burger.setAttribute('aria-label', isOpen ? 'Закрыть меню' : 'Открыть меню');
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });

        this.links.forEach(link => {
            link.addEventListener('click', () => {
                this.nav.classList.remove('is-open');
                this.burger?.setAttribute('aria-expanded', 'false');
                this.burger?.setAttribute('aria-label', 'Открыть меню');
                document.body.style.overflow = '';
            });
        });
    }

    initLine() {
        window.addEventListener('load', () => {
            const activeLink = document.querySelector('.header__nav-link.is-active');
            this.updateLine(activeLink);
        });

        this.links.forEach(link => {
            link.addEventListener('click', () => {
                this.links.forEach(l => l.classList.remove('is-active'));
                link.classList.add('is-active');
                this.updateLine(link);
            });
        });
    }

    updateLine(activeLink) {
        if (!this.line || !activeLink) return;

        const innerRect = document.querySelector('.header__inner').getBoundingClientRect();
        const linkRect  = activeLink.getBoundingClientRect();

        this.line.style.setProperty('--line-width',  `${linkRect.left  - innerRect.left}px`);
        this.line.style.setProperty('--line-width', `${linkRect.width}px`);
    }

    initResize() {
        window.addEventListener('resize', () => {
            const current = document.querySelector('.header__nav-link.is-active');
            this.updateLine(current);
        });
    }
}