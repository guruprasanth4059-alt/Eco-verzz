/* Client-Side Hash Router */

import { AppState } from './state.js';

// Define route map to view modules
const routes = {
    // Marketing Shell Routes
    '#/': { shell: 'marketing', view: 'home', file: './views/marketing/home.js' },
    '#/login': { shell: 'marketing', view: 'login', file: './views/marketing/login.js' },
    '#/signup': { shell: 'marketing', view: 'signup', file: './views/marketing/signup.js' },
    '#/features': { shell: 'marketing', view: 'features', file: './views/marketing/features.js' },
    '#/about': { shell: 'marketing', view: 'about', file: './views/marketing/about.js' },
    '#/impact': { shell: 'marketing', view: 'impact', file: './views/marketing/impact.js' },
    '#/features/intelligence': { shell: 'marketing', view: 'details', file: './views/marketing/details.js', params: { id: 'intelligence' } },
    '#/features/circular': { shell: 'marketing', view: 'details', file: './views/marketing/details.js', params: { id: 'circular' } },
    '#/features/community': { shell: 'marketing', view: 'details', file: './views/marketing/details.js', params: { id: 'community' } },
    '#/features/ecojourney': { shell: 'marketing', view: 'details', file: './views/marketing/details.js', params: { id: 'ecojourney' } },
    '#/features/portfolio': { shell: 'marketing', view: 'details', file: './views/marketing/details.js', params: { id: 'portfolio' } },
    '#/features/recognition': { shell: 'marketing', view: 'details', file: './views/marketing/details.js', params: { id: 'recognition' } },

    // Dashboard Shell Routes
    '#/dashboard': { shell: 'dashboard', view: 'dbHome', title: 'Dashboard Home', file: './views/dashboard/dbHome.js' },
    '#/dashboard/intelligence': { shell: 'dashboard', view: 'dbIntelligence', title: 'Environmental Intelligence', file: './views/dashboard/dbIntelligence.js', accent: 'var(--color-intelligence)', accentRgb: 'var(--color-intelligence-rgb)' },
    '#/dashboard/circular': { shell: 'dashboard', view: 'dbCircular', title: 'Circular Economy Exchange', file: './views/dashboard/dbCircular.js', accent: 'var(--color-circular)', accentRgb: 'var(--color-circular-rgb)' },
    '#/dashboard/community': { shell: 'dashboard', view: 'dbCommunity', title: 'Green Community Feed', file: './views/dashboard/dbCommunity.js', accent: 'var(--color-community)', accentRgb: 'var(--color-community-rgb)' },
    '#/dashboard/ecojourney': { shell: 'dashboard', view: 'dbEcoJourney', title: 'EcoJourney AI Companion', file: './views/dashboard/dbEcoJourney.js', accent: 'var(--color-ecojourney)', accentRgb: 'var(--color-ecojourney-rgb)' },
    '#/dashboard/portfolio': { shell: 'dashboard', view: 'dbPortfolio', title: 'Green Legacy Portfolio', file: './views/dashboard/dbPortfolio.js', accent: 'var(--color-portfolio)', accentRgb: 'var(--color-portfolio-rgb)' },
    '#/dashboard/recognition': { shell: 'dashboard', view: 'dbRecognition', title: 'Recognition Ecosystem', file: './views/dashboard/dbRecognition.js', accent: 'var(--color-recognition)', accentRgb: 'var(--color-recognition-rgb)' },
};

class Router {
    constructor() {
        this.marketingShell = document.getElementById('marketing-shell');
        this.dashboardShell = document.getElementById('dashboard-shell');
        this.marketingContainer = document.getElementById('marketing-view-container');
        this.dashboardContainer = document.getElementById('dashboard-view-container');
        this.topbarTitle = document.getElementById('topbar-title');
        
        window.addEventListener('hashchange', () => this.handleRouteChange());
        window.addEventListener('load', () => this.handleRouteChange());
    }

