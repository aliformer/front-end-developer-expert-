import '../components/login-form/login.js'
import { signInWithEmailAndPassword } from 'firebase/auth'
import auth  from '../../config/firebase-config.js'

class LoginPage {
    constructor() {
        this.content = document.querySelector('main')
    }

    async render() {
        const loginForm = document.createElement('login-form')
        this.content.appendChild(loginForm)
    }

    async afterRender() {
        const form = document.querySelector('form')
        form.addEventListener('submit', async (e) => {
            e.preventDefault()
            
            const username = document.querySelector('#username').value
            const password = document.querySelector('#password').value
            
            try {
                const userCredential = await signInWithEmailAndPassword(auth, username, password)
                const user = userCredential.user
                
                // Store user data in localStorage or state management
                localStorage.setItem('user', JSON.stringify({
                    uid: user.uid,
                    email: user.email
                }))
                
                // Redirect to home page or dashboard
                window.location.hash = '#/'
                
            } catch (error) {
                console.error('Login error:', error.message)
                // You might want to show an error message to the user
                alert(error.message)
            }
        })
    }
}

export default LoginPage
