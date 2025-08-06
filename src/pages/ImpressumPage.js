import { Navigation } from '../components/Navigation.js';
import { Footer } from '../components/Footer.js';

export class ImpressumPage {
    constructor() {
        this.navigation = new Navigation();
        this.footer = new Footer();
    }

    render() {
        return `
            ${this.navigation.render()}
            <section class="legal-content">
                <div class="container">
                    <div class="legal-header">
                        <h1>Impressum</h1>
                        <div class="legal-contact-info">
                            <div class="contact-item">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                                    <circle cx="12" cy="10" r="3"/>
                                </svg>
                                <div class="contact-text">
                                    <span>Musterstraße 123</span>
                                    <span>12345 Musterstadt</span>
                                </div>
                            </div>
                            <div class="contact-item">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                </svg>
                                <div class="contact-text">
                                    <a href="tel:+49123456789">+49 123 456 789</a>
                                </div>
                            </div>
                            <div class="contact-item">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                                    <path d="m22 7-10 5L2 7"/>
                                </svg>
                                <div class="contact-text">
                                    <a href="mailto:info@praxis-v-a.de">info@praxis-v-a.de</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="legal-section">
                        <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
                        <div class="legal-info">
                            <p><strong>Berufsbezeichnung:</strong> Physiotherapeut/in (verliehen in Deutschland)</p>
                            <p><strong>Zuständige Kammer:</strong> [Name der zuständigen Kammer]</p>
                            <p><strong>Berufsrechtliche Regelungen:</strong></p>
                            <ul>
                                <li>Masseur- und Physiotherapeutengesetz (MPhG)</li>
                                <li>Ausbildungs- und Prüfungsverordnung für Physiotherapeuten (PhysTh-APrV)</li>
                            </ul>
                            <p>Die Regelungen sind einsehbar unter: <a href="https://www.gesetze-im-internet.de" target="_blank">www.gesetze-im-internet.de</a></p>
                        </div>
                    </div>

                    <div class="legal-section">
                        <h2>Umsatzsteuer-ID</h2>
                        <div class="legal-info">
                            <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br>
                            [USt-IdNr.]</p>
                        </div>
                    </div>

                    <div class="legal-section">
                        <h2>Aufsichtsbehörde</h2>
                        <div class="legal-info">
                            <p>[Name der zuständigen Aufsichtsbehörde]<br>
                            [Anschrift der Behörde]</p>
                        </div>
                    </div>

                    <div class="legal-section">
                        <h2>Haftungsausschluss</h2>
                        <div class="legal-info">
                            <h3>Haftung für Inhalte</h3>
                            <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
                            
                            <h3>Haftung für Links</h3>
                            <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
                            
                            <h3>Urheberrecht</h3>
                            <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
                        </div>
                    </div>

                    <div class="legal-section">
                        <h2>Streitschlichtung</h2>
                        <div class="legal-info">
                            <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank">https://ec.europa.eu/consumers/odr/</a></p>
                            <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
                            <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
                        </div>
                    </div>

                    <div class="legal-back">
                        <a href="/" class="btn btn-primary">Zurück zur Startseite</a>
                    </div>
                </div>
            </section>
            ${this.footer.render()}
        `;
    }

    init() {
        this.navigation.init();
    }
}