import './style.css'

class RegisterForm extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        <section class="form-register">
            <h1 class="hero-title">Register Account</h1>
            
            <form id="register">
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required>
                </div>
                <div class="form-group">
                    <label for="confirmPassword">Confirm Password:</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" required>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn-submit">Register</button>
                </div>
                <div class="form-group">
                    <p class="login-link">Already have an account? <a href="#/login">Login here</a></p>
                </div>
                <div class="error-message" style="display: none; color: red;"></div>
            </form>            
        </section>
        `
    }
}

customElements.define('register-form', RegisterForm)