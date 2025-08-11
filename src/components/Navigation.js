export function createNavigation() {
    return `
        <nav class="navbar">
            <div class="nav-container">
                <a href="/" class="nav-logo">
                    <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
                        <circle cx="50" cy="50" r="45" fill="#3f5068"/>
                        <path d="M30 40h40v20H30z" fill="white"/>
                        <circle cx="40" cy="50" r="5" fill="#3f5068"/>
                        <circle cx="60" cy="50" r="5" fill="#3f5068"/>
                    </svg>
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
    `;
}

export function initNavigation() {
    // Logo click handler
    const navLogo = document.querySelector('.nav-logo');
    if (navLogo) {
        navLogo.addEventListener('click', (e) => {
            e.preventDefault();
            if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                window.location.href = '/';
            }
        });
    }

    // Section link handlers
    document.querySelectorAll('.nav-link[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            const section = href.substring(1);
            
            if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
                const target = document.getElementById(section);
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            } else {
                window.location.href = `/${href}`;
            }
        });
    });

    // Mobile menu
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
}
