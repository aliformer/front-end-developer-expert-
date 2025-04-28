import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyC5-viZ20jMJgbPXU-IlNQdxZpi-38-cdU",
    authDomain: "restaurant-app-submission.firebaseapp.com",
    projectId: "restaurant-app-submission",
    storageBucket: "restaurant-app-submission.firebasestorage.app",
    messagingSenderId: "272478841269",
    appId: "1:272478841269:web:a341e9a7d27c41ac03d1fc"
  };
const app = initializeApp(firebaseConfig)
export default getAuth(app)