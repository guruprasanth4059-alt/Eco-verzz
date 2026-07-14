/* Circular Economy Dashboard Module */

import { AppState } from '../../state.js';

export async function render(container) {
    const renderContent = () => {
        const state = AppState.getState();
        
        container.innerHTML = `
            <!-- Module Header Banner -->
            <div class="db-module-header" style="--module-accent: var(--color-circular); --module-accent-rgb: var(--color-circular-rgb);">
                <div class="db-module-title-section">
                    <div class="db-module-icon-box" style="background-color: rgba(var(--color-circular-rgb), 0.15); color: var(--color-circular);">
                        <i data-lucide="refresh-cw"></i>
                    </div>
                    <div>
                        <h1>Circular Economy Exchange</h1>
                        <p>Verify waste passports, view local recyclers, and claim circular goods.</p>
                    </div>
                </div>
                <span class="pillar-badge" style="--pillar-accent: var(--color-circular); --pillar-accent-rgb: var(--color-circular-rgb);">Exchange Active</span>
            </div>

            <div class="db-grid-2">
                <!-- Left Column: Waste Passport Form & History -->
                <div class="flex flex-col gap" style="gap: var(--spacing-lg);">
                    
                    <!-- Form Card -->
                    <div class="card" style="border-top: 4px solid var(--color-circular);">
                        <h3 style="font-size: 1.15rem; margin-bottom: var(--spacing-sm);">Waste Passport Registry</h3>
                        <p style="font-size: 0.85rem; color: var(--db-text-muted); margin-bottom: var(--spacing-md);">Log materials diverted to certified collection depots to update your passport and earn EcoPoints.</p>
                        
                        <form id="wp-log-form" style="display: flex; flex-direction: column; gap: var(--spacing-md);" onsubmit="return false;">
                            <div class="flex gap" style="gap: var(--spacing-md);">
                                <div style="flex: 1;">
                                    <label style="display: block; font-size: 0.8rem; font-weight: 600; margin-bottom: var(--spacing-xs); color: var(--db-text-muted);">MATERIAL CATEGORY</label>
                                    <select id="wp-item-input" class="input-text" style="width: 100%;" required>
                                        <option value="HDPE Containers">HDPE Plastics (Containers, Jugs)</option>
                                        <option value="PET Beverage Bottles">PET Plastics (Beverage Bottles)</option>
                                        <option value="Cardboard Boxes">Cardboard Packaging</option>
                                        <option value="Glass Bottles">Glass Bottles & Jars</option>
                                        <option value="Organic Compostable">Organic Food Waste</option>
                                    </select>
                                </div>
                                <div style="flex: 0.5;">
                                    <label style="display: block; font-size: 0.8rem; font-weight: 600; margin-bottom: var(--spacing-xs); color: var(--db-text-muted);">WEIGHT (KG)</label>
                                    <input type="number" step="0.1" min="0.1" id="wp-weight-input" class="input-text" style="width: 100%;" placeholder="e.g. 2.4" required>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary ripple" style="background-color: var(--color-circular); width: fit-content; align-self: flex-end;">
                                <i data-lucide="plus"></i>
                                <span>Register in Passport</span>
                            </button>
                        </form>
                    </div>

                    <!-- Ledger History Card -->
                    <div class="card">
                        <h3 style="font-size: 1.15rem; margin-bottom: var(--spacing-sm);">Logged Passports Directory</h3>
                        <span class="card-subtitle">Verified blockchain-anchored circular logs</span>
                        
                        <div class="records-table-container">
                            <table class="records-table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>DATE</th>
                                        <th>MATERIAL</th>
                                        <th>WEIGHT</th>
                                        <th>POINTS</th>
                                        <th>STATUS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${state.wastePassports.map(wp => `
                                        <tr>
                                            <td style="font-family: var(--font-heading); font-weight: 600;">${wp.id}</td>
                                            <td>${wp.date}</td>
                                            <td>${wp.item}</td>
                                            <td>${wp.weight}</td>
                                            <td style="color: #10B981; font-weight: 700;">+${wp.points}</td>
                                            <td>
                                                <span class="pillar-badge" style="--pillar-accent: #10B981; --pillar-accent-rgb: 16, 185, 129; font-size: 0.7rem; padding: 0.15rem 0.4rem;">${wp.status}</span>
                                            </td>
                                        </tr>
                                    `).join('')}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <!-- Right Column: Interactive Map & Marketplace -->
                <div class="flex flex-col gap" style="gap: var(--spacing-lg);">
                    
                    <!-- Map Card -->
                    <div class="card">
                        <h3 style="font-size: 1.15rem; margin-bottom: var(--spacing-xs);">Local Sorting Networks</h3>
                        <span class="card-subtitle">Click pins to audit collection facilities</span>
                        
                        <div style="position: relative; margin-top: var(--spacing-md);">
                            <svg viewBox="0 0 400 250" class="mock-map-svg">
                                <!-- Map grid styling -->
                                <rect width="100%" height="100%" fill="var(--db-input-bg)" />
                                <path d="M 0,50 Q 200,80 400,60" fill="none" stroke="var(--db-border)" stroke-width="2" />
                                <path d="M 120,0 Q 150,150 100,250" fill="none" stroke="var(--db-border)" stroke-width="1.5" />
                                <path d="M 280,0 Q 250,120 300,250" fill="none" stroke="var(--db-border)" stroke-width="1.5" />
                                
                                <!-- Map Pins -->
                                <g class="map-pin" transform="translate(140, 70)" id="pin-1">
                                    <circle cx="0" cy="0" r="10" fill="rgba(8, 145, 178, 0.2)" />
                                    <circle cx="0" cy="0" r="5" fill="var(--color-circular)" />
                                    <title>Municipal Recycling Depot #4 (HDPE / Glass) - 1.2x points multiplier</title>
                                </g>
                                <g class="map-pin" transform="translate(220, 150)" id="pin-2">
                                    <circle cx="0" cy="0" r="10" fill="rgba(249, 115, 22, 0.2)" />
                                    <circle cx="0" cy="0" r="5" fill="var(--color-community)" />
                                    <title>EcoVerse Organic Hub (Compost / Seed swap) - 1.5x points multiplier</title>
                                </g>
                                <g class="map-pin" transform="translate(80, 180)" id="pin-3">
                                    <circle cx="0" cy="0" r="10" fill="rgba(16, 185, 129, 0.2)" />
                                    <circle cx="0" cy="0" r="5" fill="var(--color-intelligence)" />
                                    <title>E-Waste Reclamation Station - 2.0x points multiplier</title>
                                </g>
                            </svg>
                            <div id="map-info-box" style="margin-top: var(--spacing-sm); padding: var(--spacing-sm); border-radius: var(--radius-sm); background-color: var(--db-card-bg); border: 1px solid var(--db-border); font-size: 0.85rem; font-weight: 500; text-align: center;">
                                Hover or click map pins to verify coordinates.
                            </div>
                        </div>
                    </div>

                    <!-- Marketplace Card -->
                    <div class="card">
                        <h3 style="font-size: 1.15rem; margin-bottom: var(--spacing-sm);">Circular Marketplace</h3>
                        <span class="card-subtitle">Zero-cost sharing of tools & soil assets</span>
                        
                        <div class="flex flex-col gap" style="gap: var(--spacing-md); margin-top: var(--spacing-md);">
                            ${state.marketplaceItems.length === 0 ? `
                                <div style="text-align: center; color: var(--db-text-muted); font-size: 0.9rem; padding: var(--spacing-md);">All shared items claimed! Check back soon.</div>
                            ` : state.marketplaceItems.map(item => `
                                <div class="flex align-center justify-between" style="padding: var(--spacing-md); border: 1px solid var(--db-border); border-radius: var(--radius-md); background-color: var(--db-card-bg);">
                                    <div>
                                        <h4 style="font-size: 0.95rem; font-weight: 600;">${item.title}</h4>
                                        <p style="font-size: 0.8rem; color: var(--db-text-muted); margin-bottom: 0;">Listed by ${item.user} • ${item.location}</p>
                                    </div>
                                    <button class="btn btn-outline claim-market-btn" data-id="${item.id}" style="padding: 0.4rem 0.8rem; font-size: 0.8rem; border-color: var(--color-circular); color: var(--color-circular);">
                                        Claim Item
                                    </button>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Attach listeners
        const form = document.getElementById('wp-log-form');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const item = document.getElementById('wp-item-input').value;
                const weight = document.getElementById('wp-weight-input').value;
                
                AppState.addWastePassport(item, weight);
                renderContent(); // Re-render local content
            });
        }

        // Marketplace claims
        document.querySelectorAll('.claim-market-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(e.target.dataset.id);
                AppState.claimMarketplaceItem(id);
                renderContent();
            });
        });

        // Map pin clicks
        const infoBox = document.getElementById('map-info-box');
        const pins = {
            'pin-1': "Municipal Recycling Depot #4 (1.1 miles) - Accepting HDPE and Glass jars. Sorting boosts points by 1.2x.",
            'pin-2': "EcoVerse Organics Hub (2.4 miles) - Accepting backyard food scraps. Claims free compost bins here.",
            'pin-3': "E-Waste Reclamation Station (0.7 miles) - Sorting circuits, old phones, and rechargeable cells. 2.0x points active."
        };
        
        Object.keys(pins).forEach(pinId => {
            const elem = document.getElementById(pinId);
            if (elem) {
                elem.addEventListener('click', () => {
                    infoBox.innerHTML = `<i data-lucide="info" style="width: 14px; height: 14px; display: inline; vertical-align: middle; color: var(--color-circular); margin-right: 4px;"></i> <strong>Facility:</strong> ${pins[pinId]}`;
                    if (window.lucide) window.lucide.createIcons();
                });
            }
        });

        if (window.lucide) {
            window.lucide.createIcons();
        }
    };

    renderContent();
}
