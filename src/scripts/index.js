import  "regenerator-runtime"; /* for async await transpile */
import "./components/appbar/index.js";
import "./components/hero/index.js";
import "./components/RestaurantContainer/index.js";
import "../styles/main.css";
import data from "../DATA.json"


let body = document.querySelector("body");

body.innerHTML = 
    `
    <a href="#content" 
        id="skipToContent" tabindex="0" 
        class="skip-link">

        Lompat ke konten

    </a>   

    <header>

        <app-bar></app-bar>        

    </header>

    <main class="main-content" id="content">

        <hero-app></hero-app>

        <h2 tabindex="0">
            Daftar Restoran
        </h2>

        <restaurant-container></restaurant-container>
        
    </main>

    <footer>

        <p>Copyright © 2020 - Hunger Apps</p>

    </footer>    
    `


document.querySelector("restaurant-container").restaurant = data.restaurants
