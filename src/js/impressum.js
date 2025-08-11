import { createNavigation, initNavigation } from './components/Navigation.js';
import { createFooter } from './components/Footer.js';
import { createLegalHeader } from './components/LegalHeader.js';
import { createImpressumContent } from './components/ImpressumContent.js';

// Initialize impressum page
function initImpressumPage() {
    const app = document.getElementById('app');
    if (!app) return;

    app.innerHTML = `
        ${createNavigation()}
        <section class="legal-content">
            <div class="container">
                ${createLegalHeader('Impressum')}
                ${createImpressumContent()}
            </div>
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initImpressumPage);
}