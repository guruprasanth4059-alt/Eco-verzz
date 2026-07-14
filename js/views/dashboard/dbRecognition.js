/* Recognition & Rewards Dashboard Module */

import { AppState } from '../../state.js';

export async function render(container) {
    const renderContent = () => {
        const state = AppState.getState();
        
        // Filter points activities
        const pointsTransactions = state.activities.filter(act => 
            act.title.includes("Points") || act.title.includes("PTS") || act.module === 'recognition'
        );

        container.innerHTML = `
            <!-- Module Header Banner -->
            <div class="db-module-header" style="--module-accent: var(--color-recognition); --module-accent-rgb: var(--color-recognition-rgb);">
                <div class="db-module-title-section">
                    <div class="db-module-icon-box" style="background-color: rgba(var(--color-recognition-rgb), 0.15); color: var(--color-recognition);">
                        <i data-lucide="trophy"></i>
                    </div>
                    <div>
                        <h1>Recognition & Rewards Ecosystem</h1>
                        <p>Redeem EcoPoints for environmental action, audit transaction histories, and view claimed vouchers.</p>
                    </div>
                </div>
                <span class="pillar-badge" style="--pillar-accent: var(--color-recognition); --pillar-accent-rgb: var(--color-recognition-rgb);">Rewards Active</span>
            </div>

            <div class="db-grid-2">
                <!-- Left Pane: Rewards Store -->
                <div class="card" style="border-top: 4px solid var(--color-recognition);">
                    <h3 style="font-size: 1.15rem; margin-bottom: var(--spacing-sm);">EcoPoints Rewards Store</h3>
                    <p style="font-size: 0.85rem; color: var(--db-text-muted); margin-bottom: var(--spacing-md);">Exchange your verified EcoPoints balance to fund conservation operations or claim sustainable gear.</p>
                    
                    <div class="rewards-store-grid">
                        ${state.rewards.map(reward => {
                            const canAfford = state.points >= reward.cost;
                            return `
                                <div class="reward-card card" style="padding: var(--spacing-md); border-color: ${canAfford ? 'var(--db-border)' : 'rgba(244, 63, 94, 0.15)'};">
                                    <div class="reward-header">
                                        <span class="reward-cost-badge">${reward.cost} PTS</span>
                                    </div>
                                    <h3>${reward.title}</h3>
                                    <p>${reward.description}</p>
                                    <button class="btn btn-primary redeem-reward-btn" data-id="${reward.id}" ${canAfford ? '' : 'disabled'} style="background-color: ${canAfford ? 'var(--color-recognition)' : 'var(--db-text-muted)'}; width: 100%; font-size: 0.85rem; padding: 0.5rem;">
                                        ${canAfford ? 'Redeem Reward' : 'Insufficient Points'}
                                    </button>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>

                <!-- Right Pane: Claimed Inventory & Ledger -->
                <div class="flex flex-col gap" style="gap: var(--spacing-lg);">
                    
                    <!-- Claimed Inventory Card -->
                    <div class="card" style="border-top: 4px solid var(--color-recognition);">
                        <h3 style="font-size: 1.15rem; margin-bottom: var(--spacing-sm);">Claimed Rewards Inventory</h3>
                        <span class="card-subtitle">Active vouchers, certificates, and codes</span>
                        
                        <div class="flex flex-col gap" style="gap: var(--spacing-sm); margin-top: var(--spacing-md);">
                            ${state.claimedRewards.length === 0 ? `
                                <div style="text-align: center; color: var(--db-text-muted); font-size: 0.9rem; padding: var(--spacing-md);">No claimed rewards yet. Exchange points on the left to start!</div>
                            ` : state.claimedRewards.map(item => `
                                <div style="padding: var(--spacing-md); border: 1px solid var(--db-border); border-radius: var(--radius-md); background-color: var(--db-card-bg);">
                                    <div class="flex justify-between" style="font-weight: 600; font-size: 0.9rem; margin-bottom: 2px;">
                                        <span>${item.title}</span>
                                        <span style="color: var(--color-recognition); font-size: 0.75rem;">-${item.cost} PTS</span>
                                    </div>
                                    <div class="flex justify-between" style="font-size: 0.8rem; color: var(--db-text-muted);">
                                        <span>Code: <strong style="color: var(--db-text); font-family: monospace;">${item.code}</strong></span>
                                        <span>Claimed: ${item.date}</span>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Points ledger timeline -->
                    <div class="card">
                        <h3 style="font-size: 1.15rem; margin-bottom: var(--spacing-sm);">EcoPoints Ledger Statement</h3>
                        <span class="card-subtitle">Verified point transactions</span>
                        
                        <div class="timeline-list" style="margin-top: var(--spacing-md);">
                            ${pointsTransactions.length === 0 ? `
                                <div style="text-align: center; color: var(--db-text-muted); font-size: 0.85rem; padding: var(--spacing-md);">No point transactions recorded in ledger.</div>
                            ` : pointsTransactions.map(trans => `
                                <div class="timeline-item">
                                    <span class="timeline-time">${trans.time}</span>
                                    <div class="timeline-dot" style="background-color: var(--color-recognition);"></div>
                                    <h4 style="font-size: 0.85rem;">${trans.title}</h4>
                                    <p style="font-size: 0.75rem; color: var(--db-text-muted);">${trans.detail}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                </div>
            </div>
        `;

        // Redeem button clicks
        document.querySelectorAll('.redeem-reward-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(e.target.dataset.id);
                const claimed = AppState.redeemReward(id);
                if (claimed) {
                    renderContent(); // local update
                }
            });
        });

        if (window.lucide) {
            window.lucide.createIcons();
        }
    };

    renderContent();
}
