import{c as r,a,i as o}from"./Footer-CgITtdMh.js";function c(){return`
        <section id="home" class="hero">
            <div class="container">
                <div class="hero-content">
                    <div class="hero-text">
                        <h1 class="hero-title">Willkommen bei <span class="highlight">Praxis Vital & Active</span></h1>
                        <p class="hero-subtitle">Ihre moderne Physiotherapiepraxis für ganzheitliche Behandlung und nachhaltige Rehabilitation</p>
                        <div class="hero-buttons">
                            <a href="https://medifox.de/termine" target="_blank" class="btn btn-primary">Termin vereinbaren</a>
                            <a href="#services" class="btn btn-secondary">Unsere Leistungen</a>
                        </div>
                    </div>
                    <div class="hero-image">
                        <img src="https://images.pexels.com/photos/6111597/pexels-photo-6111597.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Physiotherapie Behandlung" loading="lazy">
                    </div>
                </div>
            </div>
        </section>
    `}function l(){return`
        <section id="services" class="services">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">Unsere Leistungen</h2>
                    <p class="section-subtitle">Professionelle Physiotherapie für Ihre Gesundheit</p>
                </div>
                <div class="services-grid">
                    ${[{icon:'<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',title:"Krankengymnastik",description:"Individuelle Behandlung zur Wiederherstellung der Beweglichkeit und Schmerzlinderung"},{icon:'<circle cx="12" cy="12" r="3"/><path d="M12 1v6m0 6v6"/><path d="m21 12-6-3-6 3-6-3"/>',title:"Manuelle Therapie",description:"Gezielte Mobilisation von Gelenken und Behandlung von Funktionsstörungen"},{icon:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',title:"Massage",description:"Klassische und therapeutische Massagen zur Entspannung und Durchblutungsförderung"},{icon:'<path d="M14 9V5a3 3 0 0 0-6 0v4"/><rect x="2" y="9" width="20" height="11" rx="2" ry="2"/>',title:"Lymphdrainage",description:"Sanfte Entstauungstherapie zur Behandlung von Schwellungen und Ödemen"},{icon:'<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>',title:"Elektrotherapie",description:"Moderne Behandlungsmethoden mit elektrischen Strömen zur Schmerztherapie"},{icon:'<path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',title:"Wärmetherapie",description:"Fango, Heißluft und weitere Wärmeanwendungen zur Muskelentspannung"}].map(e=>`
        <div class="service-card">
            <div class="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    ${e.icon}
                </svg>
            </div>
            <h3>${e.title}</h3>
            <p>${e.description}</p>
        </div>
    `).join("")}
                </div>
            </div>
        </section>
    `}function h(){const t=["Moderne Behandlungsräume","Neueste Therapiegeräte","Barrierefreier Zugang","Parkplätze vor Ort"],i=[{src:"https://images.pexels.com/photos/6111565/pexels-photo-6111565.jpeg?auto=compress&cs=tinysrgb&w=400",alt:"Behandlungsraum"},{src:"https://images.pexels.com/photos/6111368/pexels-photo-6111368.jpeg?auto=compress&cs=tinysrgb&w=400",alt:"Therapiegeräte"},{src:"https://images.pexels.com/photos/6111707/pexels-photo-6111707.jpeg?auto=compress&cs=tinysrgb&w=400",alt:"Empfangsbereich"},{src:"https://images.pexels.com/photos/6111164/pexels-photo-6111164.jpeg?auto=compress&cs=tinysrgb&w=400",alt:"Trainingsbereich"}],e=t.map(n=>`
        <div class="feature">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20,6 9,17 4,12"/>
            </svg>
            <span>${n}</span>
        </div>
    `).join(""),s=i.map(n=>`
        <img src="${n.src}" alt="${n.alt}" loading="lazy">
    `).join("");return`
        <section id="practice" class="practice">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">Unsere Praxis</h2>
                    <p class="section-subtitle">Moderne Ausstattung in angenehmer Atmosphäre</p>
                </div>
                <div class="practice-content">
                    <div class="practice-text">
                        <h3>Herzlich willkommen in der Praxis Vital & Active</h3>
                        <p>In unserer modernen Physiotherapiepraxis erwartet Sie eine professionelle und persönliche Betreuung. Unser erfahrenes Team aus qualifizierten Physiotherapeuten steht Ihnen mit individuellen Behandlungskonzepten zur Seite.</p>
                        <div class="practice-features">
                            ${e}
                        </div>
                    </div>
                    <div class="practice-gallery">
                        <div class="gallery-grid">
                            ${s}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `}function d(){const t=document.getElementById("app");t&&(t.innerHTML=`
        ${r()}
        <main>
            ${c()}
            ${l()}
            ${h()}
        </main>
        ${a()}
    `,o(),p(),u())}function p(){document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(t=>{t.addEventListener("click",function(i){i.preventDefault();const e=document.querySelector(this.getAttribute("href"));e&&window.scrollTo({top:e.offsetTop-70,behavior:"smooth"})})})}function u(){const t=new IntersectionObserver(e=>{e.forEach(s=>{s.isIntersecting&&(s.target.style.opacity="1",s.target.style.transform="translateY(0)")})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});document.querySelectorAll(".service-card, .gallery-grid img").forEach(e=>{e.style.opacity="0",e.style.transform="translateY(30px)",e.style.transition="opacity 0.6s ease-out, transform 0.6s ease-out",t.observe(e)})}document.addEventListener("DOMContentLoaded",()=>{d(),window.location.hash&&setTimeout(()=>{const t=document.querySelector(window.location.hash);t&&window.scrollTo({top:t.offsetTop-70,behavior:"smooth"})},100)});
