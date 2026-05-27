export default class Cursor {
    constructor() {
        this.cursor = document.getElementById('cursor');
        this.initMove();
        this.initHover();
    }

    initMove() {
        document.addEventListener('mousemove', (e) => {
            this.cursor.style.left = `${e.clientX}px`;
            this.cursor.style.top = `${e.clientY}px`;
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