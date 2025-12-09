import './styles/main.css';
import { Navigation, initNavigation } from './components/Navigation.jsx';
import { Hero } from './components/Hero.jsx';
import { Services } from './components/Services.jsx';
import { Practice } from './components/Practice.jsx';
import { Footer } from './components/Footer.jsx';
import { Butterfly, initButterfly } from './components/Butterfly.jsx';
import { initSmoothScrolling, initScrollAnimations } from './utils/animations.jsx';

// Initialize main page
function initMainPage() {
    const app = document.getElementById('app');
    if (!app) return;

    app.innerHTML = `
        ${Navigation()}
        ${Butterfly()}
        <main>
            ${Hero()}
            ${Services()}
            ${Practice()}
        </main>
        ${Footer()}
    `;

    // Initialize functionality
    initNavigation();
    initSmoothScrolling();
    initScrollAnimations();
    initButterfly();
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initMainPage();
    
    // Handle hash navigation on page load
    if (window.location.hash) {
        setTimeout(() => {
            const target = document.querySelector(window.location.hash);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        }, 100);
    }
});