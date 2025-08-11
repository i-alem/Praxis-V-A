(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&e(o)}).observe(document,{childList:!0,subtree:!0});function i(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function e(t){if(t.ep)return;t.ep=!0;const a=i(t);fetch(t.href,a)}})();function c(){return`
        <nav class="navbar">
            <div class="nav-container">
                <a href="/" class="nav-logo">
                    <img src="/src/img/logo-light.svg" alt="Praxis Vital & Active Logo" width="40" height="40">
                    <span>Praxis Vital & Active</span>
                </a>
                <div class="nav-menu" id="nav-menu">
                    <a href="#services" class="nav-link">Leistungen</a>
                    <a href="#practice" class="nav-link">Praxis</a>
                    <a href="https://medifox.de/termine" target="_blank" class="nav-link cta-link">Termin buchen</a>
                </div>
                <div class="hamburger" id="hamburger">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
            </div>
        </nav>
    `}function l(){const n=document.querySelector(".nav-logo");n&&n.addEventListener("click",e=>{e.preventDefault(),window.location.pathname==="/"||window.location.pathname==="/index.html"?window.scrollTo({top:0,behavior:"smooth"}):window.location.href="/"}),document.querySelectorAll('.nav-link[href^="#"]').forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const a=e.getAttribute("href"),o=a.substring(1);if(window.location.pathname==="/"||window.location.pathname==="/index.html"){const r=document.getElementById(o);r&&window.scrollTo({top:r.offsetTop-70,behavior:"smooth"})}else window.location.href=`/${a}`})});const s=document.getElementById("hamburger"),i=document.getElementById("nav-menu");s&&i&&(s.addEventListener("click",()=>{s.classList.toggle("active"),i.classList.toggle("active")}),document.addEventListener("click",e=>{!s.contains(e.target)&&!i.contains(e.target)&&(s.classList.remove("active"),i.classList.remove("active"))}),document.querySelectorAll(".nav-link").forEach(e=>{e.addEventListener("click",()=>{s.classList.remove("active"),i.classList.remove("active")})})),window.addEventListener("scroll",()=>{const e=document.querySelector(".navbar");window.scrollY>50?(e.style.background="rgba(255, 255, 255, 0.98)",e.style.boxShadow="0 2px 20px rgba(0, 0, 0, 0.1)"):(e.style.background="rgba(255, 255, 255, 0.95)",e.style.boxShadow="none")})}function d(){return`
        <footer class="footer">
            <div class="container">
                <div class="footer-main">
                    <div class="footer-section info">
                        <div class="footer-logo">
                            <img src="/src/img/logo-dark.svg" alt="Praxis Vital & Active Logo" width="40" height="40">
                            <span>Praxis Vital & Active</span>
                        </div>
                        <p class="footer-description">Ihre moderne Physiotherapiepraxis für ganzheitliche Behandlung und nachhaltige Rehabilitation.</p>
                    </div>
                    
                    <div class="footer-section contact">
                        <h4>Kontakt</h4>
                        <div class="contact-item">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                                <circle cx="12" cy="10" r="3"/>
                            </svg>
                            <div class="contact-text">
                                <span>Kaiserdamm 9</span>
                                <span>14059 Berlin</span>
                            </div>
                        </div>
                        <div class="contact-item">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                            </svg>
                            <div class="contact-text">
                                <a href="tel:+4917662800600">+49 176 62800600</a>
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
                    
                    <div class="footer-section hours">
                        <h4>Öffnungszeiten</h4>
                        <div class="hours-row">
                            <span class="day">Mo - Fr</span>
                            <span class="time">08:00 - 18:00</span>
                        </div>
                        <div class="hours-row">
                            <span class="day">Samstag</span>
                            <span class="time">09:00 - 13:00</span>
                        </div>
                        <div class="hours-row">
                            <span class="day">Sonntag</span>
                            <span class="time">Geschlossen</span>
                        </div>
                    </div>
                </div>
                
                <div class="footer-content">
                    <p>&copy; 2024 Praxis Vital & Active. Alle Rechte vorbehalten.</p>
                    <div class="footer-legal">
                        <a href="impressum.html">Impressum</a>
                        <a href="datenschutz.html">Datenschutz</a>
                    </div>
                </div>
            </div>
        </footer>
    `}export{d as a,c,l as i};
