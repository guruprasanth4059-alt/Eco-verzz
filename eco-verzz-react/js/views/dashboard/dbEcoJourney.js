/* EcoJourney AI Dashboard Module */

import { AppState } from '../../state.js';

export async function render(container) {
    let chatHistory = [
        { sender: 'ai', text: "Hello Citizen! I am EcoJourney AI, your personalized companion. I track your habits, suggest targets, and audit footprints. How can I guide you today?" }
    ];

    const responses = {
        'suggest water saving tips': "To optimize water conservation, try: 1. Adding a flow aerator to faucets (-15% water flow rate). 2. Shortening shower durations under 5 minutes. 3. Adjusting toilet cistern volume with a dual-flush converter. Log your water goals below!",
        'how to audit home energy?': "To audit household electricity: 1. Unplug standby electronics ('vampire loads'). 2. Check window and door weather stripping. 3. Ensure HVAC filters are clean to reduce loading. Completing these audits earns +200 EcoPoints.",
        'how do i earn ecopoints?': "You can earn EcoPoints by: 1. Registering recycling logs in the Waste Passport (+40 to +80 pts per items). 2. Sharing updates in the Green Community Feed (+50 pts). 3. Checking off active targets in your goals tracker (+150 pts)."
    };

    const renderContent = () => {
        const state = AppState.getState();

        container.innerHTML = `
            <!-- Module Header Banner -->
            <div class="db-module-header" style="--module-accent: var(--color-ecojourney); --module-accent-rgb: var(--color-ecojourney-rgb);">
                <div class="db-module-title-section">
                    <div class="db-module-icon-box" style="background-color: rgba(var(--color-ecojourney-rgb), 0.15); color: var(--color-ecojourney);">
                        <i data-lucide="sparkles"></i>
                    </div>
                    <div>
                        <h1>EcoJourney AI Companion</h1>
                        <p>Consult your companion, manage target checklists, and track journey milestones.</p>
                    </div>
                </div>
                <span class="pillar-badge" style="--pillar-accent: var(--color-ecojourney); --pillar-accent-rgb: var(--color-ecojourney-rgb);">AI Companion Active</span>
            </div>

            <div class="db-grid-2">
                <!-- Left Pane: AI Chat Box -->
                <div class="card flex flex-col" style="border-top: 4px solid var(--color-ecojourney); gap: 0; padding: 0; overflow: hidden; height: 480px;">
                    <!-- Chat Header -->
                    <div style="padding: var(--spacing-md); border-bottom: 1px solid var(--db-border); display: flex; align-items: center; gap: var(--spacing-sm); background-color: rgba(var(--color-ecojourney-rgb), 0.03);">
                        <img src="https://api.dicebear.com/7.x/bottts/svg?seed=EcoJourney" style="width: 32px; height: 32px; border-radius: 50%; background-color: var(--db-input-bg);" alt="AI Avatar">
                        <div>
                            <h4 style="font-size: 0.95rem; font-weight: 700;">EcoJourney AI</h4>
                            <span style="font-size: 0.7rem; color: #10B981; font-weight: 600; display: flex; align-items: center; gap: 2px;">
                                <span style="width: 6px; height: 6px; border-radius: 50%; background-color: #10B981; display: inline-block;"></span>
                                Online Companion
                            </span>
                        </div>
                    </div>

                    <!-- Chat Messages list -->
                    <div class="ai-chat-messages" id="chat-messages-container">
                        ${chatHistory.map(msg => `
                            <div class="chat-bubble ${msg.sender === 'user' ? 'user' : 'ai'}">
                                ${msg.text}
                            </div>
                        `).join('')}
                        <div id="typing-indicator" class="chat-bubble ai hidden" style="opacity: 0.7; font-style: italic;">
                            EcoJourney AI is typing...
                        </div>
                    </div>

                    <!-- Suggestion Chips -->
                    <div class="ai-suggestions-row">
                        <button class="ai-suggest-btn" data-query="Suggest water saving tips">Suggest water saving tips</button>
                        <button class="ai-suggest-btn" data-query="How to audit home energy?">How to audit home energy?</button>
                        <button class="ai-suggest-btn" data-query="How do I earn EcoPoints?">How do I earn EcoPoints?</button>
                    </div>

                    <!-- Input form -->
                    <form id="ai-chat-form" class="ai-chat-input-area" onsubmit="return false;">
                        <input type="text" id="chat-input" class="input-text" style="border: none; border-radius: 0; padding: 1rem; border-top: 1px solid var(--db-border);" placeholder="Ask about materials, footprints, or carbon stats..." required>
                        <button type="submit" class="btn btn-primary" style="background-color: var(--color-ecojourney); border-radius: 0; padding: 0 1.5rem;">
                            <i data-lucide="send"></i>
                        </button>
                    </form>
                </div>

                <!-- Right Pane: Goals Checklist & Timeline Preview -->
                <div class="flex flex-col gap" style="gap: var(--spacing-lg);">
                    
                    <!-- Goals Checklist Card -->
                    <div class="card" style="border-top: 4px solid var(--color-ecojourney);">
                        <h3 style="font-size: 1.15rem; margin-bottom: var(--spacing-sm);">Active Target Checklist</h3>
                        <p style="font-size: 0.85rem; color: var(--db-text-muted); margin-bottom: var(--spacing-md);">Select checkpoints to complete targets and secure +150 EcoPoints awards.</p>
                        
                        <div class="flex flex-col gap" style="gap: var(--spacing-md);">
                            ${state.goals.map(g => `
                                <div class="flex align-center justify-between" style="padding: var(--spacing-sm); border: 1px solid var(--db-border); border-radius: var(--radius-sm); background-color: var(--db-card-bg); opacity: ${g.completed ? '0.7' : '1'};">
                                    <div class="flex align-center gap" style="gap: var(--spacing-sm);">
                                        <input type="checkbox" class="goal-checkbox" data-id="${g.id}" ${g.completed ? 'checked disabled' : ''} style="width: 18px; height: 18px; cursor: pointer;">
                                        <span style="${g.completed ? 'text-decoration: line-through; color: var(--db-text-muted);' : 'font-weight: 500;'}; font-size: 0.9rem;">
                                            ${g.text}
                                        </span>
                                    </div>
                                    <span class="pillar-badge" style="--pillar-accent: ${g.completed ? '#10B981' : 'var(--color-ecojourney)'}; --pillar-accent-rgb: ${g.completed ? '16, 185, 129' : 'var(--color-ecojourney-rgb)'}; font-size: 0.7rem; padding: 0.15rem 0.4rem;">
                                        ${g.completed ? 'Done' : 'Active'}
                                    </span>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Journey Timeline preview -->
                    <div class="card">
                        <h3 style="font-size: 1.15rem; margin-bottom: var(--spacing-sm);">Journey Milestones</h3>
                        <span class="card-subtitle">Habit progression checkpoint log</span>
                        
                        <div class="timeline-list">
                            <div class="timeline-item">
                                <span class="timeline-time">Just now</span>
                                <div class="timeline-dot" style="background-color: var(--color-ecojourney);"></div>
                                <h4>Platform Level Up!</h4>
                                <p>Progressed to Level 4 Pioneer following verified points metrics.</p>
                            </div>
                            <div class="timeline-item">
                                <span class="timeline-time">2w ago</span>
                                <div class="timeline-dot" style="background-color: var(--color-circular);"></div>
                                <h4>First Waste Passport Logged</h4>
                                <p>Successfully verified sorted HDPE plastic streams at city depot.</p>
                            </div>
                            <div class="timeline-item">
                                <span class="timeline-time">1m ago</span>
                                <div class="timeline-dot" style="background-color: var(--color-intelligence);"></div>
                                <h4>Account Activated</h4>
                                <p>Initiated ECO VERZZ OS footprints tracking cycles.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    `;

    // Scroll chat to bottom
    const scrollToBottom = () => {
        const msgContainer = document.getElementById('chat-messages-container');
        if (msgContainer) {
            msgContainer.scrollTop = msgContainer.scrollHeight;
        }
    };

    scrollToBottom();

    // Chat form submit
    const chatForm = document.getElementById('ai-chat-form');
    const chatInput = document.getElementById('chat-input');
    const typingIndicator = document.getElementById('typing-indicator');

    const handleSend = (text) => {
        // User bubble
        chatHistory.push({ sender: 'user', text: text });
        renderContent();
        
        // Typing indicator
        const indicator = document.getElementById('typing-indicator');
        if (indicator) indicator.classList.remove('hidden');
        scrollToBottom();

        // Bot response delay
        setTimeout(() => {
            const query = text.toLowerCase().trim();
            let reply = "I've logged that query. Ask me water tips, energy audit steps, or points requirements for immediate guidance.";
            
            for (const key in responses) {
                if (query.includes(key)) {
                    reply = responses[key];
                    break;
                }
            }

            chatHistory.push({ sender: 'ai', text: reply });
            renderContent();
        }, 1200);
    };

    if (chatForm && chatInput) {
        chatForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const text = chatInput.value.trim();
            chatInput.value = '';
            handleSend(text);
        });
    }

    // Suggestion chips
    document.querySelectorAll('.ai-suggest-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const query = e.target.dataset.query;
            handleSend(query);
        });
    });

    // Handle checkboxes
    document.querySelectorAll('.goal-checkbox').forEach(box => {
        box.addEventListener('change', (e) => {
            const id = parseInt(e.target.dataset.id);
            AppState.completeGoal(id);
            renderContent();
        });
    });

    if (window.lucide) {
        window.lucide.createIcons();
    }
    };

    renderContent();
}
