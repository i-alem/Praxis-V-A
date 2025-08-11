export class Footer {
    constructor() {
        this.contactInfo = {
            address: {
                street: "Kaiserdamm 9",
                city: "14059 Berlin"
            },
            phone: "+49 176 62800600",
            email: "info@praxis-v-a.de"
        };

        this.openingHours = [
            { day: "Mo - Fr", time: "08:00 - 18:00" },
            { day: "Samstag", time: "09:00 - 13:00" },
            { day: "Sonntag", time: "Geschlossen" }
        ];
    }

    render() {
        const contactHTML = `
            <div class="contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                    <circle cx="12" cy="10" r="3"/>
                </svg>
                <div class="contact-text">
                    <span>${this.contactInfo.address.street}</span>
                    <span>${this.contactInfo.address.city}</span>
                </div>
            </div>
            <div class="contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <div class="contact-text">
                    <a href="tel:${this.contactInfo.phone}">${this.contactInfo.phone}</a>
                </div>
            </div>
            <div class="contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-10 5L2 7"/>
                </svg>
                <div class="contact-text">
                    <a href="mailto:${this.contactInfo.email}">${this.contactInfo.email}</a>
                </div>
            </div>
        `;

        const hoursHTML = this.openingHours.map(hour => `
            <div class="hours-row">
                <span class="day">${hour.day}</span>
                <span class="time">${hour.time}</span>
            </div>
        `).join('');

        return `
            <footer class="footer">
                <div class="container">
                    <div class="footer-main">
                        <div class="footer-section info">
                            <div class="footer-logo">
                                <img src="/src/images/Logo.svg" alt="Praxis Vital & Active Logo" class="butterfly-logo">
                                <span>Praxis Vital & Active</span>
                            </div>
                            <p class="footer-description">Ihre moderne Physiotherapiepraxis für ganzheitliche Behandlung und nachhaltige Rehabilitation.</p>
                        </div>
                        
                        <div class="footer-section contact">
                            <h4>Kontakt</h4>
                            ${contactHTML}
                        </div>
                        
                        <div class="footer-section hours">
                            <h4>Öffnungszeiten</h4>
                            <div class="footer-hours">
                                ${hoursHTML}
                            </div>
                        </div>
                    </div>
                    
                    <div class="footer-content">
                        <p>&copy; 2024 Praxis Vital & Active. Alle Rechte vorbehalten.</p>
                        <div class="footer-legal">
                            <a href="/impressum.html">Impressum</a>
                            <a href="/datenschutz.html">Datenschutz</a>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }
}
