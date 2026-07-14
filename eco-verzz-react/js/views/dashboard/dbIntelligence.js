/* Environmental Intelligence Module Dashboard */

import { SVGCharts } from '../../charts.js';
import { AppState } from '../../state.js';

const materialDictionary = {
    'pet': { bin: "Plastic Recycle Bin", instructions: "Rinse bottle, remove cap, and crush flat to conserve space.", points: 50, icon: "check-circle", color: "#10B981" },
    'plastic bottle': { bin: "Plastic Recycle Bin", instructions: "Rinse bottle, remove cap, and crush flat to conserve space.", points: 50, icon: "check-circle", color: "#10B981" },
    'hdpe': { bin: "Plastic Recycle Bin", instructions: "Rinse, squeeze flat. Safe for municipal sorting hubs.", points: 60, icon: "check-circle", color: "#10B981" },
    'milk carton': { bin: "Paper Recycle Bin", instructions: "Rinse clean, open top folds completely, and squeeze flat.", points: 40, icon: "check-circle", color: "#0891B2" },
    'carton': { bin: "Paper Recycle Bin", instructions: "Rinse clean, open top folds completely, and squeeze flat.", points: 40, icon: "check-circle", color: "#0891B2" },
    'cardboard': { bin: "Paper Recycle Bin", instructions: "Break down boxes flat, remove adhesive tape and plastic wraps.", points: 80, icon: "check-circle", color: "#0891B2" },
    'glass': { bin: "Glass Depot Bin", instructions: "Rinse clean. Lids should be removed and sorted into metal streams.", points: 70, icon: "check-circle", color: "#D97706" },
    'glass jar': { bin: "Glass Depot Bin", instructions: "Rinse clean. Lids should be removed and sorted into metal streams.", points: 70, icon: "check-circle", color: "#D97706" },
    'banana peel': { bin: "Compost Bin", instructions: "Remove fruit labels. Organic waste only. Safe for backyard compost.", points: 30, icon: "check-circle", color: "#4CAF50" },
    'compost': { bin: "Compost Bin", instructions: "Remove fruit labels. Organic waste only. Safe for backyard compost.", points: 30, icon: "check-circle", color: "#4CAF50" },
    'styrofoam': { bin: "Landfill Trash Bin", instructions: "Polystyrene is not recyclable in your municipal district. Landfill stream.", points: 0, icon: "alert-triangle", color: "#FF5252" },
    'polystyrene': { bin: "Landfill Trash Bin", instructions: "Polystyrene is not recyclable in your municipal district. Landfill stream.", points: 0, icon: "alert-triangle", color: "#FF5252" }
};

