<div align="center">

# Подолог Анна Кудурова — сайт-визитка

**Школа-студия подологии и здоровой эстетики · Ульяновск**

[![Сайт](https://img.shields.io/badge/сайт-annakudurova.ru-2f7bd8?style=for-the-badge)](https://annakudurova.ru/)
[![Портфолио](https://img.shields.io/badge/автор-Екатерина_Туманова-1b2a4a?style=for-the-badge)](https://katymist.github.io/Portfolio/)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=flat-square&logo=sass&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=flat-square&logo=githubpages&logoColor=white)

<br>

<a href="https://annakudurova.ru/">
  <img src="https://github.com/user-attachments/assets/59f941ab-b08f-426e-847b-b357e848c2cc" alt="Главная страница сайта на десктопе и смартфоне" width="100%">
</a>

</div>

<br>

> [!NOTE]
> **О проекте.** Сайт создан как учебный проект на безвозмездной основе: для меня это практика на реальной задаче с живым заказчиком, для студии — готовый сайт без оплаты разработки.
> Фотографии, тексты и материалы о работе студии принадлежат Анне Кудуровой. Код вёрстки и скриптов — моя учебная работа.

---

## Содержание

- [О сайте](#о-сайте)
- [Скриншоты](#скриншоты)
- [Возможности](#возможности)
- [Технологии](#технологии)
- [Структура проекта](#структура-проекта)
- [Запуск локально](#запуск-локально)
- [Автор](#автор)

## О сайте

Многостраничный сайт-визитка для частного подолога и инструктора. Задача — рассказать о специалисте, показать услуги и реальные результаты работы и привести клиента к записи.

| Страница | Что на ней |
|---|---|
| [Главная](https://annakudurova.ru/) | Первый экран, преимущества, направления услуг, примеры «до / после» |
| [О себе](https://annakudurova.ru/about.html) | История специалиста, преподавание, профессиональная деятельность |
| [Услуги](https://annakudurova.ru/services.html) | Подология, педикюр, маникюр, обучение — раскрывающимися блоками |
| [Кейсы](https://annakudurova.ru/cases.html) | Реальные случаи: проблема → решение → результат, слайдер «до / после» |
| [Контакты](https://annakudurova.ru/contacts.html) | Мессенджеры, телефон, адрес, часы работы, карта |
| Политика конфиденциальности, 404 | Служебные страницы |

## Скриншоты

<details open>
<summary><b>Главная</b></summary>
<br>
<img src="https://github.com/user-attachments/assets/c5a5ece0-4bd1-4b46-9a65-eb8dbe173981" alt="Главная страница" width="100%">
<img src="https://github.com/user-attachments/assets/76c5db0c-fda8-45cb-867f-725351179ac4" alt="Главная страница" width="100%">
<img src="docs/screenshots/results.jpg" alt="Блоки услуг и результатов до и после" width="100%">
</details>

<details>
<summary><b>О себе</b></summary>
<br>
<img src="docs/screenshots/about.jpg" alt="Страница О себе" width="100%">
</details>

<details>
<summary><b>Услуги</b></summary>
<br>
<img src="docs/screenshots/services.jpg" alt="Страница услуг с раскрытой категорией" width="100%">
</details>

<details>
<summary><b>Кейсы</b> (медицинские фото до / после)</summary>
<br>
<img src="docs/screenshots/cases.jpg" alt="Страница кейсов со слайдером до и после" width="100%">
</details>

<details>
<summary><b>Страница 404</b></summary>
<br>
<img src="docs/screenshots/404.jpg" alt="Страница 404" width="100%">
</details>

### Мобильная версия

<img src="docs/screenshots/mobile.jpg" alt="Мобильная версия: главная, меню, кейсы, о себе" width="100%">

## Возможности

- **Адаптивная вёрстка** — от смартфона до широкого монитора, бургер-меню на мобильных
- **Слайдер «до / после»** — сравнение фото перетаскиванием разделителя, плюс галерея для кейсов с несколькими снимками
- **Аккордеон услуг** — с прямыми ссылками на категорию (`services.html?category=podology`)
- **Прелоадер** с индикатором загрузки
- **Кастомный курсор** — только на устройствах с мышью, на тач-экранах отключается
- **Баннер cookies** — согласие запоминается на год, закрытие — на сессию
- **SEO** — мета-теги, Open Graph, разметка Schema.org `LocalBusiness`, `sitemap.xml`, `robots.txt`, canonical
- **Доступность** — `aria`-атрибуты у меню и интерактивных элементов, `alt` у изображений
- **Аналитика** — Яндекс.Метрика, страница политики конфиденциальности
- **Собственный домен** через GitHub Pages

## Технологии

| | |
|---|---|
| Разметка | HTML5, семантические теги |
| Стили | SCSS (Dart Sass): переменные, миксины, медиа-хелперы, блоки по БЭМ |
| Скрипты | Vanilla JavaScript, ES-модули, без фреймворков |
| Шрифты | Cormorant Garamond (локально, `woff2`) |
| Хостинг | GitHub Pages + домен `annakudurova.ru` |

## Структура проекта

```text
├── index.html            # Главная
├── about.html            # О себе
├── services.html         # Услуги
├── cases.html            # Кейсы
├── contacts.html         # Контакты
├── privacy.html          # Политика конфиденциальности
├── 404.html
├── styles/
│   ├── main.scss         # Точка входа
│   ├── _variables.scss
│   ├── helpers/          # Миксины, функции, брейкпоинты
│   └── blocks/           # Стили блоков (header, hero, cases, ...)
├── scripts/
│   ├── main.js           # Инициализация + прелоадер
│   ├── header.js         # Меню и бургер
│   ├── services.js       # Аккордеон услуг
│   ├── cases.js          # Слайдер до/после и галерея
│   ├── cookies.js        # Баннер cookies
│   └── cursor.js         # Кастомный курсор
├── images/  icons/  fonts/
└── sitemap.xml  robots.txt  CNAME
```

## Запуск локально

```bash
git clone https://github.com/KatyMist/-Podolog_Anna_Kudurova.git
cd -- -Podolog_Anna_Kudurova
npm install

# компиляция стилей
npm run sass          # один раз
npm run sass:watch    # с отслеживанием изменений

# локальный сервер (пути в проекте абсолютные, поэтому нужен сервер, а не открытие файла)
npx serve .
```

## Автор

**Екатерина Туманова** — Frontend Developer & Designer

[Портфолио](https://katymist.github.io/Portfolio/) · [GitHub](https://github.com/KatyMist)

<div align="center">
<sub>Учебный проект, выполненный на безвозмездной основе · © Анна Кудурова — фото и материалы</sub>
</div>
