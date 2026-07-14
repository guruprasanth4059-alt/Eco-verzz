/* About / Vision & Mission View */

const principles = [
    { num: "01", title: "Waste is Design Failure", desc: "In a healthy ecosystem, the output of one process is the input for another. We design waste out of existence." },
    { num: "02", title: "Local Action, Global Ripple", desc: "Small, individual actions, when replicated at scale across communities, alter global ecological paths." },
    { num: "03", title: "Incentives Align with Ecology", desc: "Good environmental citizenship should be recognized, celebrated, and reinforced with value." },
    { num: "04", title: "Data-Driven Transparency", desc: "Environmental intelligence must be plain, verifiable, and open to avoid greenwashing." },
    { num: "05", title: "Resource Circulation", desc: "Materials must circulate continuously within high-value loops, rather than linear land-fills." },
    { num: "06", title: "Cooperative Stewardship", desc: "Communities, corporate entities, and schools must share materials and coordinate directly." },
    { num: "07", title: "AI in Service of Biosphere", desc: "Leverage advanced artificial intelligence to coach individuals and orchestrate material routing." },
    { num: "08", title: "Nature as Teacher", desc: "We study organic patterns to create responsive systems that balance material inputs and outputs." },
    { num: "09", title: "Verifiable Lifelong Record", desc: "An individual's environmental footprint and savings should be archived as a proud legacy." },
    { num: "10", title: "Zero Exclusion", desc: "Every citizen can participate, regardless of background, neighborhood, or income scale." },
    { num: "11", title: "Action Over Awareness", desc: "Awareness is only the first step. The operating system prioritizes active, logged, verified changes." },
    { num: "12", title: "Continuous Adaptation", desc: "Ecosystems evolve. Our tools and metrics constantly refine to match biosphere updates." }
];

export async function render(container) {
    container.innerHTML = `
        <div class="detail-hero" style="--pillar-accent: var(--marketing-soil); --pillar-accent-rgb: 93, 64, 55;">
            <div class="container detail-container" style="text-align: center;">
                <span class="detail-badge-header" style="color: var(--marketing-soil); justify-content: center;">
                    <i data-lucide="compass"></i>
                    <span>Vision & Manifesto</span>
                </span>
                <h1 style="font-size: 3.5rem; line-height: 1.1;">The EcoVerse Manifesto</h1>
                <p class="detail-introduction" style="margin-top: var(--spacing-md); max-width: 700px; margin-left: auto; margin-right: auto;">
                    Defining the principles and values that guide the design of ECO VERZZ — a system engineered to align human economics with biospheric health.
                </p>
            </div>
        </div>

        <!-- Vision and Mission Section -->
        <section class="marketing-section">
            <div class="container grid" style="grid-template-columns: 1fr 1fr; gap: var(--spacing-xl);">
                <div class="card" style="border-left: 4px solid var(--marketing-forest); padding: var(--spacing-xl);">
                    <h2 style="color: var(--marketing-forest); margin-bottom: var(--spacing-md); font-size: 1.8rem;">Our Vision</h2>
                    <p style="font-size: 1.1rem; line-height: 1.7; color: var(--marketing-text-muted);">
                        To build a world where human economic frameworks operate in perfect harmony with Earth's biophysical boundaries. We envision a society where sustainable actions are frictionless, community-oriented, and structured into the core of daily life.
                    </p>
                </div>
                
                <div class="card" style="border-left: 4px solid var(--marketing-leaf); padding: var(--spacing-xl);">
                    <h2 style="color: var(--marketing-forest); margin-bottom: var(--spacing-md); font-size: 1.8rem;">Our Mission</h2>
                    <p style="font-size: 1.1rem; line-height: 1.7; color: var(--marketing-text-muted);">
                        To deliver the digital infrastructure—the Environmental Operating System—that converts ecological awareness into immediate action. By aligning incentives, localizing recycling loops, and leveraging machine coaching, we empower citizens to lead the circular transition.
                    </p>
                </div>
            </div>
        </section>

        <!-- Manifesto Philosophy -->
        <section class="marketing-section section-darker">
            <div class="container" style="max-width: 900px;">
                <div class="section-header">
                    <span class="section-tagline">Philosophy</span>
                    <h2 class="section-title">The Foundation of EcoVerse</h2>
                </div>
                
                <div class="manifesto-content" style="background-color: var(--marketing-card-bg); padding: var(--spacing-xl); border-radius: var(--radius-lg); border: 1px solid var(--marketing-border);">
                    <p style="font-size: 1.15rem; line-height: 1.8; margin-bottom: var(--spacing-md);">
                        "For decades, sustainability was presented as a list of restrictions—things to avoid, stop doing, or pay extra for. This negative framing runs counter to human behavioral psychology. We believe that true ecological alignment occurs when sustainability is active, rewarding, and deeply communal."
                    </p>
                    <div class="manifesto-quote">
                        "Every action, no matter how small, represents a pixel in the overall portrait of biospheric recovery. Our role is to provide the canvas, the coordinate grid, and the feedback loops to let that portrait emerge."
                    </div>
                    <p style="font-size: 1.1rem; line-height: 1.8; margin-top: var(--spacing-md); color: var(--marketing-text-muted);">
                        ECO VERZZ is more than an app—it is an operating system. It connects localized actions (like recycling a container or compost sorting) directly with digital credentials and macro-ecological benefits.
                    </p>
                </div>
            </div>
        </section>

        <!-- The 12 Principles -->
        <section class="marketing-section">
            <div class="container">
                <div class="section-header">
                    <span class="section-tagline">Core Guidelines</span>
                    <h2 class="section-title">The Twelve EcoVerse Principles</h2>
                    <p class="section-subtitle">These twelve principles govern our product engineering, code architecture, and environmental partnerships.</p>
                </div>

                <div class="principles-grid">
                    ${principles.map(p => `
                        <div class="principle-card card">
                            <div class="principle-num">${p.num}</div>
                            <h4 style="font-size: 1.15rem; margin-bottom: var(--spacing-xs);">${p.title}</h4>
                            <p>${p.desc}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;
}
