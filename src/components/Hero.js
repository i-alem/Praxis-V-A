export class Hero {
    render() {
        return `
            <section id="home" class="hero">
                <div class="hero-content">
                    <div class="hero-text">
                        <h1 class="hero-title">Willkommen bei <span class="highlight">Praxis-V-A</span></h1>
                        <p class="hero-subtitle">Ihre moderne Physiotherapiepraxis für ganzheitliche Behandlung und nachhaltige Rehabilitation</p>
                        <div class="hero-buttons">
                            <a href="https://medifox.de/termine" target="_blank" class="btn btn-primary">Termin vereinbaren</a>
                            <a href="#services" class="btn btn-secondary">Unsere Leistungen</a>
                        </div>
                    </div>
                    <div class="hero-image">
                        <img src="img/hero-physiotherapy.jpg" alt="Physiotherapie Behandlung" loading="lazy">
                    </div>
                </div>
            </section>
        `;
    }
}