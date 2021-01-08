import styles from './style.css'
class RestaurantElement extends HTMLElement {
    constructor() {
        super();
    }

    set restaurant(restaurant){
        this._restaurant = restaurant;
        this.render()
    }
    
    render() {
        let style = document.createElement('style')
        style.textContent = styles
        this.innerHTML = `
        <article id="${this._restaurant.id}" class="card" tabindex="0">
        <figure class="image-container"> 
            <img src="${this._restaurant.pictureId}" width:"500px" class="image-card" alt ="gambar ${this._restaurant.name}">
        </figure>
            <h3 class="title-card" tabindex="0">${this._restaurant.name}</h3>
            <h4 class="subtitle-card"tabindex="0"><i class="material-icons md-18">place</i>${this._restaurant.city}</h4>
            <p class="rating" tabindex="0"><i class="material-icons md-18">star</i>${this._restaurant.rating}</p>
            <p class="description-card" tabindex="0">${this._restaurant.description}</p>
        </article>
        `
        }

}
customElements.define('restaurant-item', RestaurantElement)