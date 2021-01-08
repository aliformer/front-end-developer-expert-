import styles from './style.css'
import logo from '../../../public/images/logo/logo.png'
class Appbar extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.render()
        this.clickEvent()
        
    }
    clickEvent(){
        const sidebar = document.querySelector('.sidebar')
        const buttonElement = document.querySelector('.menu-button')
        buttonElement.onclick = () => {
            sidebar.classList.toggle('active')
            console.log('clicked')
        }        
    }
    render(){
        this.innerHTML = `
        <style>
        @import '${styles}'
        </style>
        <nav class="navbar">        
            <div class="logo-wrapper">
            <img src="${logo}" alt="">
            </div>            
            <button class="menu-button" tabindex="0"><i class="material-icons md-36">menu</i></button>
            <ul>
                <li><a href="#" >Home</a></li>
                <li><a href="#" >Favorite</a></li>
                <li><a href="#" >Category</a></li>
                <li><a href="#" >About Us</a></li>
            </ul>
            
        </nav>
        <aside class="sidebar">
            <ul class="sidebar-menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">Favorite</a></li>
                <li><a href="#">Category</a></li>
                <li><a href="#">About Us</a></li>
            </ul>
        </aside>
      
        ` 
        
        
    }
   
}

customElements.define('app-bar', Appbar);