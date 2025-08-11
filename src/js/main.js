import { createNavigation, initNavigation } from '../components/Navigation.js';
import { createFooter } from '../components/Footer.js';
import { createHero } from '../components/Hero.js';
import { createServices } from '../components/Services.js';
import { createPractice } from '../components/Practice.js';

// Initialize page components
function initPage() {
    const app = document.getElementById('app');
    if (!app) return;

    app.innerHTML = `
        ${createNavigation()}
        <main>
            ${createHero()}
            ${createServices()}
            ${createPractice()}
        </main>
        ${createFooter()}
    `;

    // Initialize navigation functionality
    initNavigation();
    
    // Initialize other features
    initSmoothScrolling();
    initScrollAnimations();
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll animations
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe animated elements
    const animatedElements = document.querySelectorAll('.service-card, .gallery-grid img');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initPage);