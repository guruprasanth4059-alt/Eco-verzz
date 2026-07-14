/* Global Application State Manager */

class StateManager {
    constructor() {
        // Initialize default mock data
        this.state = {
            points: 4250,
            streak: 12,
            level: 4,
            theme: 'light',
            
            notifications: [
                { id: 1, text: "Double EcoPoints event active in Circular Exchange!", type: "info", time: "5m ago", icon: "zap" },
                { id: 2, text: "Your recycling passport for 'Aluminum Cans' was verified (+150 pts)", type: "success", time: "2h ago", icon: "check" }
            ],
            
            activities: [
                { id: 1, title: "Logged Recycle Waste Passport", detail: "Sorted 1.2kg of HDPE plastic containers at local depot.", time: "1h ago", module: "circular" },
                { id: 2, title: "Achieved 'Energy Sentinel' Badge", detail: "Maintained net-zero home energy balance for 7 consecutive days.", time: "1d ago", module: "portfolio" },
                { id: 3, title: "Shared Community Story", detail: "Posted about the local school tree planting initiative.", time: "2d ago", module: "community" },
                { id: 4, title: "Completed EcoJourney Goal", detail: "Reduced single-use grocery bags for a whole week.", time: "3d ago", module: "ecojourney" }
            ],

            wastePassports: [
                { id: "WP-8349", date: "2026-07-04", item: "HDPE Milk Jugs", weight: "1.2 kg", points: 120, status: "Verified" },
                { id: "WP-8210", date: "2026-07-01", item: "Cardboard Packaging", weight: "3.5 kg", points: 150, status: "Verified" },
                { id: "WP-7994", date: "2026-06-25", item: "Glass Beverage Bottles", weight: "5.0 kg", points: 200, status: "Verified" }
            ],

            marketplaceItems: [
                { id: 1, title: "Compost Tumbler (Dual Chamber)", user: "Nate G.", location: "0.8 miles", points: 0, image: "compost", description: "Slightly used dual-chamber rotating bin. Great for backyard organics. Free for pickup." },
                { id: 2, title: "Glass Mason Jars (Box of 12)", user: "Sophia K.", location: "1.5 miles", points: 0, image: "jars", description: "Assorted sizes, clean, lids included. Perfect for preservation or bulk food storage." },
                { id: 3, title: "Organic Seed Potatoes", user: "Clara R.", location: "3.2 miles", points: 0, image: "seeds", description: "Leftover seed tubers of Yukon Gold and Red Pontiac. Ready for soil." }
            ],

            communityStories: [
                { 
                    id: 1, 
                    author: "Liam Thorne", 
                    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Liam", 
                    time: "10m ago", 
                    content: "Just finished cleaning up our neighborhood park! Collected over 4 bags of plastics and 2 bags of aluminum. Logged everything in the Circular Economy module. Let's keep it green!", 
                    likes: 24, 
                    liked: false 
                },
                { 
                    id: 2, 
                    author: "Elena Rostova", 
                    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Elena", 
                    time: "3h ago", 
                    content: "Switched all my incandescent lights to smart LEDs and completed my home energy optimization assessment in the Environmental Intelligence module. Simple changes, huge difference!", 
                    likes: 42, 
                    liked: true 
                }
            ],

            goals: [
                { id: 1, text: "Eliminate Single-Use Plastic Bottles", progress: 75, completed: false, category: "material" },
                { id: 2, text: "Walk or Bike for Short Errands (<2 miles)", progress: 100, completed: true, category: "carbon" },
                { id: 3, text: "Verify 3 items in Waste Passport", progress: 66, completed: false, category: "circular" },
                { id: 4, text: "Share a story in Green Community", progress: 0, completed: false, category: "community" }
            ],

            rewards: [
                { id: 1, title: "Sponsor a Native Tree Planting", cost: 500, pointsReq: 500, description: "We will plant a native tree in your name with our NGO partners. Includes GPS location certificate.", icon: "tree" },
                { id: 2, title: "$10 Zero Waste Shop Coupon", cost: 300, pointsReq: 300, description: "Get $10 off reusable kitchenware and bulk refills at partner eco-stores.", icon: "shopping-bag" },
                { id: 3, title: "Eco-Summit Conference Pass", cost: 1000, pointsReq: 1000, description: "All-access ticket to the virtual Circular Economy Summit (October 2026).", icon: "ticket" },
                { id: 4, title: "Volunteer Group Legacy Badge", cost: 200, pointsReq: 200, description: "Unlock the exclusive 'Local Hero' badge for your Green Portfolio.", icon: "award" }
            ],

            claimedRewards: []
        };

        // Callbacks for subscribers
        this.listeners = [];
    }

    // Get current state
    getState() {
        return this.state;
    }

    // Subscribe to state changes
    subscribe(callback) {
        this.listeners.push(callback);
        // Return unsubscribe function
        return () => {
            this.listeners = this.listeners.filter(l => l !== callback);
        };
    }

    // Notify listeners
    notify() {
        this.listeners.forEach(callback => callback(this.state));
    }

