// Cases - Слайдер до/после + галерея фото

class CaseImageToggle {
    constructor() {
        this.init();
    }

    init() {
        const wrappers = document.querySelectorAll('.case-item__image-wrapper');
        wrappers.forEach(wrapper => {
            if (!wrapper.closest('.case-item__slides')) {
                this.initBeforeAfter(wrapper);
            }
        });

        const galleries = document.querySelectorAll('.case-item__slides');
        galleries.forEach(slides => this.initGallery(slides));
    }

    // ─── Слайдер до/после ─────────────────────────────────

    initBeforeAfter(wrapper) {
        const toggle = wrapper.querySelector('.case-item__toggle');
        if (toggle) toggle.style.display = 'none';

        const images = wrapper.querySelectorAll('.case-item__image');
        if (images.length < 2) return;

        const beforeImg = images[0];
        const afterImg = images[1];

        beforeImg.style.opacity = '1';
        beforeImg.style.transition = 'none';
        afterImg.style.opacity = '1';
        afterImg.style.transition = 'none';
        beforeImg.style.zIndex = '2';
        afterImg.style.zIndex = '1';
        beforeImg.style.clipPath = 'inset(0 50% 0 0)';

        const divider = document.createElement('div');
        divider.className = 'case-item__divider';
        divider.setAttribute('role', 'slider');
        divider.setAttribute('aria-label', 'Слайдер до/после');
        divider.setAttribute('tabindex', '0');
        divider.innerHTML = `
            <div class="case-item__divider-line"></div>
            <div class="case-item__divider-handle">
                <img src="./icons/arrow.png" alt="" width="30" height="30">
            </div>
        `;
        wrapper.appendChild(divider);
        divider.style.left = '50%';

        let isDragging = false;

        const updatePosition = (x) => {
            const rect = wrapper.getBoundingClientRect();
            let percent = ((x - rect.left) / rect.width) * 100;
            percent = Math.min(Math.max(percent, 2), 98);
            beforeImg.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
            divider.style.left = `${percent}%`;
        };

        // Мышь и тач
        divider.addEventListener('mousedown', (e) => { isDragging = true; e.preventDefault(); });
        document.addEventListener('mouseup', () => { isDragging = false; });
        document.addEventListener('mousemove', (e) => { if (isDragging) updatePosition(e.clientX); });
        divider.addEventListener('touchstart', (e) => { isDragging = true; e.preventDefault(); });
        document.addEventListener('touchend', () => { isDragging = false; });
        document.addEventListener('touchmove', (e) => { if (isDragging) updatePosition(e.touches[0].clientX); });

        // Клавиатура
        divider.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                e.preventDefault();
                const rect = wrapper.getBoundingClientRect();
                const currentPercent = (divider.offsetLeft / wrapper.offsetWidth) * 100;
                const step = 2; // 2% за нажатие
                const newPercent = e.key === 'ArrowRight' 
                    ? Math.min(currentPercent + step, 98)
                    : Math.max(currentPercent - step, 2);
                
                const newX = rect.left + (newPercent / 100) * rect.width;
                updatePosition(newX);
            }
        });
    }

    // ─── Галерея фото ─────────────────────────────────────

    initGallery(slidesEl) {
        const caseItem = slidesEl.closest('.case-item__images');
        const slides = slidesEl.querySelectorAll('.case-item__slide');
        if (slides.length === 0) return;

        const prevBtn = caseItem.querySelector('.case-item__prev');
        const nextBtn = caseItem.querySelector('.case-item__next');
        const counter = caseItem.querySelector('.case-item__counter');

        let current = 0;

        const show = (index) => {
            slides.forEach(s => s.classList.remove('case-item__slide--active'));
            slides[index].classList.add('case-item__slide--active');
            if (counter) counter.textContent = `${index + 1} / ${slides.length}`;
        };

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                current = (current - 1 + slides.length) % slides.length;
                show(current);
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                current = (current + 1) % slides.length;
                show(current);
            });
        }

        show(0);
    }
}

export default CaseImageToggle;