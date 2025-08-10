export class Navigation {
    constructor() {
        // Will be initialized after render
    }

    setupMobileMenu() {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');

        if (hamburger && navMenu) {
            hamburger.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
                document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
            });

            document.addEventListener('click', (e) => {
                if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });

            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.style.overflow = '';
                });
            });
        }
    }

    setupScrollEffect() {
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            navbar.style.background = window.scrollY > 50 ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = window.scrollY > 50 ? '0 2px 20px rgba(0, 0, 0, 0.1)' : 'none';
        });
    }

    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
                }
            });
        });
    }

    setupLogoScrolling() {
        const logoLink = document.querySelector('.logo-link');
        if (logoLink) {
            logoLink.addEventListener('click', function(e) {
                // Check if we're on the homepage
                const currentPath = window.location.pathname;
                if (currentPath === '/' || currentPath === '/index.html') {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
                // If not on homepage, let the default link behavior work (navigate to home)
            });
        }
    }

    init() {
        this.setupMobileMenu();
        this.setupScrollEffect();
        this.setupSmoothScrolling();
        this.setupLogoScrolling();
    }

    render() {
        return `
            <nav class="navbar">
                <div class="nav-container">
                    <div class="nav-logo">
                        <a href="/" class="logo-link">
                            <img src="/images/Logo.svg" alt="Praxis Vital & Active Logo" class="butterfly-logo">
                            <span class="logo-text">Praxis Vital & Active</span>
                        </a>
                    </div>
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
        `;
    }
}
