// Practice Component
export function Practice() {
    const features = [
        "Moderne Behandlungsräume",
        "Neueste Therapiegeräte", 
        "Barrierefreier Zugang",
        "Parkplätze vor Ort"
    ];

    const images = [
        {
            src: "https://images.pexels.com/photos/6111565/pexels-photo-6111565.jpeg?auto=compress&cs=tinysrgb&w=400",
            alt: "Behandlungsraum"
        },
        {
            src: "https://images.pexels.com/photos/6111368/pexels-photo-6111368.jpeg?auto=compress&cs=tinysrgb&w=400", 
            alt: "Therapiegeräte"
        },
        {
            src: "https://images.pexels.com/photos/6111707/pexels-photo-6111707.jpeg?auto=compress&cs=tinysrgb&w=400",
            alt: "Empfangsbereich"
        },
        {
            src: "https://images.pexels.com/photos/6111164/pexels-photo-6111164.jpeg?auto=compress&cs=tinysrgb&w=400",
            alt: "Trainingsbereich"
        }
    ];

    const featureList = features.map(feature => `
        <div class="feature">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20,6 9,17 4,12"/>
            </svg>
            <span>${feature}</span>
        </div>
    `).join('');

    const galleryImages = images.map(image => `
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
                        <h3>Herzlich willkommen in der <br> Praxis Vital & Active</h3>
                        <p>In unserer modernen Physiotherapiepraxis erwartet Sie eine professionelle und persönliche Betreuung. Unser erfahrenes Team aus qualifizierten Physiotherapeuten steht Ihnen mit individuellen Behandlungskonzepten zur Seite.</p>
                        <div class="practice-features">
                            ${featureList}
                        </div>
                    </div>
                    <div class="practice-gallery">
                        <div class="gallery-grid">
                            ${galleryImages}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}