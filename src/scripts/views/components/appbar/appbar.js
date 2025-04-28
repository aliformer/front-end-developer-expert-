import './style.css'
import '../searchbar/searchbar'

class Appbar extends HTMLElement {
  async connectedCallback () {
    await this.render()
    await this.clickEvent()
  }

  async clickEvent () {
    const menuButtonElement = document.querySelector('.menu-button')
    const main = document.querySelector('main')
    const sidebar = document.querySelector('.sidebar')

    menuButtonElement.addEventListener('click', (event) => {
      sidebar.classList.toggle('active')
      event.stopPropagation()
    })

    main.addEventListener('click', (event) => {
      sidebar.classList.remove('active')
      event.stopPropagation()
    })

    // If user is logged in, add popover toggle and logout handler
    const userToggle = document.querySelector('.user-toggle')
    if (userToggle) {
      userToggle.addEventListener('click', (e) => {
        const popover = document.querySelector('.user-popover')
        // Toggle popover visibility
        popover.style.display = (popover.style.display === 'none' || popover.style.display === '') ? 'block' : 'none'
        e.stopPropagation()
      })
    }

    const logoutButton = document.querySelector('.logout-button')
    if (logoutButton) {
      logoutButton.addEventListener('click', (e) => {
        localStorage.removeItem('user')
        // Optionally, you might need to call firebase.auth().signOut() if using firebase
        window.location.hash = '#/login'
      })
    }
  }

  render () {
    const userData = localStorage.getItem('user')
    let userLinks = ''

    if (userData) {
      const user = JSON.parse(userData)
      userLinks = `
        <li class="user-info">
          <a href="javascript:void(0)" class="user-toggle">
            <span class="user-email">${user.email}</span>
          </a>
          <div class="user-popover" style="display:none;">
            <a href="#/profile">Profile</a>
            <a href="javascript:void(0)" class="logout-button">Logout</a>
          </div>
        </li>
      `
    } else {
      userLinks = `
        <li><a href="#/login">Login</a></li>
        <li><a href="#/register">Register</a></li>
      `
    }

    this.innerHTML = `
      <nav class="navbar">        
        <div class="logo-wrapper">
          <img src="/images/logo/logo.png" alt="logo" width="150px" height="50px">
        </div>                       
        <button class="menu-button" tabindex="0"><i class="material-icons md-36">menu</i></button>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="#/favorite">Favorite</a></li>
          <li><a href="#/category">Category</a></li>
          <li><a href="https://github.com/aliformer">About Us</a></li>
          ${userLinks}
        </ul>              
      </nav>
      <aside class="sidebar">
        <ul class="sidebar-menu">
          <li><a href="index.html">Home</a></li>
          <li><a href="#/favorite">Favorite</a></li>
          <li><a href="#/category">Category</a></li>          
          <li><a href="https://github.com/aliformer">About Us</a></li>
          ${userLinks}
        </ul>
      </aside>
    `
  }
}

customElements.define('app-bar', Appbar)
