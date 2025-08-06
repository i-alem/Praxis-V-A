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
                src: "https://images.pexels.com/photos/6111562/pexels-photo-6111562.jpeg?auto=compress&cs=tinysrgb&w=400",
                alt: "Behandlungsraum"
            },
            {
                src: "https://images.pexels.com/photos/6111456/pexels-photo-6111456.jpeg?auto=compress&cs=tinysrgb&w=400",
                alt: "Therapiegeräte"
            },
            {
                src: "https://images.pexels.com/photos/6111483/pexels-photo-6111483.jpeg?auto=compress&cs=tinysrgb&w=400",
                alt: "Empfangsbereich"
            },
            {
                src: "https://images.pexels.com/photos/6111587/pexels-photo-6111587.jpeg?auto=compress&cs=tinysrgb&w=400",
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