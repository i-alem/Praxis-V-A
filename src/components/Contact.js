export class Contact {
    constructor() {
        // Will be initialized after render
    }

    setupForm() {
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', this.handleSubmit.bind(this));
            document.querySelectorAll('.contact-form input, .contact-form textarea').forEach(field => {
                field.addEventListener('blur', () => this.validateField(field));
                field.addEventListener('input', () => {
                    if (field.classList.contains('error')) {
                        this.validateField(field);
                    }
                });
            });
        }
    }

    validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    validateField(field) {
        const value = field.value.trim();
        const isValid = !(field.hasAttribute('required') && !value) && 
                       !(field.type === 'email' && value && !this.validateEmail(value));
        field.classList.remove('error');
        if (!isValid) field.classList.add('error');
        return isValid;
    }

    handleSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        if (!data.firstName || !data.lastName || !data.email || !data.message) {
            alert('Bitte füllen Sie alle Pflichtfelder aus.');
            return;
        }
        if (!this.validateEmail(data.email)) {
            alert('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
            return;
        }
        if (!data.privacy) {
            alert('Bitte stimmen Sie der Datenschutzerklärung zu.');
            return;
        }

        const submitButton = e.target.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Wird gesendet...';
        submitButton.disabled = true;

        setTimeout(() => {
            const formContainer = document.querySelector('.contact-form-container');
            formContainer.innerHTML = `
                <div class="form-success">
                    <h3>Vielen Dank für Ihre Nachricht!</h3>
                    <p>Wir haben Ihre Anfrage erhalten und werden uns schnellstmöglich bei Ihnen melden.</p>
                    <p>In dringenden Fällen erreichen Sie uns telefonisch unter <a href="tel:+49123456789">+49 123 456 789</a>.</p>
                    <a href="#contact" class="btn btn-primary" onclick="location.reload()">Neue Nachricht senden</a>
                </div>
            `;
        }, 2000);
    }

    init() {
        setTimeout(() => this.setupForm(), 100);
    }

    render() {
        return `
            <section id="contact" class="contact">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title">Kontakt</h2>
                        <p class="section-subtitle">Nehmen Sie Kontakt mit uns auf</p>
                    </div>
                    <div class="contact-form-container">
                        <form class="contact-form" id="contact-form">
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="firstName">Vorname *</label>
                                    <input type="text" id="firstName" name="firstName" required>
                                </div>
                                <div class="form-group">
                                    <label for="lastName">Nachname *</label>
                                    <input type="text" id="lastName" name="lastName" required>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="email">E-Mail *</label>
                                    <input type="email" id="email" name="email" required>
                                </div>
                                <div class="form-group">
                                    <label for="phone">Telefon</label>
                                    <input type="tel" id="phone" name="phone">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="subject">Betreff</label>
                                <select id="subject" name="subject">
                                    <option value="">Bitte wählen...</option>
                                    <option value="termin">Terminanfrage</option>
                                    <option value="info">Allgemeine Informationen</option>
                                    <option value="behandlung">Fragen zur Behandlung</option>
                                    <option value="rezept">Rezept/Verordnung</option>
                                    <option value="sonstiges">Sonstiges</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="message">Nachricht *</label>
                                <textarea id="message" name="message" rows="5" required placeholder="Ihre Nachricht an uns..."></textarea>
                            </div>
                            <div class="form-group checkbox-group">
                                <label class="checkbox-label">
                                    <input type="checkbox" id="privacy" name="privacy" required>
                                    <span class="checkmark"></span>
                                    Ich habe die <a href="/datenschutz.html" target="_blank">Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Daten zu. *
                                </label>
                            </div>
                            <div class="form-actions">
                                <button type="submit" class="btn btn-primary">Nachricht senden</button>
                                <p class="form-note">* Pflichtfelder</p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        `;
    }
}