import { Navigation } from '../components/Navigation.js';
import { Hero } from '../components/Hero.js';
import { Services } from '../components/Services.js';
import { Practice } from '../components/Practice.js';
import { Contact } from '../components/Contact.js';
import { Footer } from '../components/Footer.js';

export class HomePage {
    constructor() {
        this.navigation = new Navigation();
        this.hero = new Hero();
        this.services = new Services();
        this.practice = new Practice();
        this.contact = new Contact();
        this.footer = new Footer();
    }

    render() {
        return `
            ${this.navigation.render()}
            ${this.hero.render()}
            ${this.services.render()}
            ${this.practice.render()}
            ${this.contact.render()}
            ${this.footer.render()}
        `;
    }

    init() {
        this.navigation.init();
        this.contact.init();
    }
}