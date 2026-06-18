export default class Cursor {
    constructor() {
        // Не инициализировать cursor на сенсорных устройствах
        if (!window.matchMedia('(pointer: fine)').matches) {
            return;
        }

        this.cursor = document.getElementById('cursor');
        if (!this.cursor) return;

        // ✅ КРИТИЧЕСКОЕ ИСПРАВЛЕНИЕ: Скрыть браузерный курсор на всём документе
        document.body.style.cursor = 'none';

        this.initMove();
        this.initHover();
        this.initVisibility(); // НОВОЕ: контролировать видимость кастомного курсора
    }

    initMove() {
        document.addEventListener('mousemove', (e) => {
            const size = 12;
            this.cursor.style.opacity = '1'; // Показать при движении
            this.cursor.style.transform = `translate(${e.clientX - size / 2}px, ${e.clientY - size / 2}px)`;
        });
    }

    initHover() {
        // Расширенный список элементов для hover
        const targets = document.querySelectorAll('a, button, label, .hero__card, input, textarea, select, [role="button"]');

        targets.forEach(el => {
            el.addEventListener('mouseenter', () => {
                this.cursor.classList.add('cursor--hover');
            });
            el.addEventListener('mouseleave', () => {
                this.cursor.classList.remove('cursor--hover');
            });
        });
    }

    // Контроль видимости курсора в разных ситуациях
    initVisibility() {
        // Скрыть курсор, когда мышь уходит за пределы окна браузера
        document.addEventListener('mouseleave', () => {
            this.cursor.style.opacity = '0';
        });

        document.addEventListener('mouseenter', () => {
            this.cursor.style.opacity = '1';
        });

        // Скрыть при фокусе на текстовом поле (для удобства ввода)
        document.addEventListener('focusin', (e) => {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
                this.cursor.style.opacity = '0';
            }
        });

        document.addEventListener('focusout', () => {
            this.cursor.style.opacity = '1';
        });
    }
}