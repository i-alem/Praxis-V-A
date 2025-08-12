// Animation utilities
export function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
}

export function initScrollAnimations() {
    // Gemeinsamer Observer für alle animierten Elemente
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Hero-Sektion
                if (entry.target.classList.contains('hero')) {
                    const heroElements = entry.target.querySelectorAll('.hero-title, .hero-subtitle, .hero-buttons, .hero-image, .hero-reviews');
                    heroElements.forEach(el => el.classList.add('animate'));
                }
                
                // Services-Sektion
                if (entry.target.classList.contains('services')) {
                    const serviceTitle = entry.target.querySelector('.section-title');
                    const serviceSubtitle = entry.target.querySelector('.section-subtitle');
                    
                    // Sequenzielle Animation: Titel zuerst, dann Untertitel
                    if (serviceTitle) {
                        serviceTitle.style.transitionDelay = '0.2s';
                        serviceTitle.classList.add('animate');
                    }
                    
                    setTimeout(() => {
                        if (serviceSubtitle) {
                            serviceSubtitle.style.transitionDelay = '0s';
                            serviceSubtitle.classList.add('animate');
                        }
                    }, 400);
                }
                
                // Practice-Sektion
                if (entry.target.classList.contains('practice')) {
                    const practiceTitle = entry.target.querySelector('.section-title');
                    const practiceSubtitle = entry.target.querySelector('.section-subtitle');
                    const practiceHeading = entry.target.querySelector('.practice-text h3');
                    const practiceText = entry.target.querySelector('.practice-text p');
                    const practiceFeatures = entry.target.querySelector('.practice-features');
                    
                    // Sequenzielle Animation von oben nach unten
                    // 1. Section-Titel
                    if (practiceTitle) {
                        practiceTitle.style.transitionDelay = '0.1s';
                        practiceTitle.classList.add('animate');
                    }
                    
                    // 2. Section-Untertitel (nach 300ms)
                    setTimeout(() => {
                        if (practiceSubtitle) {
                            practiceSubtitle.style.transitionDelay = '0s';
                            practiceSubtitle.classList.add('animate');
                        }
                    }, 300);
                    
                    // 3. Practice-Überschrift (nach 600ms)
                    setTimeout(() => {
                        if (practiceHeading) {
                            practiceHeading.style.transitionDelay = '0s';
                            practiceHeading.classList.add('animate');
                        }
                    }, 600);
                    
                    // 4. Practice-Text (nach 900ms)
                    setTimeout(() => {
                        if (practiceText) {
                            practiceText.style.transitionDelay = '0s';
                            practiceText.classList.add('animate');
                        }
                    }, 900);
                    
                    // 5. Practice-Features (nach 1200ms)
                    setTimeout(() => {
                        if (practiceFeatures) {
                            practiceFeatures.style.transitionDelay = '0s';
                            practiceFeatures.classList.add('animate');
                        }
                    }, 1200);
                }
                
                // Reviews-Sektion
                if (entry.target.classList.contains('reviews')) {
                    // Reviews haben keine Titel mehr - Animation entfernt
                }
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });

    // Observer für Service Cards
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                }, 300);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Beobachte die Sektionen
    const heroSection = document.querySelector('.hero');
    const servicesSection = document.querySelector('.services');
    const practiceSection = document.querySelector('.practice');
    const reviewsSection = document.querySelector('.reviews');

    if (heroSection) animationObserver.observe(heroSection);
    if (servicesSection) animationObserver.observe(servicesSection);
    if (practiceSection) animationObserver.observe(practiceSection);
    if (reviewsSection) animationObserver.observe(reviewsSection);

    // Beobachte Service Cards und Gallery Images
    const animatedElements = document.querySelectorAll('.service-card, .gallery-grid img');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        cardObserver.observe(el);
    });
}