// Hero Component
export function Hero() {
    return `
        <section id="home" class="hero">
            <div class="container">
                <div class="hero-content">
                    <div class="hero-text">
                        <h1 class="hero-title">Willkommen bei der 
                        <span class="highlight">Praxis Vital & Active</span>
                        </h1>
                        <p class="hero-subtitle">Ihre moderne Physiotherapiepraxis für ganzheitliche Behandlung und nachhaltige Rehabilitation</p>
                        <div class="hero-buttons">
                            <a href="https://medifox.de/termine" target="_blank" class="btn btn-primary">Termin vereinbaren</a>
                            <a href="#services" class="btn btn-secondary">Unsere Leistungen</a>
                        </div>
                    </div>
                    <div class="hero-image">
                        <!-- Rechte Spalte bleibt für zukünftigen Inhalt reserviert -->
                    </div>
                </div>
            </div>
        </section>
    `;
}
