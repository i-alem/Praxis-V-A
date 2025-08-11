export function createServices() {
    const services = [
        {
            icon: `<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>`,
            title: "Krankengymnastik",
            description: "Individuelle Behandlung zur Wiederherstellung der Beweglichkeit und Schmerzlinderung"
        },
        {
            icon: `<circle cx="12" cy="12" r="3"/><path d="M12 1v6m0 6v6"/><path d="m21 12-6-3-6 3-6-3"/>`,
            title: "Manuelle Therapie",
            description: "Gezielte Mobilisation von Gelenken und Behandlung von Funktionsstörungen"
        },
        {
            icon: `<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>`,
            title: "Massage",
            description: "Klassische und therapeutische Massagen zur Entspannung und Durchblutungsförderung"
        },
        {
            icon: `<path d="M14 9V5a3 3 0 0 0-6 0v4"/><rect x="2" y="9" width="20" height="11" rx="2" ry="2"/>`,
            title: "Lymphdrainage",
            description: "Sanfte Entstauungstherapie zur Behandlung von Schwellungen und Ödemen"
        },
        {
            icon: `<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>`,
            title: "Elektrotherapie",
            description: "Moderne Behandlungsmethoden mit elektrischen Strömen zur Schmerztherapie"
        },
        {
            icon: `<path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>`,
            title: "Wärmetherapie",
            description: "Fango, Heißluft und weitere Wärmeanwendungen zur Muskelentspannung"
        }
    ];

    const serviceCards = services.map(service => `
        <div class="service-card">
            <div class="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    ${service.icon}
                </svg>
            </div>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        </div>
    `).join('');

    return `
        <section id="services" class="services">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">Unsere Leistungen</h2>
                    <p class="section-subtitle">Professionelle Physiotherapie für Ihre Gesundheit</p>
                </div>
                <div class="services-grid">
                    ${serviceCards}
                </div>
            </div>
        </section>
    `;
}