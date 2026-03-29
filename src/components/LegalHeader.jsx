import { contactBlock } from '../data/config.js';

export function LegalHeader(title, subtitle = 'Stand: Januar 2024') {
    return `
        <div class="legal-header">
            <h1>${title}</h1>
            <p>${subtitle}</p>
            <div class="legal-contact-info">
                ${contactBlock()}
            </div>
        </div>
    `;
}
