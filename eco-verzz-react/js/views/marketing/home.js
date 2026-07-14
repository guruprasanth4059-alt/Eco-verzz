/* Redesigned Marketing Home View - Eco Verzz */

export async function render(container) {
    container.innerHTML = `
        <!-- 1. Hero Section -->
        <section class="hero-section">
            <div class="hero-bg-glow"></div>
            <div class="container hero-grid">
                <div class="hero-content">
                    <div class="hero-badge fade-in">
                        <span class="badge-dot"></span>
                        <span>AI-Powered Environment Intelligence</span>
                    </div>
                    <h1 class="hero-title fade-in">AI-Powered Environmental Intelligence for a Sustainable Future</h1>
                    <p class="hero-subtitle fade-in">Monitor pollution, predict risks, optimize resources, and make data-driven environmental decisions using enterprise-grade artificial intelligence.</p>
                    <div class="hero-actions fade-in">
                        <a href="#/signup" class="btn btn-primary ripple">
                            <span>Get Started</span>
                            <i data-lucide="arrow-right"></i>
                        </a>
                        <a href="#demo-form-anchor" class="btn btn-outline ripple">
                            <span>Book Demo</span>
                        </a>
                        <button class="btn btn-text watch-platform-btn ripple">
                            <i data-lucide="play-circle"></i>
                            <span>Watch Platform</span>
                        </button>
                    </div>
                </div>
                
                <!-- Interactive Dashboard Mockup -->
                <div class="hero-visual fade-in">
                    <div class="dashboard-mockup glass-card">
                        <div class="mockup-header">
                            <div class="mockup-dots">
                                <span></span><span></span><span></span>
                            </div>
                            <div class="mockup-title">Eco Verzz EI Console</div>
                            <div class="mockup-status">Live feed</div>
                        </div>
                        <div class="mockup-body">
                            <!-- Metric 1: AQI Gauge -->
                            <div class="mockup-widget mini-aqi-widget">
                                <div class="widget-header">
                                    <span>Air Quality Index</span>
                                    <span class="status-indicator good">Optimal</span>
                                </div>
                                <div class="gauge-container">
                                    <div class="gauge-value">34</div>
                                    <div class="gauge-sub">PM2.5 μg/m³</div>
                                </div>
                            </div>
                            <!-- Metric 2: Carbon Meter -->
                            <div class="mockup-widget mini-carbon-widget">
                                <div class="widget-header">
                                    <span>Carbon Intensity</span>
                                    <span class="trend-indicator down"><i data-lucide="trending-down"></i> -12.4%</span>
                                </div>
                                <div class="bar-chart-preview">
                                    <div class="bar" style="height: 40%"></div>
                                    <div class="bar" style="height: 60%"></div>
                                    <div class="bar active" style="height: 25%"></div>
                                </div>
                            </div>
                            <!-- AI Assistant Snippet -->
                            <div class="mockup-widget mini-ai-widget">
                                <div class="ai-header">
                                    <i data-lucide="sparkles" class="ai-spark-icon"></i>
                                    <span>Eco Copilot</span>
                                </div>
                                <p class="ai-snippet">"Emissions at <strong>Plant B</strong> have dropped by <strong>8.2 tons</strong> since resource circulation was optimized."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 2. Trusted-By / Partner Logos -->
        <section class="partners-section">
            <div class="container">
                <p class="partners-title">TRUSTED BY LEADING ENTERPRISES AND GOVERNMENTS GLOBAL</p>
                <div class="partners-grid">
                    <div class="partner-logo"><i data-lucide="shield"></i> <span>GovLink</span></div>
                    <div class="partner-logo"><i data-lucide="zap"></i> <span>Nova Energy</span></div>
                    <div class="partner-logo"><i data-lucide="activity"></i> <span>BioSphere Labs</span></div>
                    <div class="partner-logo"><i data-lucide="globe-2"></i> <span>EarthCorp</span></div>
                    <div class="partner-logo"><i data-lucide="cpu"></i> <span>AeroTech</span></div>
                </div>
            </div>
        </section>

        <!-- 3. AI Platform Overview -->
        <section class="marketing-section section-darker">
            <div class="container">
                <div class="section-header text-center">
                    <span class="section-tagline">Predictive Intelligence</span>
                    <h2 class="section-title">Deep Learning for Environmental Risk Management</h2>
                    <p class="section-subtitle">Our AI models compile telemetry from satellites, IoT sensors, and local databases to construct predictive metrics of environmental degradation before it escalates.</p>
                </div>
                
                <div class="ai-diagram-showcase">
                    <div class="diagram-grid">
                        <div class="diagram-card glass-card">
                            <div class="diagram-icon"><i data-lucide="satellite"></i></div>
                            <h3>Spectral Satellite Imagery</h3>
                            <p>Tracks heat mapping, land classification, deforestation, and greenhouse gas plumes with custom spatial resolution.</p>
                        </div>
                        <div class="diagram-card glass-card">
                            <div class="diagram-icon"><i data-lucide="radio"></i></div>
                            <h3>IoT Sensor Meshes</h3>
                            <p>Aggregates direct, real-time chemical tracking metrics from localized air, water, and soil sensors.</p>
                        </div>
                        <div class="diagram-card glass-card">
                            <div class="diagram-icon"><i data-lucide="server"></i></div>
                            <h3>AI Core Engine</h3>
                            <p>Combines sensor variables using neural networks to predict AQI, pollution risks, and waste flow lines.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 4. Interactive Dashboard Preview Section -->
        <section class="marketing-section">
            <div class="container">
                <div class="section-header">
                    <span class="section-tagline">Operational Console</span>
                    <h2 class="section-title">Real-Time Environmental Control Center</h2>
                    <p class="section-subtitle">Take control with a modular dashboard designed to simplify operational tracking for decision-makers and compliance officers.</p>
                </div>

                <div class="interactive-preview-container glass-card">
                    <div class="preview-tabs">
                        <button class="preview-tab active" data-tab="emissions">Emissions Heatmap</button>
                        <button class="preview-tab" data-tab="aqi">AQI Forecast</button>
                        <button class="preview-tab" data-tab="circular">Resource Circle</button>
                    </div>
                    <div class="preview-content-box">
                        <!-- Tab Content 1: Emissions Heatmap -->
                        <div class="tab-panel active" id="tab-emissions">
                            <div class="mockup-map-visual">
                                <div class="map-overlay">
                                    <div class="overlay-item">
                                        <span>CO2 Concentration</span>
                                        <strong>412.3 ppm</strong>
                                    </div>
                                    <div class="overlay-item">
                                        <span>Alert Areas</span>
                                        <strong style="color: var(--color-danger);">2 Locations</strong>
                                    </div>
                                </div>
                                <div class="heatmap-circle" style="top: 30%; left: 45%; width: 120px; height: 120px;"></div>
                                <div class="heatmap-circle alert" style="top: 55%; left: 70%; width: 70px; height: 70px;"></div>
                            </div>
                        </div>
                        <!-- Tab Content 2: AQI Forecast -->
                        <div class="tab-panel" id="tab-aqi">
                            <div class="forecast-chart-mock">
                                <div class="forecast-day">
                                    <span>Mon</span>
                                    <div class="bar-fill good" style="height: 70%;">35</div>
                                </div>
                                <div class="forecast-day">
                                    <span>Tue</span>
                                    <div class="bar-fill moderate" style="height: 55%;">62</div>
                                </div>
                                <div class="forecast-day">
                                    <span>Wed</span>
                                    <div class="bar-fill unhealthy" style="height: 30%;">110</div>
                                </div>
                                <div class="forecast-day">
                                    <span>Thu</span>
                                    <div class="bar-fill good" style="height: 80%;">22</div>
                                </div>
                            </div>
                        </div>
                        <!-- Tab Content 3: Resource Circle -->
                        <div class="tab-panel" id="tab-circular">
                            <div class="resource-circle-mock">
                                <div class="circle-part">
                                    <i data-lucide="recycle"></i>
                                    <span>Reclaimed: <strong>84%</strong></span>
                                </div>
                                <div class="circle-part">
                                    <i data-lucide="trash-2"></i>
                                    <span>Landfilled: <strong>16%</strong></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 5. Core Feature Groups -->
        <section class="marketing-section section-darker">
            <div class="container">
                <div class="section-header text-center">
                    <span class="section-tagline">Product Capabilities</span>
                    <h2 class="section-title">Core Operating Foundations</h2>
                </div>

                <div class="features-grouped-grid">
                    <!-- Monitoring Group -->
                    <div class="feature-group-card glass-card">
                        <div class="group-title">
                            <i data-lucide="eye"></i>
                            <h3>Real-Time Monitoring</h3>
                        </div>
                        <ul class="group-list">
                            <li><strong>Air Quality Index:</strong> Tracks particulate matters, CO, and ozone metrics dynamically.</li>
                            <li><strong>Water Analytics:</strong> IoT tracking of heavy metals, pollutants, and pH levels.</li>
                            <li><strong>Satellite Surveillance:</strong> Advanced overhead tracking of gas emissions and deforestation.</li>
                        </ul>
                    </div>

                    <!-- Intelligence Group -->
                    <div class="feature-group-card glass-card">
                        <div class="group-title">
                            <i data-lucide="cpu"></i>
                            <h3>AI & Prediction</h3>
                        </div>
                        <ul class="group-list">
                            <li><strong>Disaster Forecasting:</strong> Predicts heatwaves, flood areas, and climate events.</li>
                            <li><strong>Predictive Analytics:</strong> Estimates local pollution indexes up to 72 hours ahead.</li>
                            <li><strong>Smart Alerts:</strong> Automated threshold breach warnings pushed to slack/email.</li>
                        </ul>
                    </div>

                    <!-- Operations Group -->
                    <div class="feature-group-card glass-card">
                        <div class="group-title">
                            <i data-lucide="git-merge"></i>
                            <h3>Circular Operations</h3>
                        </div>
                        <ul class="group-list">
                            <li><strong>Carbon Ledger:</strong> Fully audited carbon footprint and offsets ledger.</li>
                            <li><strong>Waste Logistics:</strong> Optimizes waste collection pathways and classification systems.</li>
                            <li><strong>Smart City Sync:</strong> Plugs directly into municipal power grid grids.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- 6. AI Modules -->
        <section class="marketing-section">
            <div class="container">
                <div class="section-header">
                    <span class="section-tagline">AI Pipelines</span>
                    <h2 class="section-title">Core Intelligence Modules</h2>
                    <p class="section-subtitle">Enterprise analytics demand robust machine learning. Discover the engine driving our environmental models.</p>
                </div>

                <div class="ai-modules-layout">
                    <div class="module-column text-side">
                        <div class="module-item active" data-module="prediction">
                            <h3>Climate Risk Predictor</h3>
                            <p>Fuses historical weather logs with real-time variables to estimate regional environmental degradation indexes.</p>
                        </div>
                        <div class="module-item" data-module="copilot">
                            <h3>Eco Copilot Assistant</h3>
                            <p>LLM-trained assistant that answers query calculations, writes environmental compliance reports, and audits ledger items.</p>
                        </div>
                        <div class="module-item" data-module="image">
                            <h3>Vision Pollutant Spotter</h3>
                            <p>Applies computer vision models to satellite and drone spectral logs to map exact locations of ocean waste.</p>
                        </div>
                    </div>
                    <div class="module-column visual-side glass-card">
                        <div class="module-visual-content" id="module-display">
                            <div class="visual-wrapper" id="display-prediction">
                                <div class="prediction-radar"></div>
                                <span class="visual-tag">Predictive Model Active</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 7. Environmental Analytics Showcase (Calculator) -->
        <section class="marketing-section section-darker">
            <div class="container">
                <div class="section-header">
                    <span class="section-tagline">Interactive Estimator</span>
                    <h2 class="section-title">Evaluate Your Carbon Impact</h2>
                    <p class="section-subtitle">Adjust the variables below to estimate potential carbon offsets and recommendations for your organization.</p>
                </div>

                <div class="interactive-calc-wrapper glass-card">
                    <div class="calc-inputs">
                        <div class="calc-control-group">
                            <label>Industry Segment</label>
                            <select id="calc-sector" class="calc-select">
                                <option value="1">Government / City Municipality</option>
                                <option value="2" selected>Enterprise / Industry Facility</option>
                                <option value="3">NGO / Small Business</option>
                            </select>
                        </div>
                        <div class="calc-control-group">
                            <label>Energy Consumption (MWh / month): <strong id="val-energy">250</strong></label>
                            <input type="range" id="slider-energy" min="10" max="1000" value="250" class="calc-slider">
                        </div>
                        <div class="calc-control-group">
                            <label>Waste Diverted (% / month): <strong id="val-waste">30</strong>%</label>
                            <input type="range" id="slider-waste" min="0" max="100" value="30" class="calc-slider">
                        </div>
                    </div>
                    <div class="calc-outputs">
                        <div class="output-metric">
                            <span>Estimated Offset</span>
                            <div class="metric-value"><span id="metric-offset">84.5</span> <small>tCO2e / yr</small></div>
                        </div>
                        <div class="recommendation-box">
                            <h4>Eco Verzz Recommendations</h4>
                            <p id="calc-recommendation">Your circular offset index is optimal. Integrate smart waste routers to save an additional 12 tons of carbon yearly.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 8. Live Statistics -->
        <section class="stats-section">
            <div class="container stats-grid">
                <div class="stat-card">
                    <div class="stat-num" id="stat-carbon" data-target="148392">0</div>
                    <p class="stat-lbl">Tons Carbon Offset</p>
                </div>
                <div class="stat-card">
                    <div class="stat-num" id="stat-landfill" data-target="98320">0</div>
                    <p class="stat-lbl">Tons Landfill Diverted</p>
                </div>
                <div class="stat-card">
                    <div class="stat-num" id="stat-trees" data-target="15234">0</div>
                    <p class="stat-lbl">Acre Trees Preserved</p>
                </div>
            </div>
        </section>

        <!-- 9. How it Works (Workflow) -->
        <section class="marketing-section">
            <div class="container">
                <div class="section-header text-center">
                    <span class="section-tagline">Methodology</span>
                    <h2 class="section-title">The Operational Loop</h2>
                </div>

                <div class="workflow-grid">
                    <div class="workflow-step">
                        <div class="step-num">01</div>
                        <h3>Ingress Data</h3>
                        <p>Plugs into IoT sensors, satellites, drone visual feeds, and operations database ledgers.</p>
                    </div>
                    <div class="workflow-step">
                        <div class="step-num">02</div>
                        <h3>Inference Analysis</h3>
                        <p>Our deep learning networks classify, check anomalies, and predict environmental variables.</p>
                    </div>
                    <div class="workflow-step">
                        <div class="step-num">03</div>
                        <h3>Recommend Action</h3>
                        <p>Generates compliance logs, offsets suggestions, and circular logistical pathing.</p>
                    </div>
                    <div class="workflow-step">
                        <div class="step-num">04</div>
                        <h3>Audit Ledger</h3>
                        <p>Actions are permanently committed to a verified, tamper-proof green portfolio database.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- 10. Industries Served -->
        <section class="marketing-section section-darker">
            <div class="container">
                <div class="section-header">
                    <span class="section-tagline">Sectors</span>
                    <h2 class="section-title">Tailored for Local and Global Scales</h2>
                </div>

                <div class="industries-tabs-container">
                    <div class="industries-tabs">
                        <div class="ind-tab active" data-ind="gov">Government & Municipalities</div>
                        <div class="ind-tab" data-ind="ind">Heavy Industries & Factories</div>
                        <div class="ind-tab" data-ind="ngo">Enterprises & Retailers</div>
                    </div>
                    <div class="ind-content glass-card" id="ind-content-box">
                        <h3>Smart City Carbon Audits</h3>
                        <p>Providing municipal bodies with live particulate mapping, municipal waste pathing, and environmental impact ledgers to achieve net-zero pledges.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- 11. Case Studies / Success Stories -->
        <section class="marketing-section">
            <div class="container">
                <div class="section-header text-center">
                    <span class="section-tagline">Success Stories</span>
                    <h2 class="section-title">Proven Environmental Action</h2>
                </div>

                <div class="testimonials-grid">
                    <div class="testimonial-card glass-card">
                        <div class="testi-header">
                            <img src="https://api.dicebear.com/7.x/bottts/svg?seed=Marcus" alt="Avatar" class="avatar">
                            <div>
                                <h4>Marcus Thorne</h4>
                                <span>Chief Sustainability Officer, Apex Metal</span>
                            </div>
                        </div>
                        <p>"Integrating Eco Verzz enabled us to track our emissions anomalies instantly. We reduced our carbon footprint by 15% in just 6 months."</p>
                    </div>
                    <div class="testimonial-card glass-card">
                        <div class="testi-header">
                            <img src="https://api.dicebear.com/7.x/bottts/svg?seed=Sarah" alt="Avatar" class="avatar">
                            <div>
                                <h4>Dr. Sarah Chen</h4>
                                <span>Director, BioSphere Labs</span>
                            </div>
                        </div>
                        <p>"The predictive satellite intelligence tool has changed how we audit biodiversity zones. Unmatched precision and latency."</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- 12. Pricing Section -->
        <section class="marketing-section section-darker">
            <div class="container">
                <div class="section-header text-center">
                    <span class="section-tagline">Subscription Plans</span>
                    <h2 class="section-title">Transparent Plans for Any Scale</h2>
                    <div class="pricing-toggle-wrapper">
                        <span>Monthly</span>
                        <label class="switch">
                            <input type="checkbox" id="pricing-toggle-checkbox">
                            <span class="slider-toggle"></span>
                        </label>
                        <span>Annual (Save 20%)</span>
                    </div>
                </div>

                <div class="pricing-grid">
                    <!-- Plan 1 -->
                    <div class="pricing-card glass-card">
                        <h3>Starter</h3>
                        <div class="pricing-price">$<span class="price-val" data-monthly="99" data-annual="79">99</span><small>/mo</small></div>
                        <p>Best for small businesses and regional teams tracking basic footprints.</p>
                        <ul class="pricing-features">
                            <li><i data-lucide="check"></i> 5 IoT Sensors Integrations</li>
                            <li><i data-lucide="check"></i> Monthly Carbon Calculations</li>
                            <li><i data-lucide="check"></i> 1 Year Data Retention</li>
                            <li><i data-lucide="check"></i> Standard Email Support</li>
                        </ul>
                        <a href="#/signup" class="btn btn-outline ripple" style="width: 100%; margin-top: auto;">Select Starter</a>
                    </div>
                    <!-- Plan 2 (Popular) -->
                    <div class="pricing-card glass-card popular">
                        <div class="popular-badge">Most Popular</div>
                        <h3>Professional</h3>
                        <div class="pricing-price">$<span class="price-val" data-monthly="499" data-annual="399">499</span><small>/mo</small></div>
                        <p>Advanced predictive intelligence for manufacturers and growing enterprises.</p>
                        <ul class="pricing-features">
                            <li><i data-lucide="check"></i> 50 IoT Sensors Integrations</li>
                            <li><i data-lucide="check"></i> Live Satellite Tracking (Weekly)</li>
                            <li><i data-lucide="check"></i> AI Risk Predictions</li>
                            <li><i data-lucide="check"></i> 24/7 Priority Support</li>
                        </ul>
                        <a href="#/signup" class="btn btn-primary ripple" style="width: 100%; margin-top: auto;">Select Pro</a>
                    </div>
                    <!-- Plan 3 -->
                    <div class="pricing-card glass-card">
                        <h3>Enterprise</h3>
                        <div class="pricing-price">Custom</div>
                        <p>Complete environment operations framework for governments and major conglomerates.</p>
                        <ul class="pricing-features">
                            <li><i data-lucide="check"></i> Unlimited Integrations</li>
                            <li><i data-lucide="check"></i> Real-time Satellite Sync</li>
                            <li><i data-lucide="check"></i> Custom Neural Net Models</li>
                            <li><i data-lucide="check"></i> Dedicated Account Manager</li>
                        </ul>
                        <a href="#demo-form-anchor" class="btn btn-outline ripple" style="width: 100%; margin-top: auto;">Contact Sales</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- 13. FAQ Accordion -->
        <section class="marketing-section">
            <div class="container">
                <div class="section-header text-center">
                    <span class="section-tagline">Got Questions?</span>
                    <h2 class="section-title">Frequently Asked Questions</h2>
                </div>

                <div class="faq-list">
                    <div class="faq-item">
                        <div class="faq-question">
                            <h3>How does the AI predict environmental risk factors?</h3>
                            <i data-lucide="chevron-down" class="faq-icon"></i>
                        </div>
                        <div class="faq-answer">
                            <p>Our neural networks process multiple concurrent metrics—such as historic meteorological records, local toxic emission databases, and live visual inputs—to identify trend irregularities. This generates accurate predictive alerts up to 72 hours before breaches occur.</p>
                        </div>
                    </div>
                    <div class="faq-item">
                        <div class="faq-question">
                            <h3>Can Eco Verzz connect to third-party IoT sensors?</h3>
                            <i data-lucide="chevron-down" class="faq-icon"></i>
                        </div>
                        <div class="faq-answer">
                            <p>Yes. Eco Verzz provides robust REST API endpoints and webhooks, allowing seamless ingestion of sensor data formats from standard industrial environmental metrics monitors.</p>
                        </div>
                    </div>
                    <div class="faq-item">
                        <div class="faq-question">
                            <h3>How secure is the Environmental Ledger?</h3>
                            <i data-lucide="chevron-down" class="faq-icon"></i>
                        </div>
                        <div class="faq-answer">
                            <p>Our green portfolio logs use cryptographic verification keys to seal every entry. This audit trail meets strict international regulatory reporting standards, preventing unauthorized updates.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 14. Contact Form / Request Demo -->
        <section class="marketing-section section-darker" id="demo-form-anchor">
            <div class="container">
                <div class="contact-grid">
                    <div class="contact-info">
                        <span class="section-tagline">Get in Touch</span>
                        <h2 class="section-title">Schedule an Enterprise Consultation</h2>
                        <p>Discover how Eco Verzz can align your operations with carbon targets, satisfy compliance audits, and protect resource cycles.</p>
                        <div class="contact-details">
                            <div class="detail-item"><i data-lucide="mail"></i> <span>solutions@ecoverzz.com</span></div>
                            <div class="detail-item"><i data-lucide="phone"></i> <span>+1 (800) ECO-VERZ</span></div>
                        </div>
                    </div>
                    <div class="contact-form-box glass-card">
                        <form id="request-demo-form" class="premium-form">
                            <div class="form-row">
                                <div class="form-group">
                                    <label>First Name</label>
                                    <input type="text" placeholder="John" required class="form-input">
                                </div>
                                <div class="form-group">
                                    <label>Last Name</label>
                                    <input type="text" placeholder="Doe" required class="form-input">
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Work Email</label>
                                <input type="email" placeholder="john@enterprise.com" required class="form-input">
                            </div>
                            <div class="form-group">
                                <label>Industry Sector</label>
                                <select class="form-input">
                                    <option>Government / City Council</option>
                                    <option>Factory Operations / Manufacturing</option>
                                    <option>SaaS Enterprise / Technology</option>
                                    <option>Utility Grid Operations</option>
                                </select>
                            </div>
                            <button type="submit" class="btn btn-primary ripple" style="width: 100%; margin-top: var(--spacing-sm);">
                                <span>Request Credentials</span>
                                <i data-lucide="send"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    `;

    // Initialize Lucide Icons
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // Set up interactive features
    bindHomepageEvents(container);
}

