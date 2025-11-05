// Legal Header Component
export function LegalHeader(title, subtitle = "Stand: Januar 2024") {
    return `
        <div class="legal-header">
            <h1>${title}</h1>
            <p>${subtitle}</p>
            <div class="legal-contact-info">
                <div class="contact-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                        <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <div class="contact-text">
                        <span>Kaiserdamm</span>
                        <span>14059 Berlin</span>
                    </div>
                </div>
                <div class="contact-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    <div class="contact-text">
                        <a href="tel:+49179123456789">+49 179 123456789</a>
                    </div>
                </div>
                <div class="contact-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect width="20" height="16" x="2" y="4" rx="2"/>
                        <path d="m22 7-10 5L2 7"/>
                    </svg>
                    <div class="contact-text">
                        <a href="mailto:info@praxis-v-a.de">info@praxis-v-a.de</a>
                    </div>
                </div>
            </div>
        </div>
    `;
}