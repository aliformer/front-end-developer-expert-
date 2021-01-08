import "../restaurantElement/index.js"
import styles from  "./style.css"
class RestaurantContainer extends HTMLElement{
    constructor(){
        super();
    }
    set restaurant(restaurant){
        this._restaurant = restaurant;
        this.render();
    }
    render(){
        let style = document.createElement('style')
        style.textContent = styles
        this._restaurant.forEach(restaurant =>{
            const restaurantListElement = document.createElement('restaurant-item');
            restaurantListElement.restaurant = restaurant;
            this.appendChild(style)
            this.appendChild(restaurantListElement)
            

        } )


    }

}
customElements.define('restaurant-container', RestaurantContainer)