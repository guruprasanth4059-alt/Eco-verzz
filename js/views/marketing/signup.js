/* Sign Up View */

export async function render(container) {
    container.innerHTML = `
        <div class="login-wrapper">
            <div class="login-card card">
                
                <!-- Logo -->
                <div class="login-logo-section">
                    <a href="#/" class="logo-link">
                        <div class="logo-icon-wrapper" style="background-color: var(--marketing-forest); color: #ffffff;">
                            <img src="images/logo.jpg" alt="ECO VERZZ Logo" class="logo-image-icon">
                        </div>
                        <span class="logo-text">ECO<span class="logo-highlight"> VERZZ</span></span>
                    </a>
                </div>

                <div class="login-header">
                    <h2>Join the Operating System</h2>
                    <p>Create your verified environmental portfolio and start tracking habits.</p>
                </div>

                <!-- Form -->
                <form id="signup-form" class="login-form" onsubmit="return false;">
                    <div class="form-group">
                        <label for="signup-name" class="form-label">FULL NAME</label>
                        <input type="text" id="signup-name" class="input-text" placeholder="Alex Rivers" required>
                    </div>

                    <div class="form-group">
                        <label for="signup-email" class="form-label">EMAIL ADDRESS</label>
                        <input type="email" id="signup-email" class="input-text" placeholder="alex@ecoplanet.org" required>
                    </div>

                    <div class="form-group">
                        <label for="signup-password" class="form-label">PASSWORD</label>
                        <input type="password" id="signup-password" class="input-text" placeholder="••••••••" required>
                    </div>

                    <div class="form-options">
                        <label class="checkbox-container">
                            <input type="checkbox" required>
                            <span class="checkbox-label" style="font-size: 0.75rem;">I agree to the EcoVerse Principles & Terms</span>
                        </label>
                    </div>

                    <button type="submit" id="btn-signup-submit" class="btn btn-primary btn-accent ripple" style="background-color: var(--marketing-forest); width: 100%; height: 46px;">
                        <span>Create Portfolio (+200 pts)</span>
                        <i data-lucide="sparkles"></i>
                    </button>
                </form>

                <div class="login-divider">
                    <span>or sign up with</span>
                </div>

                <!-- Social Signups -->
                <div class="social-login-grid">
                    <button class="btn btn-outline social-login-btn ripple">
                        <i data-lucide="chrome" style="color: #DB4437;"></i>
                        <span>Google</span>
                    </button>
                    <button class="btn btn-outline social-login-btn ripple">
                        <i data-lucide="apple" style="color: #000000;"></i>
                        <span>Apple</span>
                    </button>
                </div>

                <!-- Footer back link -->
                <div class="login-footer-links">
                    <p>Already running a portfolio? <a href="#/login" class="signup-link">Sign In</a></p>
                    <a href="#/" class="back-home-link">
                        <i data-lucide="arrow-left"></i>
                        <span>Back to Homepage</span>
                    </a>
                </div>

            </div>
        </div>
    `;

    // Handle Signup submission
    const form = document.getElementById('signup-form');
    const submitBtn = document.getElementById('btn-signup-submit');

    if (form && submitBtn) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Set loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = `
                <div class="spinner"></div>
                <span>Creating Portfolio...</span>
            `;

            // Mock latency
            setTimeout(() => {
                submitBtn.innerHTML = `
                    <i data-lucide="check" style="color: #FFFFFF;"></i>
                    <span>Portfolio Created! Redirecting...</span>
                `;
                submitBtn.style.backgroundColor = '#10B981'; // Green for success
                if (window.lucide) window.lucide.createIcons();

                setTimeout(() => {
                    // Redirect to dashboard
                    window.location.hash = '#/dashboard';
                }, 1000);

            }, 1500);
        });
    }

    if (window.lucide) {
        window.lucide.createIcons();
    }
}
