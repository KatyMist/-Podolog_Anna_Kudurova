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

                // закрываем все
                this.categories.forEach(c => {
                    c.classList.remove('is-open');
                    c.querySelector('.services__items')?.classList.remove('is-open');
                    c.querySelector('.services__category-btn')?.setAttribute('aria-expanded', 'false');
                });

                // открываем текущий если был закрыт
                if (!isOpen) {
                    category.classList.add('is-open');
                    items?.classList.add('is-open');
                    btn.setAttribute('aria-expanded', 'true');
                }
            });
        });
    }
}