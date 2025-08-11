export class Practice {
    constructor() {
        this.features = [
            "Moderne Behandlungsräume",
            "Neueste Therapiegeräte",
            "Barrierefreier Zugang",
            "Parkplätze vor Ort"
        ];

        this.galleryImages = [
            {
                src: "src/img/practice-room-1.jpg",
                alt: "Behandlungsraum"
            },
            {
                src: "src/img/practice-room-2.jpg",
                alt: "Therapiegeräte"
            },
            {
                src: "src/img/practice-room-3.jpg",
                alt: "Empfangsbereich"
            },
            {
                src: "src/img/practice-room-4.jpg",
                alt: "Trainingsbereich"
            }
        ];
    }

    render() {
        const featuresHTML = this.features.map(feature => `
            <div class="feature">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="20,6 9,17 4,12"/>
                </svg>
                <span>${feature}</span>
            </div>
        `).join('');

        const galleryHTML = this.galleryImages.map(image => `
            <img src="${image.src}" alt="${image.alt}" loading="lazy">
        `).join('');

        return `
            <section id="practice" class="practice">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title">Unsere Praxis</h2>
                        <p class="section-subtitle">Moderne Ausstattung in angenehmer Atmosphäre</p>
                    </div>
                    <div class="practice-content">
                        <div class="practice-text">
                            <h3>Herzlich willkommen in der Praxis-V-A</h3>
                            <p>In unserer modernen Physiotherapiepraxis erwartet Sie eine professionelle und persönliche Betreuung. Unser erfahrenes Team aus qualifizierten Physiotherapeuten steht Ihnen mit individuellen Behandlungskonzepten zur Seite.</p>
                            <div class="practice-features">
                                ${featuresHTML}
                            </div>
                        </div>
                        <div class="practice-gallery">
                            <div class="gallery-grid">
                                ${galleryHTML}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}