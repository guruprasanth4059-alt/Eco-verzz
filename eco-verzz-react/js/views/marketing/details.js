/* Feature Detail Dynamic View */

const featuresData = {
    intelligence: {
        title: "Environmental Intelligence",
        accent: "var(--color-intelligence)",
        accentRgb: "var(--color-intelligence-rgb)",
        icon: "globe",
        intro: "Real-time environmental tracking and material analytics to guide sustainable living. Break through the confusion of recycling policies and understand the direct impact of every purchase decision.",
        details: "Environmental Intelligence represents the foundational layer of our Environmental Operating System. By tracking local recycling criteria, energy grids, and material lifecycles, it equips citizens with context-specific data. Instead of vague guidelines, you get immediate, verified steps detailing where, how, and why to recycle materials.",
        capabilities: [
            { icon: "search", title: "Smart Material Lookup", desc: "Type in any material or package code to check its local recycling status and points multiplier." },
            { icon: "bar-chart-2", title: "Real-time Impact Metrics", desc: "Monitor carbon equivalents, diverted waste kilograms, and water volumes dynamically." },
            { icon: "book-open", title: "EcoVerse Learning Feed", desc: "Access bite-sized research updates, local bio-diversity alerts, and practical sustainability tutorials." }
        ],
        ctaText: "Launch Intelligence Dashboard"
    },
    circular: {
        title: "Circular Economy Exchange",
        accent: "var(--color-circular)",
        accentRgb: "var(--color-circular-rgb)",
        icon: "refresh-cw",
        intro: "Diverting valuable resources from landfill streams through digitized materials logging, local recycler mapping, and community item sharing.",
        details: "The Circular Economy Exchange transforms waste into utility. Utilizing a decentralized tracking concept, citizens create verified records of sorted materials, helping depots organize waste feeds. At the same time, the local marketplace allows users to swap compost, tools, and seeds, keeping resources in circulation.",
        capabilities: [
            { icon: "clipboard", title: "Waste Passport Records", desc: "Log HDPE plastic, cardboards, glass, and compost items to verify sorting and earn EcoPoints." },
            { icon: "map-pin", title: "Interactive Recycler Maps", desc: "Find authorized municipal drop-offs, battery stations, and environmental NGOs near you." },
            { icon: "shopping-bag", title: "Zero-Cost Shared Marketplace", desc: "Browse items offered by neighbors or list tools, seeds, and containers you want to share." }
        ],
        ctaText: "Launch Circular Exchange"
    },
    community: {
        title: "Green Community",
        accent: "var(--color-community)",
        accentRgb: "var(--color-community-rgb)",
        icon: "users",
        intro: "Local coordination channels and social updates walls designed to build collective environmental energy, organize cleanups, and track group impact.",
        details: "Sustainability is fundamentally collaborative. The Green Community view coordinates schools, corporations, and community groups into clean-up events, tree planting runs, and energy audits. Share your achievements, highlight partner initiatives, and check the leaderboard standings to grow together.",
        capabilities: [
            { icon: "rss", title: "Unified Community Stories Feed", desc: "Post stories about your sustainability victories, cleanups, or energy savings to inspire others." },
            { icon: "calendar", title: "Local Action Events", desc: "Create or RSVP to neighborhood trash sorting drives, seed swaps, and environmental workshops." },
            { icon: "medal", title: "Dynamic Citizens Leaderboard", desc: "Track points rankings of active community groups, schools, and individuals in your area." }
        ],
        ctaText: "Launch Community Dashboard"
    },
    ecojourney: {
        title: "EcoJourney AI",
        accent: "var(--color-ecojourney)",
        accentRgb: "var(--color-ecojourney-rgb)",
        icon: "sparkles",
        intro: "Intelligent personal guidance and habit check-in tools powered by environmental models. Convert long-term goals into simple checkable daily behaviors.",
        details: "EcoJourney AI is your supportive, non-judgmental companion for environmental habit development. It recommends incremental shifts—like switching to a reusable bag or shortening shower lengths—and records milestones in an interactive timeline, making progress feel personal, structured, and achievable.",
        capabilities: [
            { icon: "message-square", title: "Interactive AI Companion", desc: "Ask questions on footprint reduction, energy auditing, or gardening tips in a chat bubble." },
            { icon: "list-todo", title: "Tailored Goal Checklists", desc: "Activate and log custom goals that align with your lifestyle, earning points on verification." },
            { icon: "clock", title: "Unified Journey Timeline", desc: "Review a vertical historical chart tracking all your waste logs, events joined, and streak records." }
        ],
        ctaText: "Launch EcoJourney AI"
    },
    portfolio: {
        title: "Green Portfolio",
        accent: "var(--color-portfolio)",
        accentRgb: "var(--color-portfolio-rgb)",
        icon: "award",
        intro: "A lifetime record of verified environmental contributions. Package, export, and display your carbon offset statistics, badges, and volunteer logs.",
        details: "Your Green Portfolio represents your environmental CV. In an era where legacy and accountability matter, the portfolio structures your sorted kilograms, trees sponsored, carbon avoided, and community hours into an elegant, shareable digital summary that you can present to employers, schools, or groups.",
        capabilities: [
            { icon: "shield-check", title: "Lifelong Contribution Record", desc: "Review verified tallies of carbon equivalents saved, waste sorted, and energy offset." },
            { icon: "archive", title: "Interactive Badge Cabinet", desc: "Display digital awards and milestones unlocked through consistent environmental action." },
            { icon: "external-link", title: "Shareable Legacy Portfolio", desc: "Generate a web link or export a summary report showcasing your verifiable environmental profile." }
        ],
        ctaText: "Launch Green Portfolio"
    },
    recognition: {
        title: "Recognition & Rewards",
        accent: "var(--color-recognition)",
        accentRgb: "var(--color-recognition-rgb)",
        icon: "trophy",
        intro: "A values-aligned credit system that connects verified ecological activities directly to real-world rewards and community appreciation.",
        details: "The Recognition Ecosystem ensures that green actions receive positive reinforcement. Earn EcoPoints for every item sorted, community story shared, and goal completed. Deduct your points balance to fund native tree plantings with conservation organizations or claim zero-waste gear discounts.",
        capabilities: [
            { icon: "file-text", title: "EcoPoints Ledgers", desc: "Track complete history of points gained and redeemed with details in a clean ledger statement." },
            { icon: "gift", title: "Tangible Rewards Store", desc: "Redeem points to plant trees, secure bulk refills discount codes, or claim eco-summit tickets." },
            { icon: "heart", title: "Appreciation wall", desc: "Review thank-you letters, partner announcements, and digital certificate archives." }
        ],
        ctaText: "Launch Rewards Dashboard"
    }
};

