export default class Cursor {
    constructor() {
        // Не инициализировать cursor на сенсорных устройствах
        if (!window.matchMedia('(pointer: fine)').matches) {
            return;
        }

        this.cursor = document.getElementById('cursor');
        if (!this.cursor) return; // Подстраховка, если элемента нет

        this.initMove();
        this.initHover();
    }

    initMove() {
        document.addEventListener('mousemove', (e) => {
            const size = 12;
            this.cursor.style.transform = `translate(${e.clientX - size / 2}px, ${e.clientY - size / 2}px)`;
        });
    }

    initHover() {
        const targets = document.querySelectorAll('a, button, label, .hero__card');

        targets.forEach(el => {
            el.addEventListener('mouseenter', () => {
                this.cursor.classList.add('cursor--hover');
            });
            el.addEventListener('mouseleave', () => {
                this.cursor.classList.remove('cursor--hover');
            });
        });
    }
}