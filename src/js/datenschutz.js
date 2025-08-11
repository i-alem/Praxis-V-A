import { createNavigation, initNavigation } from '../components/Navigation.js';
import { createFooter } from '../components/Footer.js';
import { createLegalHeader } from '../components/LegalHeader.js';
import { createDatenschutzContent } from '../components/DatenschutzContent.js';

// Initialize datenschutz page
function initDatenschutzPage() {
    const app = document.getElementById('app');
    if (!app) return;

    app.innerHTML = `
        ${createNavigation()}
        <section class="legal-content">
            <div class="container">
                ${createLegalHeader('Datenschutzerklärung')}
                ${createDatenschutzContent()}
            </div>
        </section>
        ${createFooter()}
    `;

    // Initialize navigation functionality
    initNavigation();
    
    // Fix logo path for legal pages
    const navLogo = document.querySelector('.nav-logo img');
    if (navLogo) {
        navLogo.src = '../img/logo-light.svg';
    }
    
    const footerLogo = document.querySelector('.footer-logo img');
    if (footerLogo) {
        footerLogo.src = '../img/logo-dark.svg';
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initDatenschutzPage);