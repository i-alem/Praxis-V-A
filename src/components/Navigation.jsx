// Navigation Component
export function Navigation() {
    return `
        <nav class="navbar">
            <div class="nav-container">
                <a href="/" class="nav-logo">
                    <img src="/logo-light.svg" alt="Praxis Vital & Active Logo" width="40" height="40">
                    <span>Praxis Vital & Active</span>
                </a>
                <div class="nav-right">
                    <button class="dark-mode-toggle" id="dark-mode-toggle" aria-label="Dark Mode umschalten">
                        <svg class="sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="5"/>
                            <line x1="12" y1="1" x2="12" y2="3"/>
                            <line x1="12" y1="21" x2="12" y2="23"/>
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                            <line x1="1" y1="12" x2="3" y2="12"/>
                            <line x1="21" y1="12" x2="23" y2="12"/>
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                        </svg>
                        <svg class="moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                        </svg>
                    </button>
                    <div class="hamburger" id="hamburger">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </div>
                </div>
                <div class="nav-menu" id="nav-menu">
                    <a href="#services" class="nav-link">Leistungen</a>
                    <a href="#practice" class="nav-link">Praxis</a>
                    <a href="https://medifox.de/termine" target="_blank" class="nav-link cta-link">Termin buchen</a>
                </div>
            </div>
        </nav>
    `;
}

// Initialize navigation functionality
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
    const updateNavbarScroll = () => {
        const navbar = document.querySelector('.navbar');
        const isDark = document.body.classList.contains('dark-mode');
        if (window.scrollY > 50) {
            navbar.style.background = isDark ? 'rgba(31, 41, 55, 0.98)' : 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = isDark ? 'rgba(31, 41, 55, 0.95)' : 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    };
    
    window.addEventListener('scroll', updateNavbarScroll);

    // Dark mode toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const savedMode = localStorage.getItem('darkMode');
    
    if (savedMode === 'enabled') {
        document.body.classList.add('dark-mode');
        updateNavbarScroll();
    }
    
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
            updateNavbarScroll();
        });
    }
}
