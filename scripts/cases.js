// ═══════════════════════════════════════════════════════════
// Cases - Переключение фото до/после
// ═══════════════════════════════════════════════════════════

class CaseImageToggle {
    constructor() {
        this.toggleButtons = document.querySelectorAll('.case-item__toggle');
        this.init();
    }

    init() {
        if (this.toggleButtons.length === 0) return;

        this.toggleButtons.forEach(button => {
            button.addEventListener('click', (e) => this.handleToggle(e));
        });
    }

    handleToggle(event) {
        const button = event.currentTarget;
        const imageWrapper = button.closest('.case-item__image-wrapper');
        
        if (!imageWrapper) return;

        const images = imageWrapper.querySelectorAll('.case-item__image');
        images.forEach(img => img.classList.toggle('case-item__image--active'));

        // Визуальный фидбэк
        button.classList.add('case-item__toggle--active');
        setTimeout(() => {
            button.classList.remove('case-item__toggle--active');
        }, 300);
    }
}

export default CaseImageToggle;