// ═══════════════════════════════════════════════════════════
// Cookies Banner - красивый баннер согласия
// ═══════════════════════════════════════════════════════════

class CookiesBanner {
    constructor() {
        this.cookieName = 'cookies-accepted';
        this.cookieDays = 365;
        this.init();
    }

    init() {
        if (this.getCookie(this.cookieName)) {
            return;
        }

        this.createBanner();
        this.attachEvents();
    }

    createBanner() {
        const banner = document.createElement('div');
        banner.id = 'cookies-banner';
        banner.className = 'cookies-banner';
        banner.innerHTML = `
            <div class="cookies-banner__inner container">
                <div class="cookies-banner__icon">
                    <img src="./icons/cookie.svg" alt="Cookie" width="32" height="32">
                </div>

                <div class="cookies-banner__content">
                    <p class="cookies-banner__text">
                        Продолжая пользоваться сайтом, вы соглашаетесь с использованием <a href="./privacy.html" class="cookies-banner__link">cookie-файлов</a> и обработкой обезличенных данных через Яндекс.Метрику согласно Политике конфиденциальности
                    </p>
                </div>

                <div class="cookies-banner__actions">
                    <button id="cookies-accept-btn" class="cookies-banner__btn">
                        Согласен
                    </button>
                    <button id="cookies-close-btn" class="cookies-banner__close" aria-label="Закрыть">
                        <img src="./icons/no.svg" alt="Закрыть">
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(banner);
    }

    attachEvents() {
        const acceptBtn = document.getElementById('cookies-accept-btn');
        const closeBtn = document.getElementById('cookies-close-btn');
        const moreBtn = document.getElementById('cookies-more-btn');

        if (acceptBtn) {
            acceptBtn.addEventListener('click', () => this.acceptCookies());
        }

        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.closeBanner());
        }

        if (moreBtn) {
            moreBtn.addEventListener('click', () => {
                window.location.href = './privacy.html';
            });
        }
    }

    acceptCookies() {
        this.setCookie(this.cookieName, 'true', this.cookieDays);
        this.closeBanner();
    }

    closeBanner() {
        const banner = document.getElementById('cookies-banner');
        if (banner) {
            banner.classList.add('cookies-banner--hidden');
            setTimeout(() => banner.remove(), 300);
        }
    }

    setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = 'expires=' + date.toUTCString();
        document.cookie = `${name}=${value};${expires};path=/;SameSite=Lax`;
    }

    getCookie(name) {
        const nameEQ = name + '=';
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            cookie = cookie.trim();
            if (cookie.indexOf(nameEQ) === 0) {
                return cookie.substring(nameEQ.length);
            }
        }
        return null;
    }
}

export default CookiesBanner;