export async function render(container, params) {
    const featureId = params.id || 'intelligence';
    const data = featuresData[featureId];

    if (!data) {
        container.innerHTML = `<div class="detail-container"><h2>Feature not found</h2></div>`;
        return;
    }

    // Set variable style scope
    container.style.setProperty('--pillar-accent', data.accent);
    container.style.setProperty('--pillar-accent-rgb', data.accentRgb);

    container.innerHTML = `
        <!-- Hero Header -->
        <div class="detail-hero">
            <div class="container detail-container">
                <span class="detail-badge-header">
                    <i data-lucide="${data.icon}"></i>
                    <span>${data.title} Pillar</span>
                </span>
                <h1>${data.title}</h1>
                <p class="detail-introduction">${data.intro}</p>
            </div>
        </div>

        <!-- Details & Capabilites -->
        <div class="container detail-container detail-content-section">
            <div class="grid" style="grid-template-columns: 1.1fr 0.9fr; gap: var(--spacing-xl); align-items: start;">
                <div class="detail-left">
                    <h2 class="detail-section-title">Overview & Philosophy</h2>
                    <p style="font-size: 1.05rem; line-height: 1.7; margin-bottom: var(--spacing-md);">${data.details}</p>
                    <p style="font-size: 1.05rem; line-height: 1.7;">By routing through our integrated dashboard experience, this pillar transforms from an abstract marketing category into a practical dashboard workspace where you can see your daily impact grow.</p>
                </div>
                <div class="detail-right" style="position: sticky; top: 100px;">
                    <div class="detail-cta-box">
                        <h3>Run on ECO VERZZ OS</h3>
                        <p>Access the live dashboard module for ${data.title} and manage your records, checkouts, and stats.</p>
                        <a href="#/dashboard/${featureId}" class="btn btn-detail-cta ripple">
                            <span>${data.ctaText}</span>
                            <i data-lucide="arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Key Capabilities Grid -->
            <div style="margin-top: var(--spacing-xl);">
                <h2 class="detail-section-title">Key Capabilities</h2>
                <div class="capability-list">
                    ${data.capabilities.map(cap => `
                        <div class="capability-item">
                            <div class="pillar-icon-wrapper" style="margin-bottom: 0; width: 44px; height: 44px;">
                                <i data-lucide="${cap.icon}"></i>
                            </div>
                            <div>
                                <h4>${cap.title}</h4>
                                <p>${cap.desc}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}