function bindHomepageEvents(container) {
    // 1. Dashboard Tab Switcher
    const tabs = container.querySelectorAll('.preview-tab');
    const panels = container.querySelectorAll('.tab-panel');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            panels.forEach(p => p.classList.remove('active'));
            
            tab.classList.add('active');
            const targetId = `tab-${tab.getAttribute('data-tab')}`;
            const targetPanel = container.querySelector(`#${targetId}`);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });

    // 2. AI Modules Visual switcher
    const modules = container.querySelectorAll('.module-item');
    const displayWrapper = container.querySelector('#display-prediction');
    if (modules && displayWrapper) {
        modules.forEach(mod => {
            mod.addEventListener('click', () => {
                modules.forEach(m => m.classList.remove('active'));
                mod.classList.add('active');
                
                const modType = mod.getAttribute('data-module');
                if (modType === 'prediction') {
                    displayWrapper.innerHTML = `
                        <div class="prediction-radar"></div>
                        <span class="visual-tag">Predictive Model Active</span>
                    `;
                } else if (modType === 'copilot') {
                    displayWrapper.innerHTML = `
                        <div class="copilot-terminal">
                            <span style="color: var(--color-secondary);">eco-cli > --audit --emissions</span>
                            <span style="color: var(--text-muted);">Auditing factory logs... OK</span>
                            <span style="color: var(--color-primary);">Carbon balance: +14.2 tons offset</span>
                        </div>
                        <span class="visual-tag">Eco Copilot Active</span>
                    `;
                } else if (modType === 'image') {
                    displayWrapper.innerHTML = `
                        <div class="vision-grid-mock">
                            <div class="vision-box border-pulse">Waste Area Detected</div>
                        </div>
                        <span class="visual-tag">Computer Vision Core Active</span>
                    `;
                }
            });
        });
    }

    // 3. Calculator Sliders
    const sliderEnergy = container.querySelector('#slider-energy');
    const sliderWaste = container.querySelector('#slider-waste');
    const valEnergy = container.querySelector('#val-energy');
    const valWaste = container.querySelector('#val-waste');
    const metricOffset = container.querySelector('#metric-offset');
    const calcRec = container.querySelector('#calc-recommendation');
    const sectorSelect = container.querySelector('#calc-sector');

    function calculateImpact() {
        if (!sliderEnergy || !sliderWaste) return;
        const energy = parseFloat(sliderEnergy.value);
        const waste = parseFloat(sliderWaste.value);
        const sector = parseFloat(sectorSelect ? sectorSelect.value : "2");
        
        if (valEnergy) valEnergy.textContent = energy;
        if (valWaste) valWaste.textContent = waste;

        // Simple calculation logic
        let multiplier = 0.45; // base carbon intensity per MWh
        if (sector === 1) multiplier = 0.38; // City
        if (sector === 3) multiplier = 0.22; // NGO

        const offsetVal = (energy * multiplier * (waste / 100)).toFixed(1);
        if (metricOffset) {
            metricOffset.textContent = offsetVal;
        }

        // Recommend text
        if (calcRec) {
            if (offsetVal < 30) {
                calcRec.innerHTML = "We recommend switching to smart waste classifiers. Your circular rating is below target levels.";
            } else if (offsetVal < 100) {
                calcRec.innerHTML = "Optimum level. Linking solar grids will elevate you to the carbon-free tier next quarter.";
            } else {
                calcRec.innerHTML = "Excellent circular rating! You can now generate carbon credit certificates via the Rewards ledger.";
            }
        }
    }

    if (sliderEnergy) sliderEnergy.addEventListener('input', calculateImpact);
    if (sliderWaste) sliderWaste.addEventListener('input', calculateImpact);
    if (sectorSelect) sectorSelect.addEventListener('change', calculateImpact);

    // 4. Live Counter Stats Animation
    const stats = container.querySelectorAll('.stat-num');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetNum = parseInt(entry.target.getAttribute('data-target'));
                animateCounter(entry.target, targetNum);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => observer.observe(stat));

    function animateCounter(el, target) {
        let count = 0;
        const duration = 2000; // ms
        const steps = 50;
        const increment = target / steps;
        const stepTime = duration / steps;
        
        const timer = setInterval(() => {
            count += increment;
            if (count >= target) {
                el.textContent = target.toLocaleString();
                clearInterval(timer);
            } else {
                el.textContent = Math.floor(count).toLocaleString();
            }
        }, stepTime);
    }

    // 5. Industries Served Tab Switcher
    const indTabs = container.querySelectorAll('.ind-tab');
    const indContent = container.querySelector('#ind-content-box');
    if (indTabs && indContent) {
        indTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                indTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                const type = tab.getAttribute('data-ind');
                if (type === 'gov') {
                    indContent.innerHTML = `
                        <h3>Smart City Carbon Audits</h3>
                        <p>Providing municipal bodies with live particulate mapping, municipal waste pathing, and environmental impact ledgers to achieve net-zero pledges.</p>
                    `;
                } else if (type === 'ind') {
                    indContent.innerHTML = `
                        <h3>Heavy Industrial Compliance</h3>
                        <p>Live leak tracking, emission anomaly warning triggers, and resource loops that direct bypass metal or toxic residues directly to reclamation facilities.</p>
                    `;
                } else if (type === 'ngo') {
                    indContent.innerHTML = `
                        <h3>Green Enterprise Ledgers</h3>
                        <p>Public-facing carbon offset meters, corporate token rewards programs, and audit-ready sustainability indexes to impress impact investors.</p>
                    `;
                }
            });
        });
    }

    // 6. Pricing Toggle (Monthly / Annual)
    const priceToggle = container.querySelector('#pricing-toggle-checkbox');
    const priceVals = container.querySelectorAll('.price-val');
    if (priceToggle && priceVals.length > 0) {
        priceToggle.addEventListener('change', () => {
            const isAnnual = priceToggle.checked;
            priceVals.forEach(val => {
                const monthly = val.getAttribute('data-monthly');
                const annual = val.getAttribute('data-annual');
                val.textContent = isAnnual ? annual : monthly;
            });
        });
    }

    // 7. FAQ Accordions
    const faqItems = container.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Close other items
            faqItems.forEach(i => {
                if (i !== item) i.classList.remove('active');
            });
            item.classList.toggle('active');
        });
    });

    // 8. Contact Form Handler
    const contactForm = container.querySelector('#request-demo-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalHTML = btn.innerHTML;
            
            btn.disabled = true;
            btn.innerHTML = `<span>Connecting...</span>`;
            
            setTimeout(() => {
                btn.style.backgroundColor = 'var(--color-secondary)';
                btn.innerHTML = `<span>Credentials Generated!</span> <i data-lucide="check"></i>`;
                if (window.lucide) window.lucide.createIcons();
                
                setTimeout(() => {
                    contactForm.reset();
                    btn.disabled = false;
                    btn.style.backgroundColor = '';
                    btn.innerHTML = originalHTML;
                    if (window.lucide) window.lucide.createIcons();
                }, 3000);
            }, 1500);
        });
    }
}
