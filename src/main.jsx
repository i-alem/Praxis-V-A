import './styles/main.css';
import { Navigation, initNavigation } from './components/Navigation.jsx';
import { Hero } from './components/Hero.jsx';
import { Services, initServices } from './components/Services.jsx';
import { Practice } from './components/Practice.jsx';
import { Footer } from './components/Footer.jsx';
import { initSmoothScrolling, initScrollAnimations } from './utils/animations.jsx';

function initMainPage() {
    const app = document.getElementById('app');
    if (!app) return;

    app.innerHTML = `
        ${Navigation()}
        <main>
            ${Hero()}
            ${Services()}
            ${Practice()}
        </main>
        ${Footer()}
    `;

    initNavigation();
    initSmoothScrolling();
    initScrollAnimations();
    initServices();
}

document.addEventListener('DOMContentLoaded', () => {
    initMainPage();

    if (window.location.hash) {
        setTimeout(() => {
            const target = document.querySelector(window.location.hash);
            if (target) window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
        }, 100);
    }
});
