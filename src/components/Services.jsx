// Services Component
export function Services() {
    const services = [
        {
            icon: '<path d="M12 2c-1 0-2 .5-2 1.5V7c0 1 1 2 2 2s2-1 2-2V3.5c0-1-1-1.5-2-1.5z"/><path d="M8 10c-1.5 0-2.5 1-2.5 2.5v3c0 1.5 1 2.5 2.5 2.5m8 0c1.5 0 2.5-1 2.5-2.5v-3c0-1.5-1-2.5-2.5-2.5"/><path d="M12 9v4m-2 5l2 3 2-3"/>',
            title: "Krankengymnastik",
            description: "Individuelle Behandlung zur Wiederherstellung der Beweglichkeit und Schmerzlinderung"
        },
        {
            icon: '<path d="M9 3h6v3H9z"/><path d="M12 6v3m-3 0h6"/><circle cx="9" cy="12" r="1.5"/><circle cx="15" cy="12" r="1.5"/><path d="M9 13.5c0 2 1.5 3.5 3 3.5s3-1.5 3-3.5m-6 4v4m6-4v4"/>',
            title: "Manuelle Therapie",
            description: "Gezielte Mobilisation von Gelenken und Behandlung von Funktionsstörungen"
        },
        {
            icon: '<path d="M12 2c-2 0-3.5 1.5-3.5 3.5S10 9 12 9s3.5-1.5 3.5-3.5S14 2 12 2z"/><path d="M7 10c-1 0-2 1-2 2v3c0 1 1 2 2 2h10c1 0 2-1 2-2v-3c0-1-1-2-2-2"/><path d="M9 17v5m6-5v5"/><circle cx="10" cy="13" r="0.5"/><circle cx="14" cy="13" r="0.5"/>',
            title: "Massage",
            description: "Klassische und therapeutische Massagen zur Entspannung und Durchblutungsförderung"
        },
        {
            icon: '<path d="M12 2v4m0 4v4m0 4v4"/><path d="M8 6c-2 1-3 2-3 4s1 3 3 4m8-8c2 1 3 2 3 4s-1 3-3 4"/><path d="M10 10c-1 .5-1.5 1-1.5 2s.5 1.5 1.5 2m4-4c1 .5 1.5 1 1.5 2s-.5 1.5-1.5 2"/>',
            title: "Lymphdrainage",
            description: "Sanfte Entstauungstherapie zur Behandlung von Schwellungen und Ödemen"
        },
        {
            icon: '<path d="M12 2v20"/><path d="M8 8l4 4 4-4M8 16l4-4 4 4"/><circle cx="12" cy="6" r="1"/><circle cx="12" cy="18" r="1"/>',
            title: "Elektrotherapie",
            description: "Moderne Behandlungsmethoden mit elektrischen Strömen zur Schmerztherapie"
        },
        {
            icon: '<path d="M12 2C8 2 5 5 5 9c0 3 2 5 4 6v5c0 1 1 2 3 2s3-1 3-2v-5c2-1 4-3 4-6 0-4-3-7-7-7z"/><path d="M12 9v6"/><circle cx="12" cy="11" r="1.5"/>',
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