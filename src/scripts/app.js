import { HomePage } from '../pages/HomePage.js';
import { ImpressumPage } from '../pages/ImpressumPage.js';
import { DatenschutzPage } from '../pages/DatenschutzPage.js';

class App {
    constructor() {
        this.currentPage = null;
        this.init();
    }

    init() {
        this.setupRouter();
        this.loadPage();
    }

    setupRouter() {
        // Handle browser back/forward buttons
        window.addEventListener('popstate', () => {
            this.loadPage();
        });
    }

    getCurrentRoute() {
        const path = window.location.pathname;
        
        if (path === '/' || path === '/index.html') {
            return 'home';
        } else if (path === '/impressum.html' || path === '/impressum') {
            return 'impressum';
        } else if (path === '/datenschutz.html' || path === '/datenschutz') {
            return 'datenschutz';
        }
        
        return 'home'; // Default fallback
    }

    loadPage() {
        const route = this.getCurrentRoute();
        const appContainer = document.getElementById('app');
        if (!appContainer) {
            console.error('App container not found');
            return;
        }

        switch (route) {
            case 'home':
                this.currentPage = new HomePage();
                break;
            case 'impressum':
                this.currentPage = new ImpressumPage();
                break;
            case 'datenschutz':
                this.currentPage = new DatenschutzPage();
                break;
            default:
                this.currentPage = new HomePage();
        }

        appContainer.innerHTML = this.currentPage.render();
        if (typeof this.currentPage.init === 'function') this.currentPage.init();
        window.scrollTo(0, 0);
    }

    navigate(path) {
        if (window.location.pathname !== path) {
            window.history.pushState({}, '', path);
            this.loadPage();
        }
    }
}

document.addEventListener('DOMContentLoaded', () => window.app = new App());
export { App };