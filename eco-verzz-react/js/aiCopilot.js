/* Floating AI Copilot Component - Eco Verzz */

export function initAICopilot() {
    // Prevent duplicate initialization
    if (document.getElementById('ai-copilot-container')) return;

    // Create container
    const container = document.createElement('div');
    container.id = 'ai-copilot-container';
    document.body.appendChild(container);

    // Inject styles
    const styles = document.createElement('style');
    styles.innerHTML = `
        #ai-copilot-container {
            position: fixed;
            bottom: 30px;
            right: 30px;
            z-index: 9999;
            font-family: var(--font-body);
        }

        /* Floating Trigger Badge */
        .ai-trigger-badge {
            display: flex;
            align-items: center;
            gap: 10px;
            background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
            color: #FFFFFF;
            padding: 12px 20px;
            border-radius: var(--radius-full);
            cursor: pointer;
            box-shadow: 0 10px 30px rgba(var(--color-primary-rgb), 0.3);
            transition: transform var(--transition-fast), box-shadow var(--transition-fast);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .ai-trigger-badge:hover {
            transform: translateY(-4px) scale(1.02);
            box-shadow: 0 14px 35px rgba(var(--color-primary-rgb), 0.4);
        }

        .ai-trigger-badge i {
            width: 18px;
            height: 18px;
            animation: pulse-soft 2s infinite ease-in-out;
        }

        .ai-trigger-badge span {
            font-family: var(--font-heading);
            font-weight: 600;
            font-size: 0.95rem;
        }

        /* Chat Panel Drawer */
        .ai-chat-panel {
            position: absolute;
            bottom: 70px;
            right: 0;
            width: 380px;
            height: 520px;
            border-radius: var(--radius-lg);
            display: flex;
            flex-direction: column;
            overflow: hidden;
            transform: scale(0.9) translateY(20px);
            opacity: 0;
            pointer-events: none;
            transition: transform var(--transition-normal), opacity var(--transition-normal);
            box-shadow: var(--shadow-lg);
        }

        .ai-chat-panel.active {
            transform: scale(1) translateY(0);
            opacity: 1;
            pointer-events: all;
        }

        /* Header */
        .ai-panel-header {
            padding: 20px;
            background: linear-gradient(135deg, rgba(var(--bg-surface-rgb), 0.9) 0%, rgba(var(--bg-app-rgb), 0.9) 100%);
            border-bottom: 1px solid var(--border-main);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .header-left {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .header-left i {
            color: var(--color-secondary);
            width: 20px;
            height: 20px;
        }

        .header-left h3 {
            font-size: 1.05rem;
            margin: 0;
        }

        .ai-status-indicator {
            display: inline-block;
            width: 8px;
            height: 8px;
            background-color: var(--color-primary);
            border-radius: 50%;
            margin-left: 6px;
            box-shadow: 0 0 8px var(--color-primary);
        }

        .close-panel-btn {
            background: transparent;
            border: none;
            cursor: pointer;
            color: var(--text-muted);
            display: flex;
            align-items: center;
            justify-content: center;
        }

        /* Message feed */
        .ai-msg-feed {
            flex: 1;
            padding: 20px;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            gap: 16px;
            background: rgba(var(--bg-app-rgb), 0.85);
        }

        .msg-bubble {
            max-width: 80%;
            padding: 12px 16px;
            border-radius: var(--radius-md);
            font-size: 0.9rem;
            line-height: 1.4;
        }

        .msg-bubble.bot {
            background: rgba(var(--bg-surface-rgb), 0.9);
            color: var(--text-main);
            border: 1px solid var(--border-main);
            align-self: flex-start;
            border-bottom-left-radius: 4px;
        }

        .msg-bubble.user {
            background: var(--color-primary);
            color: #FFFFFF;
            align-self: flex-end;
            border-bottom-right-radius: 4px;
        }

        /* Pre-defined Prompts suggestions */
        .ai-suggestions-box {
            padding: 12px 20px;
            display: flex;
            flex-direction: column;
            gap: 8px;
            background: rgba(var(--bg-app-rgb), 0.85);
            border-top: 1px solid var(--border-main);
        }

        .ai-suggestions-box span {
            font-size: 0.75rem;
            font-weight: 600;
            color: var(--text-muted);
            letter-spacing: 0.05em;
        }

        .suggestions-list {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .sugg-btn {
            background: rgba(var(--bg-surface-rgb), 0.6);
            border: 1px solid var(--border-main);
            color: var(--text-main);
            font-size: 0.75rem;
            padding: 6px 12px;
            border-radius: var(--radius-full);
            cursor: pointer;
            transition: all var(--transition-fast);
        }

        .sugg-btn:hover {
            border-color: var(--color-primary);
            background: rgba(var(--color-primary-rgb), 0.05);
            color: var(--color-primary);
        }

        /* Input area */
        .ai-panel-footer {
            padding: 16px 20px;
            background: rgba(var(--bg-surface-rgb), 0.95);
            border-top: 1px solid var(--border-main);
            display: flex;
            gap: 10px;
            align-items: center;
        }

        .ai-chat-input {
            flex: 1;
            background: var(--bg-app);
            border: 1px solid var(--border-main);
            padding: 10px 14px;
            border-radius: var(--radius-sm);
            color: var(--text-main);
            font-size: 0.85rem;
            font-family: inherit;
        }

        .ai-chat-input:focus {
            outline: none;
            border-color: var(--color-primary);
        }

        .send-msg-btn {
            background: var(--color-primary);
            color: #FFFFFF;
            border: none;
            border-radius: var(--radius-sm);
            width: 36px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: background var(--transition-fast);
        }

        .send-msg-btn:hover {
            background: var(--color-primary-hover);
        }

        /* Mobile adaptation */
        @media (max-width: 480px) {
            #ai-copilot-container {
                bottom: 20px;
                right: 20px;
            }
            .ai-chat-panel {
                width: calc(100vw - 40px);
                height: 460px;
            }
        }
    `;
    document.head.appendChild(styles);

    // Inject Markup
    container.innerHTML = `
        <div class="ai-trigger-badge" id="copilot-badge">
            <i data-lucide="sparkles"></i>
            <span>Eco Copilot</span>
        </div>

        <div class="ai-chat-panel glass-card" id="copilot-panel">
            <div class="ai-panel-header">
                <div class="header-left">
                    <i data-lucide="sparkles"></i>
                    <h3>Eco Copilot</h3>
                    <span class="ai-status-indicator" title="Connected and ready"></span>
                </div>
                <button class="close-panel-btn" id="close-copilot" aria-label="Close panel">
                    <i data-lucide="x"></i>
                </button>
            </div>

            <div class="ai-msg-feed" id="copilot-feed">
                <div class="msg-bubble bot">
                    Hello! I am your <strong>Eco Copilot AI</strong>. I monitor real-time environmental risk parameters, carbon ledger indices, and city sensor logs. Ask me anything or select a prompt below!
                </div>
            </div>

            <div class="ai-suggestions-box">
                <span>SUGGESTED QUERIES</span>
                <div class="suggestions-list">
                    <button class="sugg-btn" data-query="Calculate carbon offset for Plant 4">Carbon offset Plant 4</button>
                    <button class="sugg-btn" data-query="Show AQI predictions for tomorrow">AQI forecast</button>
                    <button class="sugg-btn" data-query="Optimize waste routes for Sector G">Waste routing</button>
                </div>
            </div>

            <div class="ai-panel-footer">
                <input type="text" placeholder="Ask your environmental assistant..." class="ai-chat-input" id="copilot-input">
                <button class="send-msg-btn" id="copilot-send" aria-label="Send query">
                    <i data-lucide="send"></i>
                </button>
            </div>
        </div>
    `;

    if (window.lucide) {
        window.lucide.createIcons({
            attrs: {
                'stroke-width': 2.2
            }
        });
    }

    // Logic implementation
    const badge = container.querySelector('#copilot-badge');
    const panel = container.querySelector('#copilot-panel');
    const closeBtn = container.querySelector('#close-copilot');
    const input = container.querySelector('#copilot-input');
    const sendBtn = container.querySelector('#copilot-send');
    const feed = container.querySelector('#copilot-feed');
    const suggBtns = container.querySelectorAll('.sugg-btn');

    // Toggle Chat Panel
    badge.addEventListener('click', () => {
        panel.classList.toggle('active');
        if (panel.classList.contains('active')) {
            input.focus();
        }
    });

    closeBtn.addEventListener('click', () => {
        panel.classList.remove('active');
    });

    // Close panel when clicking outside
    document.addEventListener('click', (e) => {
        if (!container.contains(e.target) && panel.classList.contains('active')) {
            panel.classList.remove('active');
        }
    });

    // Send Message
    function handleSend(text) {
        if (!text || text.trim() === '') return;

        // User Message
        appendMessage(text, 'user');
        input.value = '';

        // Bot Response (Simulated intelligence)
        setTimeout(() => {
            const query = text.toLowerCase();
            let reply = "I've reviewed our active environmental indexes. Our neural networks are calculating telemetry inputs. Please specify Plant, City Area, or sensor codes to drill down into metrics.";

            if (query.includes('plant 4') || query.includes('calculate carbon')) {
                reply = "Calculating Carbon Offset for <strong>Plant 4</strong>... <br><br>📊 <strong>Results:</strong><br>• Carbon offset rate: <strong>14.2 tons/month</strong>.<br>• Recycled material index: <strong>89.4%</strong>.<br>• Recommendation: Increase metal slag circulation pathing to gain an extra 1.8 tons of carbon credit offset.";
            } else if (query.includes('aqi') || query.includes('prediction') || query.includes('forecast')) {
                reply = "Analyzing regional weather and chemical sensor meshes... <br><br>🌤️ <strong>AQI Forecast (Next 24h):</strong><br>• Current AQI: <strong>34 (Good)</strong>.<br>• Peak AQI: <strong>62 (Moderate)</strong> around 2:00 PM tomorrow due to traffic density.<br>• Warning triggers: <strong>Inactive</strong>. No action required.";
            } else if (query.includes('waste') || query.includes('route') || query.includes('sector g')) {
                reply = "Opening smart city logistical optimizer... <br><br>🚛 <strong>Logistics report (Sector G):</strong><br>• Active bins: <strong>12</strong>. Diverted load: <strong>4.2 tons</strong>.<br>• Route efficiency: <strong>92%</strong>.<br>• Suggested update: Shift collection for bins 3 & 4 to 9:00 AM tomorrow to bypass grid congestion.";
            }

            appendMessage(reply, 'bot');
        }, 1000);
    }

    function appendMessage(text, sender) {
        const bubble = document.createElement('div');
        bubble.className = `msg-bubble ${sender}`;
        bubble.innerHTML = text;
        feed.appendChild(bubble);

        // Scroll to bottom
        feed.scrollTop = feed.scrollHeight;
    }

    // Submit actions
    sendBtn.addEventListener('click', () => handleSend(input.value));
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            handleSend(input.value);
        }
    });

    // Suggestion actions
    suggBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const query = btn.getAttribute('data-query');
            handleSend(query);
        });
    });
}
