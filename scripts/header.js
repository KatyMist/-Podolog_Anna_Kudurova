export default class Header {
    constructor() {
        this.burger  = document.querySelector('.burger');
        this.nav     = document.querySelector('.header__nav');
        this.links   = document.querySelectorAll('.header__nav-link');
        this.line    = document.querySelector('.header__inner');

        this.initBurger();
        this.initLine();
        this.initResize();
        this.initScroll();  // Метод для закрытия меню на скролл
    }

    initBurger() {
        if (!this.burger || !this.nav) return;

        this.burger.addEventListener('click', event => {
            const isOpen = !this.nav.classList.contains('is-open');
            this.setMenuOpen(isOpen);

            if (isOpen && event.detail === 0) {
                this.links[0]?.focus({ preventScroll: true });
            }
        });

        this.links.forEach(link => {
            link.addEventListener('click', () => {
                if (this.nav.classList.contains('is-open')) this.setMenuOpen(false);
            });
        });

        document.addEventListener('click', event => {
            if (this.nav.classList.contains('is-open') &&
                !this.nav.contains(event.target) && !this.burger.contains(event.target)) {
                this.setMenuOpen(false);
            }
        });

        document.addEventListener('keydown', event => {
            if (event.key === 'Escape' && this.nav.classList.contains('is-open')) {
                this.setMenuOpen(false);
                this.burger.focus();
            }
        });
    }

    setMenuOpen(isOpen) {
        this.nav.classList.toggle('is-open', isOpen);
        this.burger.setAttribute('aria-expanded', String(isOpen));
        this.burger.setAttribute('aria-label', isOpen ? 'Закрыть меню' : 'Открыть меню');
        document.body.style.overflow = isOpen ? 'hidden' : '';
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

        // Первая переменная отвечает за позицию (слева), вторая — за ширину
        this.line.style.setProperty('--line-left',  `${linkRect.left - innerRect.left}px`); 
        this.line.style.setProperty('--line-width', `${linkRect.width}px`);
    }

    // Дебаунс
    debounce(func, delay) {
        let timeoutId;
        return function (...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func.apply(this, args), delay);
        };
    }

    // Дебаунс для resize
    initResize() {
        window.addEventListener('resize', 
            this.debounce(() => {
                if (this.nav?.classList.contains('is-open') && getComputedStyle(this.burger).display === 'none') {
                    this.setMenuOpen(false);
                }
                const current = document.querySelector('.header__nav-link.is-active');
                this.updateLine(current);
            }, 200)
        );
    }

    // Закрытие меню на скролл
    initScroll() {
        window.addEventListener('scroll', () => {
            if (this.nav && this.nav.classList.contains('is-open')) {
                this.setMenuOpen(false);
            }
        });
    }
}