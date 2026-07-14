/* Green Community Dashboard Module */

import { AppState } from '../../state.js';

export async function render(container) {
    const renderContent = () => {
        const state = AppState.getState();

        // Standard leaderboard citizens lists
        const leaders = [
            { rank: 1, name: "Marcus Aurelius", points: 4950, avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Marcus" },
            { rank: 2, name: "Sophia Kovalev", points: 4720, avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Sophia" },
            { rank: 3, name: "Liam Thorne", points: 4510, avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Liam" },
            { rank: 4, name: "Eco-Citizen (You)", points: state.points, avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=EcoCitizen", isUser: true },
            { rank: 5, name: "Elena Rostova", points: 4180, avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Elena" }
        ];

        // Sort dynamically based on user points
        leaders.sort((a, b) => b.points - a.points);
        // Re-assign ranks
        leaders.forEach((l, idx) => l.rank = idx + 1);

        container.innerHTML = `
            <!-- Module Header Banner -->
            <div class="db-module-header" style="--module-accent: var(--color-community); --module-accent-rgb: var(--color-community-rgb);">
                <div class="db-module-title-section">
                    <div class="db-module-icon-box" style="background-color: rgba(var(--color-community-rgb), 0.15); color: var(--color-community);">
                        <i data-lucide="users"></i>
                    </div>
                    <div>
                        <h1>Green Community Feed</h1>
                        <p>Share local stories, coordinate clean-ups, and review citizen leaderboards.</p>
                    </div>
                </div>
                <span class="pillar-badge" style="--pillar-accent: var(--color-community); --pillar-accent-rgb: var(--color-community-rgb);">Community Active</span>
            </div>

            <div class="db-grid-2">
                <!-- Left Pane: Share Story & Stories Wall -->
                <div class="flex flex-col gap" style="gap: var(--spacing-lg);">
                    
                    <!-- Post Story Form -->
                    <div class="card" style="border-top: 4px solid var(--color-community);">
                        <h3 style="font-size: 1.15rem; margin-bottom: var(--spacing-sm);">Post Impact Story</h3>
                        <p style="font-size: 0.85rem; color: var(--db-text-muted); margin-bottom: var(--spacing-md);">Share your circular habit or clean-up activity with local neighbors to earn +50 EcoPoints.</p>
                        
                        <form id="story-post-form" class="stories-input-area" onsubmit="return false;">
                            <textarea id="story-input" class="textarea-input" placeholder="What sustainable habit did you practice today? e.g. Just did a plastic audit..." required></textarea>
                            <button type="submit" class="btn btn-primary ripple" style="background-color: var(--color-community); width: fit-content; align-self: flex-end;">
                                <i data-lucide="send"></i>
                                <span>Post Story</span>
                            </button>
                        </form>
                    </div>

                    <!-- Stories Wall -->
                    <div class="stories-feed-container">
                        ${state.communityStories.map(story => `
                            <div class="story-card card">
                                <div class="story-header">
                                    <div class="story-author">
                                        <img src="${story.avatar}" alt="Author Avatar" class="story-avatar">
                                        <div class="story-meta">
                                            <span class="story-author-name">${story.author}</span>
                                            <div class="story-time">${story.time}</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="story-content">
                                    <p style="margin: 0; line-height: 1.5;">${story.content}</p>
                                </div>
                                <div class="story-footer" style="border-top: 1px solid var(--db-border); padding-top: var(--spacing-sm); margin-top: var(--spacing-sm);">
                                    <button class="story-action-btn like-story-btn ${story.liked ? 'liked' : ''}" data-id="${story.id}">
                                        <i data-lucide="heart" style="${story.liked ? 'fill: var(--color-community); color: var(--color-community);' : ''}"></i>
                                        <span>${story.likes} Likes</span>
                                    </button>
                                    <button class="story-action-btn">
                                        <i data-lucide="message-square"></i>
                                        <span>Comment</span>
                                    </button>
                                </div>
                            </div>
                        `).join('')}
                    </div>

                </div>

                <!-- Right Pane: Leaderboard -->
                <div class="card" style="border-top: 4px solid var(--color-community); height: fit-content;">
                    <h3 style="font-size: 1.15rem; margin-bottom: var(--spacing-xs);">Local Eco-Pioneers</h3>
                    <span class="card-subtitle">Active individual rankings based on verified EcoPoints</span>
                    
                    <div class="leaderboard-list">
                        ${leaders.map(l => `
                            <div class="leaderboard-item ${l.isUser ? 'user-item' : ''}">
                                <div class="leaderboard-left">
                                    <span class="leaderboard-rank">#${l.rank}</span>
                                    <img src="${l.avatar}" alt="Avatar" style="width: 28px; height: 28px; border-radius: 50%;">
                                    <span class="leaderboard-name" style="${l.isUser ? 'font-weight: 700;' : ''}">${l.name}</span>
                                </div>
                                <span class="leaderboard-points" style="color: ${l.isUser ? 'var(--color-community)' : 'inherit'};">${l.points.toLocaleString()} PTS</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;

        // Handle Story Posting
        const form = document.getElementById('story-post-form');
        const input = document.getElementById('story-input');
        if (form && input) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const content = input.value.trim();
                AppState.addCommunityStory(content);
                renderContent(); // local updates
            });
        }

        // Handle Story Likes
        document.querySelectorAll('.like-story-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const button = e.currentTarget;
                const storyId = parseInt(button.dataset.id);
                AppState.toggleLikeStory(storyId);
                renderContent();
            });
        });

        if (window.lucide) {
            window.lucide.createIcons();
        }
    };

    renderContent();
}
