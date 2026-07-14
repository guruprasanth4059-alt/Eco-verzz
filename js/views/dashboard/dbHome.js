/* Dashboard Home View */

import { AppState } from '../../state.js';
import { SVGCharts } from '../../charts.js';

export async function render(container) {
    const state = AppState.getState();

    // Calculate level metrics (Level 4: points range 4000 to 5000)
    const pointsInLevel = state.points - 4000;
    const progressPercent = Math.min(Math.max(Math.round((pointsInLevel / 1000) * 100), 0), 100);

    container.innerHTML = `
        <!-- Welcome Banner -->
        <div class="db-welcome-banner">
            <div class="db-welcome-text">
                <h1>Welcome Back, Eco-Citizen! 👋</h1>
                <p>You are on a <strong>${state.streak}-day streak</strong>. Your efforts have offset another 4.5kg CO2 equivalents today.</p>
            </div>
            
            <!-- Circular Level progress -->
            <div class="db-level-ring-container">
                <div id="level-progress-ring"></div>
                <div style="line-height: 1.2;">
                    <div style="font-size: 0.8rem; opacity: 0.8; font-weight: 600;">LEVEL PROGRESS</div>
                    <div style="font-size: 1.3rem; font-weight: 800; font-family: var(--font-heading);">Level ${state.level} Pioneer</div>
                    <div style="font-size: 0.75rem; opacity: 0.8;">${state.points.toLocaleString()} / 5,000 PTS</div>
                </div>
            </div>
        </div>

        <!-- Six Modules Shortcut Grid -->
        <h2 style="font-size: 1.25rem; margin-bottom: var(--spacing-md); font-family: var(--font-heading);">Operating Modules</h2>
        
        <div class="db-home-modules-grid">
            <!-- 1. Environmental Intelligence -->
            <div class="db-module-shortcut-card" style="--module-color: var(--color-intelligence); --module-color-rgb: var(--color-intelligence-rgb);">
                <div class="db-shortcut-header">
                    <div class="db-shortcut-icon"><i data-lucide="globe"></i></div>
                    <div class="db-shortcut-metric">
                        <div class="db-shortcut-metric-value">6.4 kg</div>
                        <div class="db-shortcut-metric-label">HDPE Saved</div>
                    </div>
                </div>
                <div class="db-shortcut-body">
                    <h3>Environmental Intelligence</h3>
                    <p>Track materials and carbon multipliers.</p>
                    <a href="#/dashboard/intelligence" class="btn db-shortcut-btn">View Module →</a>
                </div>
            </div>

            <!-- 2. Circular Economy -->
            <div class="db-module-shortcut-card" style="--module-color: var(--color-circular); --module-color-rgb: var(--color-circular-rgb);">
                <div class="db-shortcut-header">
                    <div class="db-shortcut-icon"><i data-lucide="refresh-cw"></i></div>
                    <div class="db-shortcut-metric">
                        <div class="db-shortcut-metric-value">${state.wastePassports.length}</div>
                        <div class="db-shortcut-metric-label">Waste Passports</div>
                    </div>
                </div>
                <div class="db-shortcut-body">
                    <h3>Circular Exchange</h3>
                    <p>Manage recycling records and marketplace swap.</p>
                    <a href="#/dashboard/circular" class="btn db-shortcut-btn">View Module →</a>
                </div>
            </div>

            <!-- 3. Green Community -->
            <div class="db-module-shortcut-card" style="--module-color: var(--color-community); --module-color-rgb: var(--color-community-rgb);">
                <div class="db-shortcut-header">
                    <div class="db-shortcut-icon"><i data-lucide="users"></i></div>
                    <div class="db-shortcut-metric">
                        <div class="db-shortcut-metric-value">${state.communityStories.length + 15}</div>
                        <div class="db-shortcut-metric-label">Active Pioneers</div>
                    </div>
                </div>
                <div class="db-shortcut-body">
                    <h3>Green Community</h3>
                    <p>Connect with local groups and share feeds.</p>
                    <a href="#/dashboard/community" class="btn db-shortcut-btn">View Module →</a>
                </div>
            </div>

            <!-- 4. EcoJourney AI -->
            <div class="db-module-shortcut-card" style="--module-color: var(--color-ecojourney); --module-color-rgb: var(--color-ecojourney-rgb);">
                <div class="db-shortcut-header">
                    <div class="db-shortcut-icon"><i data-lucide="sparkles"></i></div>
                    <div class="db-shortcut-metric">
                        <div class="db-shortcut-metric-value">3 / 4</div>
                        <div class="db-shortcut-metric-label">Active Targets</div>
                    </div>
                </div>
                <div class="db-shortcut-body">
                    <h3>EcoJourney AI</h3>
                    <p>Chat with companion and log goals.</p>
                    <a href="#/dashboard/ecojourney" class="btn db-shortcut-btn">View Module →</a>
                </div>
            </div>

            <!-- 5. Green Portfolio -->
            <div class="db-module-shortcut-card" style="--module-color: var(--color-portfolio); --module-color-rgb: var(--color-portfolio-rgb);">
                <div class="db-shortcut-header">
                    <div class="db-shortcut-icon"><i data-lucide="award"></i></div>
                    <div class="db-shortcut-metric">
                        <div class="db-shortcut-metric-value">6</div>
                        <div class="db-shortcut-metric-label">Badges Unlocked</div>
                    </div>
                </div>
                <div class="db-shortcut-body">
                    <h3>Green Portfolio</h3>
                    <p>Verified legacy archive and certificates.</p>
                    <a href="#/dashboard/portfolio" class="btn db-shortcut-btn">View Module →</a>
                </div>
            </div>

            <!-- 6. Recognition & Rewards -->
            <div class="db-module-shortcut-card" style="--module-color: var(--color-recognition); --module-color-rgb: var(--color-recognition-rgb);">
                <div class="db-shortcut-header">
                    <div class="db-shortcut-icon"><i data-lucide="trophy"></i></div>
                    <div class="db-shortcut-metric">
                        <div class="db-shortcut-metric-value">${state.claimedRewards.length}</div>
                        <div class="db-shortcut-metric-label">Redeemed Coupons</div>
                    </div>
                </div>
                <div class="db-shortcut-body">
                    <h3>Rewards & recognition</h3>
                    <p>Redeem EcoPoints and audit transaction statements.</p>
                    <a href="#/dashboard/recognition" class="btn db-shortcut-btn">View Module →</a>
                </div>
            </div>
        </div>

        <div class="db-grid-2">
            <!-- Left Pane: Timeline -->
            <div class="card">
                <h3 style="font-size: 1.1rem; margin-bottom: var(--spacing-sm);">Recent Activity Log</h3>
                <span class="card-subtitle">Verified operating system timeline</span>
                
                <div class="timeline-list">
                    ${state.activities.map(act => `
                        <div class="timeline-item">
                            <span class="timeline-time">${act.time}</span>
                            <div class="timeline-dot" style="background-color: var(--color-${act.module});"></div>
                            <h4>${act.title}</h4>
                            <p>${act.detail}</p>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Right Pane: AI Tips -->
            <div class="card" style="border-top: 4px solid var(--color-ecojourney);">
                <div class="card-header-flex">
                    <h3>EcoJourney Recommendations</h3>
                    <i data-lucide="sparkles" style="color: var(--color-ecojourney); width: 20px; height: 20px;"></i>
                </div>
                <p style="font-size: 0.95rem; line-height: 1.5; color: var(--db-text-muted); margin-bottom: var(--spacing-md);">
                    "Excellent progress this week, Citizen! I suggest focusing on the **Waste Passport** module today. Scanning a carton container box will complete your active checklist target and earn you a quick **+150 EcoPoints**."
                </p>
                <div class="flex flex-col gap" style="gap: var(--spacing-sm);">
                    <a href="#/dashboard/circular" class="btn btn-primary" style="background-color: var(--color-circular); width: 100%;">
                        <i data-lucide="camera"></i>
                        <span>Scan Packaging Material</span>
                    </a>
                    <a href="#/dashboard/ecojourney" class="btn btn-outline" style="border-color: var(--color-ecojourney); color: var(--color-ecojourney); width: 100%;">
                        <i data-lucide="message-square"></i>
                        <span>Ask AI Companion</span>
                    </a>
                </div>
            </div>
        </div>
    `;

    // Render progress ring SVG
    const ringSlot = document.getElementById('level-progress-ring');
    if (ringSlot) {
        SVGCharts.createProgressRing(ringSlot, progressPercent, '#4CAF50');
    }
}
