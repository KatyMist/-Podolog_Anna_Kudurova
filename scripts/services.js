export default class Services {
    constructor() {
        document.querySelectorAll('.edu__card').forEach(card => this.initCourseCard(card));

        const category = new URLSearchParams(window.location.search).get('category');
        if (!category) return;

        const target = document.querySelector(`.services__category[data-category="${CSS.escape(category)}"]`);
        if (!target) return;

        requestAnimationFrame(() => {
            target.scrollIntoView({ block: 'start' });
        });
    }

    initCourseCard(card) {
        const front = card.querySelector('.edu__card-front');
        const back = card.querySelector('.edu__card-back');
        const open = front.querySelector('[data-course-open]');
        const close = back.querySelector('[data-course-close]');
        let openedByHover = false;

        const flip = (showDetails, moveFocus = false) => {
            card.classList.toggle('is-flipped', showDetails);
            front.inert = showDetails;
            back.inert = !showDetails;
            open.setAttribute('aria-expanded', String(showDetails));
            if (moveFocus) {
                const focusTarget = showDetails ? close : open;
                focusTarget.focus({ preventScroll: true });
            }
        };

        back.inert = true;
        open.hidden = false;
        close.hidden = false;
        card.classList.add('is-flippable');

        open.addEventListener('click', () => flip(true, true));

        const closeDetails = () => {
            openedByHover = false;
            flip(false, true);
        };

        close.addEventListener('click', closeDetails);
        back.addEventListener('keydown', event => {
            if (event.key === 'Escape') closeDetails();
        });

        card.addEventListener('pointerenter', event => {
            if (event.pointerType !== 'mouse' || card.contains(document.activeElement) ||
                card.classList.contains('is-flipped')) return;

            openedByHover = true;
            flip(true);
        });

        card.addEventListener('pointerleave', () => {
            if (openedByHover && !back.contains(document.activeElement)) {
                openedByHover = false;
                flip(false);
            }
        });
    }
}
