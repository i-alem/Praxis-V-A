import { PRAXIS } from '../data/config.js';

const features = [
    'Moderne Behandlungsräume',
    'Neueste Therapiegeräte',
    'Barrierefreier Zugang',
    'Parkplätze vor Ort',
];

const images = [
    { src: 'https://images.pexels.com/photos/6111565/pexels-photo-6111565.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'Behandlungsraum'  },
    { src: 'https://images.pexels.com/photos/6111368/pexels-photo-6111368.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'Therapiegeräte'   },
    { src: 'https://images.pexels.com/photos/6111707/pexels-photo-6111707.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'Empfangsbereich'  },
    { src: 'https://images.pexels.com/photos/6111164/pexels-photo-6111164.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'Trainingsbereich' },
];

export function Practice() {
    const featureList = features.map(f => `
        <div class="feature">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20,6 9,17 4,12"/>
            </svg>
            <span>${f}</span>
        </div>
    `).join('');

    const gridImages = images.map(img =>
        `<img src="${img.src}" alt="${img.alt}" loading="lazy">`
    ).join('');

    const carouselImages = images.map(img =>
        `<img src="${img.src}" alt="${img.alt}" loading="lazy" class="carousel-slide">`
    ).join('');

    const dots = images.map((_, i) =>
        `<button class="carousel-dot${i === 0 ? ' active' : ''}" data-index="${i}" aria-label="Bild ${i + 1}"></button>`
    ).join('');

    return `
        <section id="practice" class="practice">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">Unsere Praxis</h2>
                    <p class="section-subtitle">Moderne Ausstattung in angenehmer Atmosphäre</p>
                </div>
                <div class="practice-content">
                    <div class="practice-text">
                        <h3>Herzlich willkommen in der <br>${PRAXIS.name}</h3>
                        <p>In unserer modernen Physiotherapiepraxis erwartet Sie eine professionelle und persönliche Betreuung. Unser erfahrenes Team aus qualifizierten Physiotherapeuten steht Ihnen mit individuellen Behandlungskonzepten zur Seite.</p>
                        <div class="practice-features">${featureList}</div>
                    </div>
                    <div class="practice-gallery">
                        <div class="gallery-grid">${gridImages}</div>
                        <div class="gallery-carousel">
                            <div class="carousel-track">${carouselImages}</div>
                            <div class="carousel-dots">${dots}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

export function initPractice() {
    const track = document.querySelector('.carousel-track');
    const dots  = document.querySelectorAll('.carousel-dot');
    if (!track || !dots.length) return;

    // Update active dot based on scroll position
    track.addEventListener('scroll', () => {
        const index = Math.round(track.scrollLeft / track.offsetWidth);
        dots.forEach((d, i) => d.classList.toggle('active', i === index));
    }, { passive: true });

    // Tap dot → scroll to slide
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            track.scrollTo({ left: dot.dataset.index * track.offsetWidth, behavior: 'smooth' });
        });
    });
}
