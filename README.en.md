<div align="center">

[Русский](README.md) · **English**

# Podologist Anna Kudurova — Business Card Website

**School & Studio of Podology and Healthy Aesthetics · Ulyanovsk, Russia**

[![Website](https://img.shields.io/badge/website-annakudurova.ru-2f7bd8?style=for-the-badge)](https://annakudurova.ru/)
[![Portfolio](https://img.shields.io/badge/author-Ekaterina_Tumanova-1b2a4a?style=for-the-badge)](https://katymist.github.io/Portfolio/)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=flat-square&logo=sass&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=flat-square&logo=githubpages&logoColor=white)

<br>

<a href="https://annakudurova.ru/">
  <img src="https://github.com/user-attachments/assets/59f941ab-b08f-426e-847b-b357e848c2cc" alt="Home page on desktop and smartphone" width="100%">
</a>

</div>

<br>

> [!NOTE]
> **About the project.** This website was built as a learning project on a pro bono basis: for me, it was hands-on practice with a real client and a real task; for the studio, it is a ready-made website at no development cost.
> All photos, texts and materials about the studio belong to Anna Kudurova. The markup and scripts are my own learning work.

---

## Contents

- [About](#about)
- [Screenshots](#screenshots)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Running Locally](#running-locally)
- [Author](#author)

## About

A multi-page business card website for a private podologist and instructor. Its goal is to introduce the specialist, present her services and real treatment results, and guide visitors to book an appointment.

> The website itself is in Russian.

| Page | Content |
|---|---|
| [Home](https://annakudurova.ru/) | Hero section, key benefits, service areas, before/after examples |
| [About](https://annakudurova.ru/about.html) | The specialist's story, teaching, professional activities |
| [Services](https://annakudurova.ru/services.html) | Podology, pedicure, manicure, training — in expandable sections |
| [Cases](https://annakudurova.ru/cases.html) | Real cases: problem → solution → result, before/after slider |
| [Contacts](https://annakudurova.ru/contacts.html) | Messengers, phone, address, working hours, map |
| Privacy Policy, 404 | Service pages |

## Screenshots

<details open>
<summary><b>Home</b></summary>
<br>
<img src="https://github.com/user-attachments/assets/c5a5ece0-4bd1-4b46-9a65-eb8dbe173981" alt="Home page" width="100%">
</details>

<details>
<summary><b>About</b></summary>
<br>
<img src="https://github.com/user-attachments/assets/ca5e65f5-28f5-416e-9268-fdcf40d92ef0" alt="About page" width="100%">
</details>

<details>
<summary><b>Services</b></summary>
<br>
<img src="https://github.com/user-attachments/assets/c7d8e370-5d76-4ff0-a8f9-f84f0282e17e" alt="Services page with an expanded category" width="100%">
</details>

<details>
<summary><b>Cases</b> (medical before/after photos)</summary>
<br>
<img src="https://github.com/user-attachments/assets/f5fa639e-2b90-4cde-a801-85ce71017756" alt="Cases page with before/after slider" width="100%">
</details>

<details>
<summary><b>404 Page</b></summary>
<br>
<img src="https://github.com/user-attachments/assets/57dc8ff0-e7e7-4195-826b-1055be18696d" alt="404 page" width="100%">
</details>

### Mobile Version

<img src="https://github.com/user-attachments/assets/b8206fa9-0235-4e7b-93e9-5033bfa685a3" alt="Mobile version: home, menu, cases, about" width="100%">

## Features

- **Responsive layout** — from smartphones to wide screens, burger menu on mobile
- **Before/after slider** — compare photos by dragging the divider, plus a gallery for multi-photo cases
- **Services accordion** — with direct links to a category (`services.html?category=podology`)
- **Preloader** with a progress indicator
- **Custom cursor** — only on devices with a mouse, disabled on touch screens
- **Cookie banner** — consent is remembered for a year, dismissal for the session
- **SEO** — meta tags, Open Graph, Schema.org `LocalBusiness` markup, `sitemap.xml`, `robots.txt`, canonical URLs
- **Accessibility** — `aria` attributes on the menu and interactive elements, `alt` text on images
- **Analytics** — Yandex.Metrica, privacy policy page
- **Custom domain** via GitHub Pages

## Tech Stack

| | |
|---|---|
| Markup | HTML5, semantic tags |
| Styles | SCSS (Dart Sass): variables, mixins, media helpers, BEM blocks |
| Scripts | Vanilla JavaScript, ES modules, no frameworks |
| Fonts | Cormorant Garamond (self-hosted, `woff2`) |
| Hosting | GitHub Pages + `annakudurova.ru` domain |

## Project Structure

```text
├── index.html            # Home
├── about.html            # About
├── services.html         # Services
├── cases.html            # Cases
├── contacts.html         # Contacts
├── privacy.html          # Privacy Policy
├── 404.html
├── styles/
│   ├── main.scss         # Entry point
│   ├── _variables.scss
│   ├── helpers/          # Mixins, functions, breakpoints
│   └── blocks/           # Block styles (header, hero, cases, ...)
├── scripts/
│   ├── main.js           # Initialization + preloader
│   ├── header.js         # Menu and burger
│   ├── services.js       # Services accordion
│   ├── cases.js          # Before/after slider and gallery
│   ├── cookies.js        # Cookie banner
│   └── cursor.js         # Custom cursor
├── images/  icons/  fonts/
└── sitemap.xml  robots.txt  CNAME
```

## Running Locally

```bash
git clone https://github.com/KatyMist/-Podolog_Anna_Kudurova.git
cd -- -Podolog_Anna_Kudurova
npm install

# compile styles
npm run sass          # once
npm run sass:watch    # watch for changes

# local server (the project uses absolute paths, so open it via a server, not as a file)
npx serve .
```

## Author

**Ekaterina Tumanova** — Frontend Developer & Designer

[Portfolio](https://katymist.github.io/Portfolio/) · [GitHub](https://github.com/KatyMist)

<div align="center">
<sub>A learning project built pro bono · © Anna Kudurova — photos and materials</sub>
</div>