    // Action: Add Points
    addPoints(amount, reason = "Action complete") {
        this.state.points += amount;
        
        // Add to activity list
        const timeStr = "Just now";
        this.state.activities.unshift({
            id: Date.now(),
            title: `Earned +${amount} EcoPoints`,
            detail: reason,
            time: timeStr,
            module: "recognition"
        });

        // Add to notifications
        this.addNotification(`+${amount} PTS: ${reason}`, "success", "zap");
        
        this.notify();
    }

    // Action: Deduct Points
    deductPoints(amount) {
        if (this.state.points >= amount) {
            this.state.points -= amount;
            this.notify();
            return true;
        }
        return false;
    }

    // Action: Set Theme
    setTheme(theme) {
        this.state.theme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        this.notify();
    }

    // Action: Add Waste Passport
    addWastePassport(item, weight) {
        const pointsAwarded = Math.round(parseFloat(weight) * 100);
        const newRecord = {
            id: `WP-${Math.floor(1000 + Math.random() * 9000)}`,
            date: new Date().toISOString().split('T')[0],
            item: item,
            weight: `${weight} kg`,
            points: pointsAwarded,
            status: "Verified"
        };
        
        this.state.wastePassports.unshift(newRecord);
        this.addPoints(pointsAwarded, `Logged waste item: ${item}`);
        
        // Add to activities
        this.state.activities.unshift({
            id: Date.now(),
            title: "Logged Waste Passport",
            detail: `Recorded ${weight}kg of ${item} for recycling.`,
            time: "Just now",
            module: "circular"
        });

        // Check if goal progress changes
        const checkGoal = this.state.goals.find(g => g.id === 3);
        if (checkGoal && !checkGoal.completed) {
            checkGoal.progress = 100;
            checkGoal.completed = true;
            this.addPoints(200, "Completed Goal: Verify 3 items in Waste Passport");
        }

        this.notify();
    }

    // Action: Claim Marketplace Item
    claimMarketplaceItem(id) {
        const item = this.state.marketplaceItems.find(i => i.id === id);
        if (item) {
            // Remove from list
            this.state.marketplaceItems = this.state.marketplaceItems.filter(i => i.id !== id);
            
            // Log as recycling achievement
            this.addPoints(100, `Claimed circular item: ${item.title}`);
            
            // Add to activity
            this.state.activities.unshift({
                id: Date.now(),
                title: "Acquired Marketplace Item",
                detail: `Claimed '${item.title}' from ${item.user} for circular reuse.`,
                time: "Just now",
                module: "circular"
            });
            this.notify();
            return true;
        }
        return false;
    }

    // Action: Add Community Story
    addCommunityStory(content) {
        const newStory = {
            id: Date.now(),
            author: "Eco-Citizen (You)",
            avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=EcoCitizen",
            time: "Just now",
            content: content,
            likes: 0,
            liked: false
        };
        this.state.communityStories.unshift(newStory);
        this.addPoints(50, "Shared community impact story");

        // Complete goal if not done
        const checkGoal = this.state.goals.find(g => g.id === 4);
        if (checkGoal && !checkGoal.completed) {
            checkGoal.progress = 100;
            checkGoal.completed = true;
            this.addPoints(150, "Completed Goal: Share community story");
        }

        this.notify();
    }

    // Action: Like Community Story
    toggleLikeStory(id) {
        const story = this.state.communityStories.find(s => s.id === id);
        if (story) {
            if (story.liked) {
                story.likes--;
                story.liked = false;
            } else {
                story.likes++;
                story.liked = true;
            }
            this.notify();
        }
    }

    // Action: Complete Goal
    completeGoal(id) {
        const goal = this.state.goals.find(g => g.id === id);
        if (goal && !goal.completed) {
            goal.progress = 100;
            goal.completed = true;
            this.addPoints(150, `Completed Goal: ${goal.text}`);
            this.notify();
        }
    }

    // Action: Redeem Reward
    redeemReward(id) {
        const reward = this.state.rewards.find(r => r.id === id);
        if (reward && this.state.points >= reward.cost) {
            this.state.points -= reward.cost;
            
            const couponCode = `ECO-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
            const claimed = {
                id: Date.now(),
                rewardId: reward.id,
                title: reward.title,
                cost: reward.cost,
                date: new Date().toISOString().split('T')[0],
                code: couponCode
            };
            
            this.state.claimedRewards.unshift(claimed);
            
            this.addNotification(`Redeemed reward: ${reward.title}. Code: ${couponCode}`, "success", "award");

            // Add to activity
            this.state.activities.unshift({
                id: Date.now(),
                title: "Redeemed Rewards points",
                detail: `Spent ${reward.cost} pts for ${reward.title}.`,
                time: "Just now",
                module: "recognition"
            });

            this.notify();
            return claimed;
        }
        return null;
    }

    // Action: Add Notification
    addNotification(text, type = "info", icon = "bell") {
        this.state.notifications.unshift({
            id: Date.now(),
            text: text,
            type: type,
            time: "Just now",
            icon: icon
        });
        this.notify();
    }

    // Action: Clear Notifications
    clearNotifications() {
        this.state.notifications = [];
        this.notify();
    }
}

// Export a single global instance
export const AppState = new StateManager();
