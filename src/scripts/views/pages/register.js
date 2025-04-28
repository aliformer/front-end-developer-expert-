import '../components/register-form/register.js'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import auth from '../../config/firebase-config.js'

class RegisterPage {
    constructor() {
        this.content = document.querySelector('main')
    }

    async render() {
        const registerForm = document.createElement('register-form')
        this.content.appendChild(registerForm)
    }

    async afterRender() {
        const form = document.querySelector('form')
        const errorMessage = document.querySelector('.error-message')

        form.addEventListener('submit', async (e) => {
            e.preventDefault()
            
            const email = document.querySelector('#email').value
            const password = document.querySelector('#password').value
            const confirmPassword = document.querySelector('#confirmPassword').value

            // Basic validation
            if (password !== confirmPassword) {
                errorMessage.textContent = 'Passwords do not match'
                errorMessage.style.display = 'block'
                return
            }
            
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password)
                const user = userCredential.user
                
                // Store user data in localStorage
                localStorage.setItem('user', JSON.stringify({
                    uid: user.uid,
                    email: user.email
                }))
                
                // Redirect to home page
                window.location.hash = '#/'
                
            } catch (error) {
                console.error('Registration error:', error.message)
                errorMessage.textContent = error.message
                errorMessage.style.display = 'block'
            }
        })
    }
}

export default RegisterPage