export default class Services {
    constructor() {
        this.categories = document.querySelectorAll('.services__category');
        if (!this.categories.length) return;
        this.init();
    }

    init() {
        this.categories.forEach(category => {
            const btn = category.querySelector('.services__category-btn');
            const items = category.querySelector('.services__items');

            btn?.addEventListener('click', () => {
                const isOpen = category.classList.contains('is-open');

                this.categories.forEach(c => {
                    c.classList.remove('is-open');
                    c.querySelector('.services__items')?.classList.remove('is-open');
                    c.querySelector('.services__category-btn')?.setAttribute('aria-expanded', 'false');
                });

                if (!isOpen) {
                    category.classList.add('is-open');
                    items?.classList.add('is-open');
                    btn.setAttribute('aria-expanded', 'true');
                }
            });
        });

        // Раскрываем категорию из URL параметра
        const params = new URLSearchParams(window.location.search);
        const categoryParam = params.get('category');

        if (categoryParam) {
            const target = document.querySelector(`[data-category="${categoryParam}"]`);
            if (target) {
                const btn = target.querySelector('.services__category-btn');
                const items = target.querySelector('.services__items');
                target.classList.add('is-open');
                items?.classList.add('is-open');
                btn?.setAttribute('aria-expanded', 'true');

                setTimeout(() => {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        }
    }
}

