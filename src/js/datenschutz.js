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
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initDatenschutzPage);
