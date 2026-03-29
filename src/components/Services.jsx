// Services Component — expandable cards with image + overlay
const services = [
    {
        image: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=600',
        title: 'Krankengymnastik',
        description: 'Individuelle Behandlung zur Wiederherstellung der Beweglichkeit und Schmerzlinderung',
        details: 'Gezielte Übungstherapie zur Verbesserung von Kraft, Koordination und Mobilität. Wir erstellen individuelle Übungspläne, die exakt auf Ihre Beschwerden und Rehabilitationsziele abgestimmt sind.',
        indication: 'Bewegungseinschränkungen, postoperative Reha, Muskelschwäche, Wirbelsäulenbeschwerden',
        duration: ['20 Min.', '45 Min.'],
        privatePrice: ['35 €', '75 €'],
    },
    {
        image: 'https://images.pexels.com/photos/6816851/pexels-photo-6816851.jpeg?auto=compress&cs=tinysrgb&w=600',
        title: 'Manuelle Therapie',
        description: 'Gezielte Mobilisation von Gelenken und Behandlung von Funktionsstörungen',
        details: 'Spezifische Handgrifftechniken zur Untersuchung und Behandlung von Funktionsstörungen des Bewegungsapparates. Besonders effektiv bei Gelenkblockierungen und chronischen Beschwerden.',
        indication: 'Gelenkblockierungen, Rückenschmerzen, Kopfschmerzen, Schulter-Nacken-Probleme',
        duration: '30 – 45 Min.',
        privatePrice: '60 – 90 €',
    },
    {
        image: 'https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=600',
        title: 'Massage',
        description: 'Klassische und therapeutische Massagen zur Entspannung und Durchblutungsförderung',
        details: 'Klassische und therapeutische Massagetechniken lösen Muskelverspannungen, fördern die Durchblutung und reduzieren Stress spürbar. Entspannung und Erholung ab der ersten Behandlung.',
        indication: 'Muskelverspannungen, Stressbelastung, Durchblutungsstörungen, Rückenbeschwerden',
        duration: ['25 Min.', '50 Min.'],
        privatePrice: ['45 €', '80 €'],
    },
    {
        image: 'https://images.pexels.com/photos/5473182/pexels-photo-5473182.jpeg?auto=compress&cs=tinysrgb&w=600',
        title: 'Lymphdrainage',
        description: 'Sanfte Entstauungstherapie zur Behandlung von Schwellungen und Ödemen',
        details: 'Sanfte, rhythmische Massagetechnik zur Anregung des Lymphflusses und zum Abbau von Schwellungen. Besonders wirksam nach Operationen, Verletzungen oder bei chronischem Lymphödem.',
        indication: 'Ödeme, postoperative Schwellungen, Lymphödem, Wassereinlagerungen',
        duration: '45 – 60 Min.',
        privatePrice: '70 – 100 €',
    },
    {
        image: 'https://images.pexels.com/photos/7298879/pexels-photo-7298879.jpeg?auto=compress&cs=tinysrgb&w=600',
        title: 'Elektrotherapie',
        description: 'Moderne Behandlungsmethoden mit elektrischen Strömen zur Schmerztherapie',
        details: 'Verschiedene elektrische Behandlungsverfahren zur gezielten Schmerzlinderung und Muskelstimulation. Wir setzen TENS, Reizstrom und Ultraschall je nach Beschwerdebild individuell ein.',
        indication: 'Chronische Schmerzen, Nervenschäden, Muskelschwäche, Sportverletzungen',
        duration: '15 – 30 Min.',
        privatePrice: '30 – 55 €',
    },
    {
        image: 'https://images.pexels.com/photos/6303614/pexels-photo-6303614.jpeg?auto=compress&cs=tinysrgb&w=600',
        title: 'Wärmetherapie',
        description: 'Fango, Heißluft und weitere Wärmeanwendungen zur Muskelentspannung',
        details: 'Fango-Packungen, Heißluft und weitere Wärmeträger entspannen tiefe Muskelschichten und bereiten das Gewebe optimal auf die nachfolgende Behandlung vor. Wohltuende Wirkung bei chronischen Beschwerden.',
        indication: 'Muskelverspannungen, degenerative Erkrankungen, Rheuma, chronische Beschwerden',
        duration: '20 – 30 Min.',
        privatePrice: '35 – 55 €',
    }
];

function renderDurationPrice(duration, price) {
    if (Array.isArray(duration)) {
        return duration.map((d, i) => `
            <div class="service-meta-option">
                <span class="meta-option-duration">${d}</span>
                <span class="meta-option-price">${price[i]}</span>
            </div>`).join('');
    }
    return `
        <div class="service-meta-option">
            <span class="meta-option-duration">${duration}</span>
            <span class="meta-option-price">${price}</span>
        </div>`;
}

function serviceCard(service, index) {
    return `
        <div class="service-card" data-index="${index}">
            <div class="service-image">
                <img src="${service.image}" alt="${service.title}" loading="lazy">
                <div class="service-overlay">
                    <h3>${service.title}</h3>
                    <p class="service-desc">${service.description}</p>
                    <button class="service-toggle" aria-expanded="false" aria-label="Details anzeigen">
                        <svg class="service-expand-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="6 9 12 15 18 9"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="service-details" aria-hidden="true">
                <div class="service-details-inner">
                    <p class="service-long-desc">${service.details}</p>
                    <div class="service-meta">
                        <div class="service-meta-item">
                            <span class="meta-label">Geeignet bei</span>
                            <span class="meta-value">${service.indication}</span>
                        </div>
                        <div class="service-meta-item">
                            <span class="meta-label">Dauer &amp; Preis</span>
                            ${renderDurationPrice(service.duration, service.privatePrice)}
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
        if (!details) return;

        card.addEventListener('click', () => {
            const isExpanded = card.classList.contains('expanded');
            card.classList.toggle('expanded');
            if (toggle) toggle.setAttribute('aria-expanded', String(!isExpanded));
            details.setAttribute('aria-hidden', String(isExpanded));
        });
    });
}
