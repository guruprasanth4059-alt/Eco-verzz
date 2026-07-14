/* Impact Statistics View */

import { SVGCharts } from '../../charts.js';

export async function render(container) {
    container.innerHTML = `
        <div class="detail-hero" style="--pillar-accent: var(--marketing-sky); --pillar-accent-rgb: 2, 132, 199;">
            <div class="container detail-container" style="text-align: center;">
                <span class="detail-badge-header" style="color: var(--marketing-sky); justify-content: center;">
                    <i data-lucide="bar-chart-3"></i>
                    <span>System Analytics</span>
                </span>
                <h1 style="font-size: 3.5rem; line-height: 1.1;">Real-World System Impact</h1>
                <p class="detail-introduction" style="margin-top: var(--spacing-md); max-width: 700px; margin-left: auto; margin-right: auto;">
                    Transparency is core to the EcoVerse. Review the verified ecological, social, and economic indicators logged across the ECO VERZZ operating system.
                </p>
            </div>
        </div>

        <!-- Macro Stats Counters -->
        <section class="marketing-section">
            <div class="container">
                <div class="impact-stats-grid">
                    <div class="impact-stat-item card">
                        <div class="impact-stat-value">14,250</div>
                        <div class="impact-stat-label">Tons of Waste Diverted</div>
                    </div>
                    <div class="impact-stat-item card">
                        <div class="impact-stat-value">48,900</div>
                        <div class="impact-stat-label">Tons of CO2 Offset</div>
                    </div>
                    <div class="impact-stat-item card">
                        <div class="impact-stat-value">124,500</div>
                        <div class="impact-stat-label">Trees Sponsored & Planted</div>
                    </div>
                    <div class="impact-stat-item card">
                        <div class="impact-stat-value">$185k+</div>
                        <div class="impact-stat-label">Circular Exchange Savings</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Charts Section -->
        <section class="marketing-section section-darker">
            <div class="container impact-hero-grid">
                <!-- Line Chart Card -->
                <div class="impact-charts-container card">
                    <div class="card-header-flex">
                        <div>
                            <h3 class="card-title">Cumulative Carbon Offset (CO2e)</h3>
                            <span class="card-subtitle">In metric tons, verified monthly</span>
                        </div>
                        <span class="pillar-badge" style="--pillar-accent: var(--marketing-forest); --pillar-accent-rgb: var(--marketing-forest-rgb);">Verified</span>
                    </div>
                    <div id="carbon-offset-chart-slot" style="height: 220px;"></div>
                </div>

                <!-- Bar Chart Card -->
                <div class="impact-charts-container card">
                    <div class="card-header-flex">
                        <div>
                            <h3 class="card-title">Materials Diverted by Category</h3>
                            <span class="card-subtitle">In tons, current calendar year</span>
                        </div>
                        <span class="pillar-badge" style="--pillar-accent: var(--marketing-sky); --pillar-accent-rgb: 2, 132, 199;">2026 Year-to-date</span>
                    </div>
                    <div id="waste-diverted-chart-slot" style="height: 220px;"></div>
                </div>
            </div>
        </section>

        <!-- Four Dimension Impact Grid -->
        <section class="marketing-section">
            <div class="container">
                <div class="section-header">
                    <span class="section-tagline">Deep-Dive</span>
                    <h2 class="section-title">The Four Dimensions of Change</h2>
                    <p class="section-subtitle">Our impact extends beyond simple material logs. We measure four specific pillars of systemic transformation.</p>
                </div>

                <div class="pillars-grid" style="grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));">
                    <div class="card">
                        <h3 style="color: var(--marketing-forest); margin-bottom: var(--spacing-sm);">🌿 Ecological Impact</h3>
                        <p style="font-size: 0.9rem; color: var(--marketing-text-muted);">Re-establishing native forests, stabilizing local waterways, reducing municipal waste sorting loads, and supporting urban bio-diversity gardens.</p>
                    </div>
                    <div class="card">
                        <h3 style="color: var(--color-community); margin-bottom: var(--spacing-sm);">🤝 Social Impact</h3>
                        <p style="font-size: 0.9rem; color: var(--marketing-text-muted);">Connecting community volunteers, coordinating zero-waste school lunch programs, and providing structured climate coordination tools for NGOs.</p>
                    </div>
                    <div class="card">
                        <h3 style="color: var(--color-ecojourney); margin-bottom: var(--spacing-sm);">🎓 Educational Impact</h3>
                        <p style="font-size: 0.9rem; color: var(--marketing-text-muted);">Deciphering complex recycling codes, hosting accessible carbon calculator tutorials, and training youth delegates in ecological design.</p>
                    </div>
                    <div class="card">
                        <h3 style="color: var(--color-portfolio); margin-bottom: var(--spacing-sm);">💼 Economic Impact</h3>
                        <p style="font-size: 0.9rem; color: var(--marketing-text-muted);">Injecting values-aligned currency incentives, facilitating zero-cost sharing of tools and seeds, and supporting sustainable local businesses.</p>
                    </div>
                </div>
            </div>
        </section>
    `;

    // Render SVG Charts into Slots
    setTimeout(() => {
        const carbonSlot = document.getElementById('carbon-offset-chart-slot');
        const wasteSlot = document.getElementById('waste-diverted-chart-slot');

        if (carbonSlot) {
            const carbonData = [12, 19, 28, 35, 42, 48.9];
            const carbonLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
            SVGCharts.createLineChart(carbonSlot, carbonData, carbonLabels, 'var(--marketing-forest)', 'var(--marketing-forest-rgb)');
        }

        if (wasteSlot) {
            const wasteData = [450, 680, 250, 890, 310];
            const wasteLabels = ['HDPE', 'PET', 'Paper', 'Glass', 'Compost'];
            SVGCharts.createBarChart(wasteSlot, wasteData, wasteLabels, 'var(--marketing-sky)');
        }
    }, 50);
}