    async handleRouteChange() {
        const hash = window.location.hash || '#/';
        const route = routes[hash];

        if (!route) {
            // Fallback to Home
            window.location.hash = '#/';
            return;
        }

        // Trigger shell switching
        this.switchShell(route.shell);

        // Render subview
        try {
            // Load transition effect
            const activeContainer = route.shell === 'marketing' ? this.marketingContainer : this.dashboardContainer;
            activeContainer.classList.add('invisible');
            
            // Dynamically import view file
            const module = await import(/* @vite-ignore */ route.file);
            
            // Apply accents if we are in a dashboard module
            if (route.shell === 'dashboard') {
                const root = document.documentElement;
                if (route.accent) {
                    root.style.setProperty('--module-accent', route.accent);
                    root.style.setProperty('--module-accent-rgb', route.accentRgb);
                } else {
                    // Default to Leaf/Emerald for Dashboard Home
                    root.style.setProperty('--module-accent', 'var(--color-intelligence)');
                    root.style.setProperty('--module-accent-rgb', 'var(--color-intelligence-rgb)');
                }
                
                // Update Topbar View Title
                this.topbarTitle.textContent = route.title || 'Dashboard';
                
                // Update Sidebar highlight
                this.updateSidebarHighlight(hash);
            } else {
                // Update Marketing Header active links
                this.updateMarketingNavHighlight(hash);
                
                // Hide header and footer if this is the login or signup page
                const header = this.marketingShell.querySelector('.marketing-header');
                const footer = this.marketingShell.querySelector('.marketing-footer');
                if (header && footer) {
                    if (hash === '#/login' || hash === '#/signup') {
                        header.classList.add('hidden');
                        footer.classList.add('hidden');
                    } else {
                        header.classList.remove('hidden');
                        footer.classList.remove('hidden');
                    }
                }
            }

            // Execute view render
            await module.render(activeContainer, route.params || {});
            
            // Clean animations
            setTimeout(() => {
                activeContainer.classList.remove('invisible');
                activeContainer.classList.add('fade-in');
                // Re-initialize Lucide Icons on the dynamic HTML
                if (window.lucide) {
                    window.lucide.createIcons();
                }
            }, 50);

        } catch (error) {
            console.error(`Failed to load view module for hash ${hash}:`, error);
        }

        // Auto close mobile menu on navigation
        const mobileMenu = document.querySelector('.mobile-menu');
        const openIcon = document.querySelector('.menu-open-icon');
        const closeIcon = document.querySelector('.menu-close-icon');
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            openIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        }

        // Reset scroll position to top
        window.scrollTo(0, 0);
    }

    switchShell(shellType) {
        if (shellType === 'marketing') {
            this.dashboardShell.classList.add('hidden');
            this.marketingShell.classList.remove('hidden');
        } else {
            this.marketingShell.classList.add('hidden');
            this.dashboardShell.classList.remove('hidden');
        }
    }

    updateSidebarHighlight(activeHash) {
        // Clear all active highlights
        document.querySelectorAll('.sidebar-item').forEach(item => {
            item.classList.remove('active');
        });

        // Set matching sidebar highlight
        let activeId = 'side-db-home';
        if (activeHash.includes('/intelligence')) activeId = 'side-db-intelligence';
        else if (activeHash.includes('/circular')) activeId = 'side-db-circular';
        else if (activeHash.includes('/community')) activeId = 'side-db-community';
        else if (activeHash.includes('/ecojourney')) activeId = 'side-db-ecojourney';
        else if (activeHash.includes('/portfolio')) activeId = 'side-db-portfolio';
        else if (activeHash.includes('/recognition')) activeId = 'side-db-recognition';

        const activeElem = document.getElementById(activeId);
        if (activeElem) {
            activeElem.classList.add('active');
        }
    }

    updateMarketingNavHighlight(activeHash) {
        // Clear active classes
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });

        let navId = '';
        if (activeHash === '#/') navId = 'nav-home';
        else if (activeHash === '#/login') navId = 'nav-login';
        else if (activeHash === '#/features' || activeHash.startsWith('#/features/')) navId = 'nav-features';
        else if (activeHash === '#/about') navId = 'nav-about';
        else if (activeHash === '#/impact') navId = 'nav-impact';

        if (navId) {
            const activeItem = document.getElementById(navId);
            if (activeItem) {
                activeItem.classList.add('active');
            }
        }
    }
}

export const AppRouter = new Router();
