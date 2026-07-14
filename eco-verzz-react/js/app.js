/* Main Application Bootstrapper & Event Handlers */

import { AppState } from './state.js';
import { AppRouter } from './router.js';
import { initAICopilot } from './aiCopilot.js';

class App {
    constructor() {
        this.bindEvents();
        this.registerStateListeners();
        
        // Load initial theme
        const savedTheme = localStorage.getItem('eco-impact-theme') || 'light';
        AppState.setTheme(savedTheme);

        // Initialize AI Copilot
        initAICopilot();
    }

    bindEvents() {
        // 1. Mobile navigation menu toggle (Marketing)
        const mobileToggle = document.querySelector('.mobile-nav-toggle');
        const mobileMenu = document.querySelector('.mobile-menu');
        const openIcon = document.querySelector('.menu-open-icon');
        const closeIcon = document.querySelector('.menu-close-icon');
        
        if (mobileToggle && mobileMenu) {
            mobileToggle.addEventListener('click', () => {
                const isHidden = mobileMenu.classList.contains('hidden');
                if (isHidden) {
                    mobileMenu.classList.remove('hidden');
                    openIcon.classList.add('hidden');
                    closeIcon.classList.remove('hidden');
                } else {
                    mobileMenu.classList.add('hidden');
                    openIcon.classList.remove('hidden');
                    closeIcon.classList.add('hidden');
                }
            });
        }

        // 2. Sidebar slide-out toggle on mobile (Dashboard)
        const sidebarToggle = document.querySelector('.sidebar-toggle-btn');
        const sidebar = document.querySelector('.dashboard-sidebar');
        
        if (sidebarToggle && sidebar) {
            sidebarToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                sidebar.classList.toggle('active');
            });
            
            // Close sidebar when clicking outside
            document.addEventListener('click', (e) => {
                if (sidebar.classList.contains('active') && !sidebar.contains(e.target) && e.target !== sidebarToggle) {
                    sidebar.classList.remove('active');
                }
            });
        }

        // 3. Theme Toggle Button
        const themeBtn = document.getElementById('theme-toggle');
        if (themeBtn) {
            themeBtn.addEventListener('click', () => {
                const currentTheme = AppState.getState().theme;
                const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
                AppState.setTheme(nextTheme);
                localStorage.setItem('eco-impact-theme', nextTheme);
            });
        }

        // 4. Notifications Dropdown Toggle
        const notifyBtn = document.querySelector('.notification-btn');
        const notifyDropdown = document.querySelector('.notification-dropdown');
        if (notifyBtn && notifyDropdown) {
            notifyBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                notifyDropdown.classList.toggle('hidden');
            });

            document.addEventListener('click', () => {
                notifyDropdown.classList.add('hidden');
            });

            notifyDropdown.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        }

        // 5. Clear Notifications
        const clearBtn = document.querySelector('.clear-notifications-btn');
        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                AppState.clearNotifications();
            });
        }
    }

    registerStateListeners() {
        // Register observer to sync state components
        AppState.subscribe((state) => {
            // A. Update Points Display
            const pointsVal = document.getElementById('topbar-points-value');
            if (pointsVal) {
                // Smooth increment effect
                const currentVal = parseInt(pointsVal.textContent.replace(/,/g, '')) || 0;
                this.animateValue(pointsVal, currentVal, state.points, 600);
            }

            // B. Update Streak Display
            const streakVal = document.getElementById('topbar-streak-value');
            if (streakVal) {
                streakVal.textContent = state.streak;
            }

            // C. Update Theme Icons
            const lightIcon = document.querySelector('.theme-icon-light');
            const darkIcon = document.querySelector('.theme-icon-dark');
            if (lightIcon && darkIcon) {
                if (state.theme === 'light') {
                    lightIcon.classList.remove('hidden');
                    darkIcon.classList.add('hidden');
                } else {
                    lightIcon.classList.add('hidden');
                    darkIcon.classList.remove('hidden');
                }
            }

            // D. Render Notifications list
            this.renderNotificationsList(state.notifications);
        });
    }

    renderNotificationsList(notifications) {
        const listContainer = document.getElementById('notification-list');
        const badge = document.querySelector('.notification-badge');
        
        if (!listContainer) return;
        
        if (notifications.length === 0) {
            listContainer.innerHTML = '<div class="notification-empty">No new alerts</div>';
            if (badge) badge.classList.remove('active');
            return;
        }

        if (badge) badge.classList.add('active');

        listContainer.innerHTML = notifications.map(n => `
            <div class="notification-item">
                <i data-lucide="${n.icon || 'bell'}" class="notification-item-icon"></i>
                <div class="notification-item-text">
                    <p style="margin: 0; line-height: 1.3;">${n.text}</p>
                    <span class="notification-item-time">${n.time}</span>
                </div>
            </div>
        `).join('');

        if (window.lucide) {
            window.lucide.createIcons();
        }
    }

    // Smooth value increment animation
    animateValue(obj, start, end, duration) {
        if (start === end) return;
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);
            obj.textContent = value.toLocaleString();
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }
}

// Instantiate on script load
document.addEventListener('DOMContentLoaded', () => {
    window.EcoApp = new App();
});
