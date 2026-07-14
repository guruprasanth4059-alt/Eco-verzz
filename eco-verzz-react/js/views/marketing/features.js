/* Pillars / Features Overview View */

export async function render(container) {
    container.innerHTML = `
        <div class="detail-hero" style="--pillar-accent: var(--marketing-forest); --pillar-accent-rgb: var(--marketing-forest-rgb);">
            <div class="container detail-container" style="text-align: center;">
                <span class="detail-badge-header" style="color: var(--marketing-forest); justify-content: center;">
                    <i data-lucide="layers"></i>
                    <span>ECO VERZZ Platform</span>
                </span>
                <h1 style="font-size: 3.5rem; line-height: 1.1;">The Six Core Operating Pillars</h1>
                <p class="detail-introduction" style="margin-top: var(--spacing-md); max-width: 700px; margin-left: auto; margin-right: auto;">
                    A unified suite of tools designed to turn environmental awareness into structured, trackable, and collaborative action. Learn, act, and connect in themed digital ecosystems.
                </p>
            </div>
        </div>

        <section class="marketing-section">
            <div class="container">
                <div class="pillars-grid" style="grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));">
                    
                    <!-- Pillar 1 -->
                    <div class="pillar-card card" style="--pillar-accent: var(--color-intelligence); --pillar-accent-rgb: var(--color-intelligence-rgb);">
                        <div class="pillar-icon-wrapper">
                            <i data-lucide="globe"></i>
                        </div>
                        <h3>Environmental Intelligence</h3>
                        <p>Analyze materials, measure carbon multipliers, and consult our intelligence feeds. Bridge the awareness-action gap by checking if packaging can be recycled near you instantly.</p>
                        <div class="pillar-footer" style="border-top: 1px solid var(--marketing-border); padding-top: var(--spacing-md); margin-top: var(--spacing-lg);">
                            <span class="pillar-badge"><span class="pillar-badge-dot"></span>Emerald Theme</span>
                            <a href="#/features/intelligence" class="btn btn-outline" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;">
                                <span>Learn Details</span>
                            </a>
                        </div>
                    </div>

                    <!-- Pillar 2 -->
                    <div class="pillar-card card" style="--pillar-accent: var(--color-circular); --pillar-accent-rgb: var(--color-circular-rgb);">
                        <div class="pillar-icon-wrapper">
                            <i data-lucide="refresh-cw"></i>
                        </div>
                        <h3>Circular Economy Exchange</h3>
                        <p>Divert materials from landfills with verified Waste Passport records. Connect directly with local recycling facilities and claim shared tools or materials from neighbors.</p>
                        <div class="pillar-footer" style="border-top: 1px solid var(--marketing-border); padding-top: var(--spacing-md); margin-top: var(--spacing-lg);">
                            <span class="pillar-badge"><span class="pillar-badge-dot"></span>Teal Theme</span>
                            <a href="#/features/circular" class="btn btn-outline" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;">
                                <span>Learn Details</span>
                            </a>
                        </div>
                    </div>

                    <!-- Pillar 3 -->
                    <div class="pillar-card card" style="--pillar-accent: var(--color-community); --pillar-accent-rgb: var(--color-community-rgb);">
                        <div class="pillar-icon-wrapper">
                            <i data-lucide="users"></i>
                        </div>
                        <h3>Green Community</h3>
                        <p>Coordinate clean-ups, share sustainability stories, and manage local chapters (schools, neighborhood groups, NGO teams). Watch community achievements climb on the leaderboards.</p>
                        <div class="pillar-footer" style="border-top: 1px solid var(--marketing-border); padding-top: var(--spacing-md); margin-top: var(--spacing-lg);">
                            <span class="pillar-badge"><span class="pillar-badge-dot"></span>Orange Theme</span>
                            <a href="#/features/community" class="btn btn-outline" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;">
                                <span>Learn Details</span>
                            </a>
                        </div>
                    </div>

                    <!-- Pillar 4 -->
                    <div class="pillar-card card" style="--pillar-accent: var(--color-ecojourney); --pillar-accent-rgb: var(--color-ecojourney-rgb);">
                        <div class="pillar-icon-wrapper">
                            <i data-lucide="sparkles"></i>
                        </div>
                        <h3>EcoJourney AI</h3>
                        <p>Receive specialized climate coaching from your personal AI companion. Monitor milestones in a unified vertical timeline and tick off targets to build permanent, healthy habits.</p>
                        <div class="pillar-footer" style="border-top: 1px solid var(--marketing-border); padding-top: var(--spacing-md); margin-top: var(--spacing-lg);">
                            <span class="pillar-badge"><span class="pillar-badge-dot"></span>Violet Theme</span>
                            <a href="#/features/ecojourney" class="btn btn-outline" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;">
                                <span>Learn Details</span>
                            </a>
                        </div>
                    </div>

                    <!-- Pillar 5 -->
                    <div class="pillar-card card" style="--pillar-accent: var(--color-portfolio); --pillar-accent-rgb: var(--color-portfolio-rgb);">
                        <div class="pillar-icon-wrapper">
                            <i data-lucide="award"></i>
                        </div>
                        <h3>Green Portfolio</h3>
                        <p>Establish a verifiable record of your ecological footprint reduction. Store achievements, record trees sponsored, and export a clean resume of environmental impact.</p>
                        <div class="pillar-footer" style="border-top: 1px solid var(--marketing-border); padding-top: var(--spacing-md); margin-top: var(--spacing-lg);">
                            <span class="pillar-badge"><span class="pillar-badge-dot"></span>Amber Theme</span>
                            <a href="#/features/portfolio" class="btn btn-outline" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;">
                                <span>Learn Details</span>
                            </a>
                        </div>
                    </div>

                    <!-- Pillar 6 -->
                    <div class="pillar-card card" style="--pillar-accent: var(--color-recognition); --pillar-accent-rgb: var(--color-recognition-rgb);">
                        <div class="pillar-icon-wrapper">
                            <i data-lucide="trophy"></i>
                        </div>
                        <h3>Recognition & Rewards</h3>
                        <p>Earn EcoPoints for recycling and community action. Sponsor a tree planting, secure partner zero-waste store discounts, and unlock digital profile upgrades.</p>
                        <div class="pillar-footer" style="border-top: 1px solid var(--marketing-border); padding-top: var(--spacing-md); margin-top: var(--spacing-lg);">
                            <span class="pillar-badge"><span class="pillar-badge-dot"></span>Rose Theme</span>
                            <a href="#/features/recognition" class="btn btn-outline" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;">
                                <span>Learn Details</span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    `;
}
