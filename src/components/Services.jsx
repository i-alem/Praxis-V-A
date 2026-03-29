// Services Component — expandable cards
const services = [
    {
        icon: '<path d="M12 2c-1 0-2 .5-2 1.5V7c0 1 1 2 2 2s2-1 2-2V3.5c0-1-1-1.5-2-1.5z"/><path d="M8 10c-1.5 0-2.5 1-2.5 2.5v3c0 1.5 1 2.5 2.5 2.5m8 0c1.5 0 2.5-1 2.5-2.5v-3c0-1.5-1-2.5-2.5-2.5"/><path d="M12 9v4m-2 5l2 3 2-3"/>',
        title: 'Krankengymnastik',
        description: 'Individuelle Behandlung zur Wiederherstellung der Beweglichkeit und Schmerzlinderung',
        details: 'Gezielte Übungstherapie zur Verbesserung von Kraft, Koordination und Mobilität. Wir erstellen individuelle Übungspläne, die exakt auf Ihre Beschwerden und Rehabilitationsziele abgestimmt sind.',
        duration: '20 – 45 Min.',
        indication: 'Bewegungseinschränkungen, postoperative Reha, Muskelschwäche, Wirbelsäulenbeschwerden',
        privatePrice: '45 – 80 €',
    },
    {
        icon: '<path d="M9 3h6v3H9z"/><path d="M12 6v3m-3 0h6"/><circle cx="9" cy="12" r="1.5"/><circle cx="15" cy="12" r="1.5"/><path d="M9 13.5c0 2 1.5 3.5 3 3.5s3-1.5 3-3.5m-6 4v4m6-4v4"/>',
        title: 'Manuelle Therapie',
        description: 'Gezielte Mobilisation von Gelenken und Behandlung von Funktionsstörungen',
        details: 'Spezifische Handgrifftechniken zur Untersuchung und Behandlung von Funktionsstörungen des Bewegungsapparates. Besonders effektiv bei Gelenkblockierungen und chronischen Beschwerden.',
        duration: '30 – 45 Min.',
        indication: 'Gelenkblockierungen, Rückenschmerzen, Kopfschmerzen, Schulter-Nacken-Probleme',
        privatePrice: '60 – 90 €',
    },
    {
        icon: '<path d="M12 2c-2 0-3.5 1.5-3.5 3.5S10 9 12 9s3.5-1.5 3.5-3.5S14 2 12 2z"/><path d="M7 10c-1 0-2 1-2 2v3c0 1 1 2 2 2h10c1 0 2-1 2-2v-3c0-1-1-2-2-2"/><path d="M9 17v5m6-5v5"/>',
        title: 'Massage',
        description: 'Klassische und therapeutische Massagen zur Entspannung und Durchblutungsförderung',
        details: 'Klassische und therapeutische Massagetechniken lösen Muskelverspannungen, fördern die Durchblutung und reduzieren Stress spürbar. Entspannung und Erholung ab der ersten Behandlung.',
        duration: '25 – 50 Min.',
        indication: 'Muskelverspannungen, Stressbelastung, Durchblutungsstörungen, Rückenbeschwerden',
        privatePrice: '50 – 85 €',
    },
    {
        icon: '<path d="M12 2v4m0 4v4m0 4v4"/><path d="M8 6c-2 1-3 2-3 4s1 3 3 4m8-8c2 1 3 2 3 4s-1 3-3 4"/><path d="M10 10c-1 .5-1.5 1-1.5 2s.5 1.5 1.5 2m4-4c1 .5 1.5 1 1.5 2s-.5 1.5-1.5 2"/>',
        title: 'Lymphdrainage',
        description: 'Sanfte Entstauungstherapie zur Behandlung von Schwellungen und Ödemen',
        details: 'Sanfte, rhythmische Massagetechnik zur Anregung des Lymphflusses und zum Abbau von Schwellungen. Besonders wirksam nach Operationen, Verletzungen oder bei chronischem Lymphödem.',
        duration: '45 – 60 Min.',
        indication: 'Ödeme, postoperative Schwellungen, Lymphödem, Wassereinlagerungen',
        privatePrice: '70 – 100 €',
    },
    {
        icon: '<path d="M12 2v20"/><path d="M8 8l4 4 4-4M8 16l4-4 4 4"/><circle cx="12" cy="6" r="1"/><circle cx="12" cy="18" r="1"/>',
        title: 'Elektrotherapie',
        description: 'Moderne Behandlungsmethoden mit elektrischen Strömen zur Schmerztherapie',
        details: 'Verschiedene elektrische Behandlungsverfahren zur gezielten Schmerzlinderung und Muskelstimulation. Wir setzen TENS, Reizstrom und Ultraschall je nach Beschwerdebild individuell ein.',
        duration: '15 – 30 Min.',
        indication: 'Chronische Schmerzen, Nervenschäden, Muskelschwäche, Sportverletzungen',
        privatePrice: '30 – 55 €',
    },
    {
        icon: '<path d="M12 2C8 2 5 5 5 9c0 3 2 5 4 6v5c0 1 1 2 3 2s3-1 3-2v-5c2-1 4-3 4-6 0-4-3-7-7-7z"/><path d="M12 9v6"/><circle cx="12" cy="11" r="1.5"/>',
        title: 'Wärmetherapie',
        description: 'Fango, Heißluft und weitere Wärmeanwendungen zur Muskelentspannung',
        details: 'Fango-Packungen, Heißluft und weitere Wärmeträger entspannen tiefe Muskelschichten und bereiten das Gewebe optimal auf die nachfolgende Behandlung vor. Wohltuende Wirkung bei chronischen Beschwerden.',
        duration: '20 – 30 Min.',
        indication: 'Muskelverspannungen, degenerative Erkrankungen, Rheuma, chronische Beschwerden',
        privatePrice: '35 – 55 €',
    }
];