export async function render(container) {
    container.innerHTML = `
        <!-- Module Header Banner -->
        <div class="db-module-header">
            <div class="db-module-title-section">
                <div class="db-module-icon-box">
                    <i data-lucide="globe"></i>
                </div>
                <div>
                    <h1>Environmental Intelligence</h1>
                    <p>Track carbon metrics, material footprints, and query recycling systems.</p>
                </div>
            </div>
            <span class="pillar-badge" style="--pillar-accent: var(--color-intelligence); --pillar-accent-rgb: var(--color-intelligence-rgb);">EI Active</span>
        </div>

        <div class="db-grid-2">
            <!-- Left Pane: Material Checker & Feeds -->
            <div class="flex flex-col gap" style="gap: var(--spacing-lg);">
                
                <!-- Material Lookup Card -->
                <div class="card" style="border-top: 4px solid var(--color-intelligence);">
                    <h3 style="font-size: 1.15rem; margin-bottom: var(--spacing-sm);">Material Sorting Checker</h3>
                    <p style="font-size: 0.85rem; color: var(--db-text-muted); margin-bottom: var(--spacing-md);">Type in a packaging material or code (e.g. 'PET', 'Carton', 'Styrofoam') to audit local sorting instructions.</p>
                    
                    <form id="material-lookup-form" class="lookup-form" onsubmit="return false;">
                        <input type="text" id="material-input" class="input-text" placeholder="Type material: e.g. PET, glass jar, milk carton..." required>
                        <button type="submit" class="btn btn-primary btn-accent ripple">
                            <i data-lucide="search"></i>
                            <span>Check</span>
                        </button>
                    </form>

                    <div id="lookup-result-slot" class="lookup-results-box hidden">
                        <!-- Inserted dynamically on check -->
                    </div>
                </div>

                <!-- Learning Feed Card -->
                <div class="card">
                    <h3 style="font-size: 1.15rem; margin-bottom: var(--spacing-sm);">Intelligence Feed</h3>
                    <span class="card-subtitle">Latest climate and recycling updates</span>
                    
                    <div class="flex flex-col gap" style="gap: var(--spacing-md); margin-top: var(--spacing-md);">
                        <div style="border-left: 2px solid var(--color-intelligence); padding-left: var(--spacing-md);">
                            <h4 style="font-size: 0.95rem; font-weight: 600;">District Sorting Criteria Updated</h4>
                            <p style="font-size: 0.85rem; color: var(--db-text-muted); margin-bottom: 0;">Sorting centers now accept Grade 5 Polypropylene (PP) packaging. High-heat sorting machinery active (+20 pts multiplier).</p>
                        </div>
                        <div style="border-left: 2px solid var(--color-intelligence); padding-left: var(--spacing-md);">
                            <h4 style="font-size: 0.95rem; font-weight: 600;">Local Water Reservoir Status</h4>
                            <p style="font-size: 0.85rem; color: var(--db-text-muted); margin-bottom: 0;">Water reservoir levels at 84% capacity. Conservation advisory: Green (Normal). Net-zero greywater reuse systems running.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right Pane: Carbon equivalents chart -->
            <div class="card">
                <div class="card-header-flex">
                    <div>
                        <h3 class="card-title">Carbon Footprint Trend</h3>
                        <span class="card-subtitle">Monthly CO2e equivalents in kilograms</span>
                    </div>
                    <div class="widget-trend trend-down">
                        <i data-lucide="trending-down"></i>
                        <span>-12.4%</span>
                    </div>
                </div>
                
                <div id="ei-carbon-chart-slot" style="height: 220px; margin-top: var(--spacing-md);"></div>
                
                <div style="margin-top: var(--spacing-lg); border-top: 1px solid var(--db-border); padding-top: var(--spacing-md); display: flex; justify-content: space-around; text-align: center;">
                    <div>
                        <div style="font-size: 1.5rem; font-weight: 800; color: var(--color-intelligence);">185 kg</div>
                        <div style="font-size: 0.75rem; color: var(--db-text-muted);">THIS MONTH</div>
                    </div>
                    <div>
                        <div style="font-size: 1.5rem; font-weight: 800; color: var(--db-text-muted);">210 kg</div>
                        <div style="font-size: 0.75rem; color: var(--db-text-muted);">PREV MONTH</div>
                    </div>
                    <div>
                        <div style="font-size: 1.5rem; font-weight: 800; color: var(--marketing-forest);">1.5 tons</div>
                        <div style="font-size: 0.75rem; color: var(--db-text-muted);">LIFETIME OFFSET</div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Render Charts
    setTimeout(() => {
        const chartSlot = document.getElementById('ei-carbon-chart-slot');
        if (chartSlot) {
            const data = [240, 225, 212, 198, 190, 185];
            const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
            SVGCharts.createLineChart(chartSlot, data, labels, 'var(--color-intelligence)', 'var(--color-intelligence-rgb)');
        }
        
        // Setup Form Submissions
        const form = document.getElementById('material-lookup-form');
        const input = document.getElementById('material-input');
        const resultSlot = document.getElementById('lookup-result-slot');
        
        if (form && input && resultSlot) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const query = input.value.trim().toLowerCase();
                
                // Search dictionary
                let found = null;
                for (const key in materialDictionary) {
                    if (query.includes(key)) {
                        found = materialDictionary[key];
                        break;
                    }
                }
                
                // Show result
                resultSlot.classList.remove('hidden');
                resultSlot.classList.add('fade-in');
                
                if (found) {
                    resultSlot.style.borderColor = found.color;
                    resultSlot.innerHTML = `
                        <div class="flex align-center gap" style="gap: var(--spacing-sm); margin-bottom: var(--spacing-xs); color: ${found.color}; font-weight: 700;">
                            <i data-lucide="${found.icon}"></i>
                            <span>${found.bin}</span>
                            ${found.points > 0 ? `<span class="reward-cost-badge" style="margin-left: auto; background-color: rgba(16, 185, 129, 0.08); color: #10B981;">+${found.points} PTS</span>` : ''}
                        </div>
                        <p style="margin: 0; font-size: 0.9rem; line-height: 1.4;">${found.instructions}</p>
                    `;
                } else {
                    resultSlot.style.borderColor = 'var(--db-text-muted)';
                    resultSlot.innerHTML = `
                        <div class="flex align-center gap" style="gap: var(--spacing-sm); margin-bottom: var(--spacing-xs); color: var(--db-text-muted); font-weight: 700;">
                            <i data-lucide="help-circle"></i>
                            <span>General Recycling Code Check</span>
                            <span class="reward-cost-badge" style="margin-left: auto; background-color: rgba(76, 175, 80, 0.08); color: #4CAF50;">+20 PTS</span>
                        </div>
                        <p style="margin: 0; font-size: 0.9rem; line-height: 1.4;">Unrecognized custom packaging. Check for sorting stamps (PET 1, HDPE 2, etc.). Keep sorted and hand over at closest municipal collection depot.</p>
                    `;
                }
                
                if (window.lucide) {
                    window.lucide.createIcons();
                }
            });
        }
    }, 50);
}
