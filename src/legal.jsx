import './styles/main.css';
import { Navigation, initNavigation } from './components/Navigation.jsx';
import { Footer } from './components/Footer.jsx';
import { LegalHeader } from './components/LegalHeader.jsx';
import { ImpressumContent } from './components/ImpressumContent.jsx';
import { DatenschutzContent } from './components/DatenschutzContent.jsx';

// Initialize Impressum page
function initImpressumPage() {
    const app = document.getElementById('app');
    if (!app) return;

    app.innerHTML = `
        ${Navigation()}
        <section class="legal-content">
            <div class="container">
                ${LegalHeader('Impressum')}
                ${ImpressumContent()}
            </div>
        </section>
        ${Footer()}
    `;

    initNavigation();
}

// Initialize Datenschutz page
function initDatenschutzPage() {
    const app = document.getElementById('app');
    if (!app) return;

    app.innerHTML = `
        ${Navigation()}
        <section class="legal-content">
            <div class="container">
                ${LegalHeader('Datenschutzerklärung')}
                ${DatenschutzContent()}
            </div>
        </section>
        ${Footer()}
    `;

    initNavigation();
}

// Export functions for use in HTML files
window.initImpressumPage = initImpressumPage;
window.initDatenschutzPage = initDatenschutzPage;