function serviceCard(service, index) {
    return `
        <div class="service-card" data-index="${index}">
            <div class="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    ${service.icon}
                </svg>
            </div>
            <h3>${service.title}</h3>
            <p class="service-desc">${service.description}</p>
            <button class="service-toggle" aria-expanded="false" aria-label="Details anzeigen">
                <svg class="service-expand-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="6 9 12 15 18 9"/>
                </svg>
            </button>
            <div class="service-details" aria-hidden="true">
                <div class="service-details-inner">
                    <p class="service-long-desc">${service.details}</p>
                    <div class="service-meta">
                        <div class="service-meta-item">
                            <span class="meta-label">Dauer</span>
                            <span class="meta-value">${service.duration}</span>
                        </div>
                        <div class="service-meta-item">
                            <span class="meta-label">Geeignet bei</span>
                            <span class="meta-value">${service.indication}</span>
                        </div>
                        <div class="service-meta-item">
                            <span class="meta-label">Privatpreis</span>
                            <span class="meta-value">${service.privatePrice}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
}

export function Services() {
    const cards = services.map((s, i) => serviceCard(s, i)).join('');

    return `
        <section id="services" class="services">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">Unsere Leistungen</h2>
                    <p class="section-subtitle">Professionelle Physiotherapie für Ihre Gesundheit</p>
                </div>
                <div class="services-grid">
                    ${cards}
                </div>
            </div>
        </section>`;
}

export function initServices() {
    document.querySelectorAll('.service-card').forEach(card => {
        const toggle = card.querySelector('.service-toggle');
        const details = card.querySelector('.service-details');
        if (!toggle || !details) return;

        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isExpanded = card.classList.contains('expanded');
            card.classList.toggle('expanded');
            toggle.setAttribute('aria-expanded', String(!isExpanded));
            details.setAttribute('aria-hidden', String(isExpanded));
        });
    });
}
