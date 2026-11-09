const interactive = 'a, button, label, .hero__card, input, textarea, select, [role="button"]';
const editable = 'input:not([type="button"]):not([type="submit"]), textarea, [contenteditable="true"]';

export default class Cursor {
    constructor() {
        this.cursor = document.getElementById('cursor');
        if (!this.cursor) return;

        this.desktop = matchMedia('(min-width: 1024px) and (hover: hover) and (pointer: fine)');
        this.touch = matchMedia('(any-pointer: coarse)');
        this.frame = null;

        document.addEventListener('pointermove', event => this.move(event), { passive: true });
        document.documentElement.addEventListener('pointerleave', () => this.hide());
        document.addEventListener('pointercancel', () => this.hide());
        window.addEventListener('blur', () => this.hide());
        this.desktop.addEventListener('change', () => this.hide());
        this.touch.addEventListener('change', () => this.hide());
    }

    move(event) {
        if (!this.desktop.matches || this.touch.matches || event.pointerType !== 'mouse') {
            this.hide();
            return;
        }

        this.position = event;
        if (this.frame !== null) return;

        this.frame = requestAnimationFrame(() => {
            this.frame = null;
            const { clientX, clientY, target } = this.position;

            if (target.closest(editable)) {
                this.hide();
                return;
            }

            this.cursor.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
            this.cursor.classList.toggle('cursor--hover', Boolean(target.closest(interactive)));
            document.body.classList.add('has-custom-cursor');
        });
    }

    hide() {
        if (this.frame !== null) {
            cancelAnimationFrame(this.frame);
            this.frame = null;
        }

        document.body.classList.remove('has-custom-cursor');
    }
}
