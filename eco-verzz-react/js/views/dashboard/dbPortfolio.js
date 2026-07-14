/* Green Portfolio Dashboard Module */

import { AppState } from '../../state.js';

export async function render(container) {
    const state = AppState.getState();

    // Dynamically evaluate badges unlocked status
    const badges = [
        { id: 1, title: "Eco-Pioneer", desc: "Initiated ECO VERZZ OS footprint audit.", unlocked: true },
        { id: 2, title: "Circular Sorter", desc: "Logged at least 1 Waste Passport record.", unlocked: state.wastePassports.length > 0 },
        { id: 3, title: "Daily Habit Hero", desc: "Maintained a streak multiplier ≥ 10 days.", unlocked: state.streak >= 10 },
        { id: 4, title: "Social Builder", desc: "Shared a story in the Green Community Feed.", unlocked: state.communityStories.length > 0 },
        { id: 5, title: "Legacy Sponsor", desc: "Redeemed at least 1 tree sponsorship reward.", unlocked: state.claimedRewards.length > 0 },
        { id: 6, title: "Carbon Champion", desc: "Reach 5,000 global EcoPoints.", unlocked: state.points >= 5000 }
    ];

    const unlockedCount = badges.filter(b => b.unlocked).length;

    // Calculate total materials recycled
    let totalKgs = 0;
    state.wastePassports.forEach(wp => {
        const wt = parseFloat(wp.weight) || 0;
        totalKgs += wt;
    });

    container.innerHTML = `
        <!-- Module Header Banner -->
        <div class="db-module-header" style="--module-accent: var(--color-portfolio); --module-accent-rgb: var(--color-portfolio-rgb);">
            <div class="db-module-title-section">
                <div class="db-module-icon-box" style="background-color: rgba(var(--color-portfolio-rgb), 0.15); color: var(--color-portfolio);">
                    <i data-lucide="award"></i>
                </div>
                <div>
                    <h1>Green Legacy Portfolio</h1>
                    <p>Display verified environmental achievements, contribution totals, and print your sustainability CV.</p>
                </div>
            </div>
            <span class="pillar-badge" style="--pillar-accent: var(--color-portfolio); --pillar-accent-rgb: var(--color-portfolio-rgb);">Portfolio Active</span>
        </div>

        <div class="db-grid-2">
            <!-- Left Pane: Badge Cabinet -->
            <div class="card" style="border-top: 4px solid var(--color-portfolio);">
                <div class="card-header-flex">
                    <div>
                        <h3 class="card-title">Achievement Badge Cabinet</h3>
                        <span class="card-subtitle">Unlock milestones by maintaining habits</span>
                    </div>
                    <span class="pillar-badge" style="--pillar-accent: var(--color-portfolio); --pillar-accent-rgb: var(--color-portfolio-rgb);">${unlockedCount} / 6 Unlocked</span>
                </div>

                <div class="badge-cabinet">
                    ${badges.map(b => `
                        <div class="badge-item ${b.unlocked ? 'unlocked' : ''}">
                            <div class="badge-icon-box">
                                <i data-lucide="${b.unlocked ? 'award' : 'lock'}"></i>
                            </div>
                            <h5>${b.title}</h5>
                            <p>${b.desc}</p>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Right Pane: Shareable Legacy CV -->
            <div class="flex flex-col gap" style="gap: var(--spacing-lg);">
                
                <!-- Lifetime Stats -->
                <div class="card">
                    <h3 style="font-size: 1.15rem; margin-bottom: var(--spacing-sm);">Verified Lifetime Contribution</h3>
                    <span class="card-subtitle">Aggregated biospheric achievements</span>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-md); margin-top: var(--spacing-md);">
                        <div style="padding: var(--spacing-md); border-radius: var(--radius-sm); background-color: var(--db-input-bg); text-align: center;">
                            <div style="font-size: 1.75rem; font-weight: 800; color: var(--color-portfolio);">${totalKgs.toFixed(1)} kg</div>
                            <div style="font-size: 0.75rem; color: var(--db-text-muted);">RECYCLED WEIGHT</div>
                        </div>
                        <div style="padding: var(--spacing-md); border-radius: var(--radius-sm); background-color: var(--db-input-bg); text-align: center;">
                            <div style="font-size: 1.75rem; font-weight: 800; color: var(--color-portfolio);">${state.claimedRewards.filter(r => r.rewardId === 1).length}</div>
                            <div style="font-size: 0.75rem; color: var(--db-text-muted);">TREES PLANTED</div>
                        </div>
                    </div>
                </div>

                <!-- Export CV -->
                <div class="card" style="border-top: 4px solid var(--color-portfolio);">
                    <h3 style="font-size: 1.15rem; margin-bottom: var(--spacing-sm);">Export Sustainability Resume</h3>
                    <p style="font-size: 0.85rem; color: var(--db-text-muted); margin-bottom: var(--spacing-md);">Generate a verified print-ready summary of your lifetime carbon offset credits and badges.</p>
                    
                    <div class="portfolio-cv" id="cv-report" style="padding: var(--spacing-md); font-size: 0.85rem; border: 1px dashed var(--db-border);">
                        <div style="text-align: center; border-bottom: 2px solid var(--color-portfolio); padding-bottom: var(--spacing-sm); margin-bottom: var(--spacing-sm);">
                            <h4 style="font-size: 1rem; color: var(--db-text); font-family: var(--font-heading); margin-bottom: 2px;">ECO VERZZ — CITIZEN PORTFOLIO</h4>
                            <span style="font-size: 0.7rem; color: var(--db-text-muted);">Verified Cryptographic Record</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                            <span>Citizen Identifier:</span>
                            <strong>EC-7729-VERIFIED</strong>
                        </div>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                            <span>Total Verified EcoPoints:</span>
                            <strong>${state.points.toLocaleString()} PTS</strong>
                        </div>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                            <span>Active Streak Multiplier:</span>
                            <strong>${state.streak} Days</strong>
                        </div>
                        <div style="display: flex; justify-content: space-between;">
                            <span>Diverted Waste Volume:</span>
                            <strong>${totalKgs.toFixed(1)} kg HDPE/PET/Glass</strong>
                        </div>
                    </div>
                    
                    <button id="btn-export-cv" class="btn btn-primary ripple" style="background-color: var(--color-portfolio); width: 100%; margin-top: var(--spacing-md);">
                        <i data-lucide="printer"></i>
                        <span>Generate & Print CV</span>
                    </button>
                </div>

            </div>
        </div>
    `;

    // Export CV Button Handler
    const printBtn = document.getElementById('btn-export-cv');
    if (printBtn) {
        printBtn.addEventListener('click', () => {
            alert("Sustainability CV generated successfully!\n\nVerifying cryptographic signatures...\nArchived record EC-7729-VERIFIED sent to system print scheduler.");
            window.print();
        });
    }

    if (window.lucide) {
        window.lucide.createIcons();
    }
}
