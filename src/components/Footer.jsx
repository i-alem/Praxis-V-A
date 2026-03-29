import { PRAXIS, contactBlock } from '../data/config.js';

export function Footer() {
    const hoursRows = PRAXIS.hours.map(h => `
        <div class="hours-row">
            <span class="day">${h.days}</span>
            <span class="time">${h.time}</span>
        </div>
    `).join('');

    return `
        <footer class="footer">
            <div class="container">
                <div class="footer-main">
                    <div class="footer-section info">
                        <div class="footer-logo">
                            <img src="/logo-dark.svg" alt="${PRAXIS.name} Logo" width="40" height="40">
                            <span>${PRAXIS.name}</span>
                        </div>
                        <p class="footer-description">Ihre moderne Physiotherapiepraxis für ganzheitliche Behandlung und nachhaltige Rehabilitation.</p>
                    </div>

                    <div class="footer-section contact">
                        <h4>Kontakt</h4>
                        ${contactBlock()}
                    </div>

                    <div class="footer-section hours">
                        <h4>Öffnungszeiten</h4>
                        ${hoursRows}
                    </div>
                </div>

                <div class="footer-content">
                    <p>&copy; ${new Date().getFullYear()} ${PRAXIS.name}. Alle Rechte vorbehalten.</p>
                    <div class="footer-creator">
                        <span>Erstellt von </span>
                        <a href="https://www.linkedin.com/in/alem-imamovic" target="_blank" rel="noopener noreferrer" class="creator-link">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                            Alem Imamović
                        </a>
                    </div>
                    <div class="footer-legal">
                        <a href="impressum.html">Impressum</a>
                        <a href="datenschutz.html">Datenschutz</a>
                    </div>
                </div>
            </div>
        </footer>
    `;
}
