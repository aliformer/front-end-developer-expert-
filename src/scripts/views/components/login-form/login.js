import './style.css'

class LoginForm extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        <section class="form-login">
            <h1 class="hero-title">Login Form</h1>
            
            <form>
                <div class="form-group">
                    <label for="username">Email:</label>
                    <input type="email" id="username" name="username" required>
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn-submit">Login</button>
                </div>
                <div class="error-message" style="display: none; color: red;"></div>
            </form>            
        </section>
        `
    }
}

customElements.define('login-form', LoginForm)
