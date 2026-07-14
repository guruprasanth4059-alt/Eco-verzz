/* Marketing Home View */

export async function render(container) {
    container.innerHTML = `
        <!-- Hero Section -->
        <section class="hero-section">
            <div class="container hero-grid">
                <div class="hero-content">
                    <h1>The Environmental Operating System for the <span>Circular Future</span></h1>
                    <p class="hero-subtitle">ECO VERZZ turns sustainability from a fragmented aspiration into an integrated daily habit. Leverage intelligence, trade resources, and join global movements with gamified recognition.</p>
                    <div class="hero-actions">
                        <a href="#/login" class="btn btn-primary ripple">
                            <span>Launch Dashboard</span>
                            <i data-lucide="arrow-right"></i>
                        </a>
                        <a href="#/features" class="btn btn-outline ripple">
                            <span>Explore Features</span>
                        </a>
                    </div>
                </div>
                <div class="hero-visual">
                    <svg viewBox="0 0 400 400" class="hero-loop-svg">
                        <!-- Background glow -->
                        <circle cx="200" cy="200" r="160" fill="none" stroke="rgba(76, 175, 80, 0.05)" stroke-width="2" />
                        
                        <!-- Eco Loop 1 (Outer green) -->
                        <path class="svg-spin-clockwise" d="M 200, 40 A 160,160 0 1,1 199.9,40" fill="none" stroke="url(#hero-grad-green)" stroke-width="12" stroke-linecap="round" stroke-dasharray="700 300" />
                        
                        <!-- Eco Loop 2 (Inner cyan) -->
                        <path class="svg-spin-counter" d="M 200, 80 A 120,120 0 1,0 200.1,80" fill="none" stroke="url(#hero-grad-teal)" stroke-width="8" stroke-linecap="round" stroke-dasharray="500 200" />
                        
                        <!-- Core leaf indicator -->
                        <g transform="translate(180, 180)">
                            <circle cx="20" cy="20" r="45" fill="var(--marketing-forest)" />
                            <path d="M 20,5 L 35,20 A 15,15 0 0,1 20,35 A 15,15 0 0,1 5,20 Z" fill="#FFFFFF" transform="translate(0, 0) scale(1)" />
                        </g>

                        <!-- Gradients definition -->
                        <defs>
                            <linearGradient id="hero-grad-green" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0%" stop-color="#0F5132" />
                                <stop offset="50%" stop-color="#4CAF50" />
                                <stop offset="100%" stop-color="#10B981" />
                            </linearGradient>
                            <linearGradient id="hero-grad-teal" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0%" stop-color="#0891B2" />
                                <stop offset="100%" stop-color="#8B5CF6" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </section>

        <!-- Problem Statement Section -->
        <section class="marketing-section section-darker">
            <div class="container">
                <div class="section-header">
                    <span class="section-tagline">The Challenge</span>
                    <h2 class="section-title">Bridging the Sustainability Gap</h2>
                    <p class="section-subtitle">Individual goodwill is high, but fragmented applications and a lack of feedback loops stall meaningful environmental progress.</p>
                </div>
                
                <div class="problem-grid">
                    <div class="problem-card card">
                        <div class="problem-stat">8M+</div>
                        <h3>Tons of Plastic Yearly</h3>
                        <p>Plastics enter marine environments annually. Current waste management structures fail to classify and direct recyclable materials.</p>
                    </div>
                    <div class="problem-card card">
                        <div class="problem-stat">70%</div>
                        <h3>Circular Potential</h3>
                        <p>Of global carbon emissions are addressable by shifting to a circular, shareable resource cycle, yet few localized structures exist.</p>
                    </div>
                    <div class="problem-card card">
                        <div class="problem-stat">12%</div>
                        <h3>Sustained Action</h3>
                        <p>Only a small fraction of citizens maintain climate habits beyond 30 days due to isolated platforms lacking positive reinforcement.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Pillars Overview Section -->
        <section class="marketing-section">
            <div class="container">
                <div class="section-header">
                    <span class="section-tagline">Operating Pillars</span>
                    <h2 class="section-title">The Six Ecological Foundations</h2>
                    <p class="section-subtitle">ECO VERZZ orchestrates environmental citizenship through six interconnected pillars that power our operating system.</p>
                </div>

                <div class="pillars-grid">
                    <!-- Pillar 1 -->
                    <div class="pillar-card card" style="--pillar-accent: var(--color-intelligence); --pillar-accent-rgb: var(--color-intelligence-rgb);">
                        <div class="pillar-icon-wrapper">
                            <i data-lucide="globe"></i>
                        </div>
                        <h3>Environmental Intelligence</h3>
                        <p>Real-time analytics and tracking of materials, waste logs, and water metrics. AI-assisted carbon calculations simplify action.</p>
                        <div class="pillar-footer">
                            <span class="pillar-badge"><span class="pillar-badge-dot"></span>Emerald</span>
                            <a href="#/features/intelligence" class="pillar-link">Learn More <i data-lucide="chevron-right"></i></a>
                        </div>
                    </div>

                    <!-- Pillar 2 -->
                    <div class="pillar-card card" style="--pillar-accent: var(--color-circular); --pillar-accent-rgb: var(--color-circular-rgb);">
                        <div class="pillar-icon-wrapper">
                            <i data-lucide="refresh-cw"></i>
                        </div>
                        <h3>Circular Economy Exchange</h3>
                        <p>A digitized waste passport ledger linking citizens with local recyclers, alongside a community marketplace for resource sharing.</p>
                        <div class="pillar-footer">
                            <span class="pillar-badge"><span class="pillar-badge-dot"></span>Teal</span>
                            <a href="#/features/circular" class="pillar-link">Learn More <i data-lucide="chevron-right"></i></a>
                        </div>
                    </div>

                    <!-- Pillar 3 -->
                    <div class="pillar-card card" style="--pillar-accent: var(--color-community); --pillar-accent-rgb: var(--color-community-rgb);">
                        <div class="pillar-icon-wrapper">
                            <i data-lucide="users"></i>
                        </div>
                        <h3>Green Community</h3>
                        <p>A local coordination grid for volunteer groups, schools, and corporate groups. Post stories, match opportunities, and lead change.</p>
                        <div class="pillar-footer">
                            <span class="pillar-badge"><span class="pillar-badge-dot"></span>Orange</span>
                            <a href="#/features/community" class="pillar-link">Learn More <i data-lucide="chevron-right"></i></a>
                        </div>
                    </div>

                    <!-- Pillar 4 -->
                    <div class="pillar-card card" style="--pillar-accent: var(--color-ecojourney); --pillar-accent-rgb: var(--color-ecojourney-rgb);">
                        <div class="pillar-icon-wrapper">
                            <i data-lucide="sparkles"></i>
                        </div>
                        <h3>EcoJourney AI</h3>
                        <p>Your intelligent, supportive climate companion. Analyzes material habits, suggests custom targets, and tracks logs in a unified timeline.</p>
                        <div class="pillar-footer">
                            <span class="pillar-badge"><span class="pillar-badge-dot"></span>Violet</span>
                            <a href="#/features/ecojourney" class="pillar-link">Learn More <i data-lucide="chevron-right"></i></a>
                        </div>
                    </div>

                    <!-- Pillar 5 -->
                    <div class="pillar-card card" style="--pillar-accent: var(--color-portfolio); --pillar-accent-rgb: var(--color-portfolio-rgb);">
                        <div class="pillar-icon-wrapper">
                            <i data-lucide="award"></i>
                        </div>
                        <h3>Green Portfolio</h3>
                        <p>An exportable, verified record of your lifetime environmental contributions—carbon offset, trees planted, and materials saved.</p>
                        <div class="pillar-footer">
                            <span class="pillar-badge"><span class="pillar-badge-dot"></span>Amber</span>
                            <a href="#/features/portfolio" class="pillar-link">Learn More <i data-lucide="chevron-right"></i></a>
                        </div>
                    </div>

                    <!-- Pillar 6 -->
                    <div class="pillar-card card" style="--pillar-accent: var(--color-recognition); --pillar-accent-rgb: var(--color-recognition-rgb);">
                        <div class="pillar-icon-wrapper">
                            <i data-lucide="trophy"></i>
                        </div>
                        <h3>Recognition & Rewards</h3>
                        <p>EcoPoints and achievements connected to real-world impact rewards: native tree sponsorships, zero-waste gear, and event passes.</p>
                        <div class="pillar-footer">
                            <span class="pillar-badge"><span class="pillar-badge-dot"></span>Rose</span>
                            <a href="#/features/recognition" class="pillar-link">Learn More <i data-lucide="chevron-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- How It Works Section -->
        <section class="marketing-section section-darker">
            <div class="container">
                <div class="section-header">
                    <span class="section-tagline">The Loop</span>
                    <h2 class="section-title">The Circular Habit Engine</h2>
                    <p class="section-subtitle">Sustainability is a continuous loop. Here is how the ECO VERZZ OS facilitates daily engagement.</p>
                </div>

                <div class="circular-process">
                    <div class="process-step">
                        <div class="process-icon-circle"><i data-lucide="search"></i></div>
                        <h3>1. Learn</h3>
                        <p>Scan materials and query EcoIntelligence on recycling methods.</p>
                    </div>
                    <div class="process-step">
                        <div class="process-icon-circle"><i data-lucide="edit-3"></i></div>
                        <h3>2. Act</h3>
                        <p>Log actions inside the Waste Passport or trade circular goods.</p>
                    </div>
                    <div class="process-step">
                        <div class="process-icon-circle"><i data-lucide="share-2"></i></div>
                        <h3>3. Share</h3>
                        <p>Inspire colleagues and friends in the Green Community feed.</p>
                    </div>
                    <div class="process-step">
                        <div class="process-icon-circle"><i data-lucide="gift"></i></div>
                        <h3>4. Get Rewarded</h3>
                        <p>Deduct your EcoPoints balance to plant trees and sponsor initiatives.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Call to Action Section -->
        <section class="marketing-section" style="background: linear-gradient(135deg, rgba(15,81,50,0.05), rgba(76,175,80,0.05));">
            <div class="container text-center" style="text-align: center; max-width: 800px;">
                <h2 style="font-size: 2.5rem; color: var(--marketing-forest); margin-bottom: var(--spacing-md);">Ready to power your circular future?</h2>
                <p style="font-size: 1.15rem; color: var(--marketing-text-muted); margin-bottom: var(--spacing-xl);">Join thousands of households, volunteer groups, and eco-pioneers running their sustainability journey on ECO VERZZ.</p>
                <a href="#/login" class="btn btn-primary ripple" style="padding: 1rem 2rem; font-size: 1.1rem;">
                    <span>Launch the Operating System</span>
                    <i data-lucide="rocket"></i>
                </a>
            </div>
        </section>
    `;
}
