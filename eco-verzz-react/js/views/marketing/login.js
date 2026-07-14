/* Login View */

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
                    <h2>Welcome back, Eco-Citizen</h2>
                    <p>Enter your credentials to access the Environmental Operating System.</p>
                </div>

                <!-- Form -->
                <form id="login-form" class="login-form" onsubmit="return false;">
                    <div class="form-group">
                        <label for="login-email" class="form-label">EMAIL ADDRESS</label>
                        <input type="email" id="login-email" class="input-text" placeholder="citizen@ecoplanet.org" required>
                    </div>

                    <div class="form-group">
                        <label for="login-password" class="form-label">PASSWORD</label>
                        <input type="password" id="login-password" class="input-text" placeholder="••••••••" required>
                    </div>

                    <div class="form-options">
                        <label class="checkbox-container">
                            <input type="checkbox" checked>
                            <span class="checkbox-label">Remember my footprint session</span>
                        </label>
                        <a href="#" class="forgot-link">Forgot password?</a>
                    </div>

                    <button type="submit" id="btn-login-submit" class="btn btn-primary btn-accent ripple" style="background-color: var(--marketing-forest); width: 100%; height: 46px;">
                        <span>Verify & Sign In</span>
                        <i data-lucide="shield-check"></i>
                    </button>
                </form>

                <div class="login-divider">
                    <span>or sign in with</span>
                </div>

                <!-- Social Logins -->
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
                    <p>Don't have a portfolio yet? <a href="#/signup" class="signup-link">Sign Up</a></p>
                    <a href="#/" class="back-home-link">
                        <i data-lucide="arrow-left"></i>
                        <span>Back to Homepage</span>
                    </a>
                </div>

            </div>
        </div>
    `;

    // Handle Login submission
    const form = document.getElementById('login-form');
    const submitBtn = document.getElementById('btn-login-submit');

    if (form && submitBtn) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Set loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = `
                <div class="spinner"></div>
                <span>Authenticating...</span>
            `;

            // Mock network latency
            setTimeout(() => {
                submitBtn.innerHTML = `
                    <i data-lucide="check" style="color: #FFFFFF;"></i>
                    <span>Access Granted! Redirecting...</span>
                `;
                submitBtn.style.backgroundColor = '#10B981'; // Green for success
                if (window.lucide) window.lucide.createIcons();

                setTimeout(() => {
                    // Redirect to dashboard home
                    window.location.hash = '#/dashboard';
                }, 1000);

            }, 1500);
        });
    }

    if (window.lucide) {
        window.lucide.createIcons();
    }
}
