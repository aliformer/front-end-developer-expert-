import './style.css'
import CONFIG from '../../../../global/config'
import 'lazysizes'

class RestaurantElement extends HTMLElement {
  set restaurant (restaurant) {
    this._restaurant = restaurant
    this._url = CONFIG.BASE_IMAGE_URL_MEDIUM + this._restaurant.pictureId
    this.render()
  }

  render () {
    this.innerHTML = `
            <article id="content#${
              this._restaurant.iteration
            }/"  tabindex="0" class="card">

                <figure class="image-container" id="restaurant-image"> 
                
                    <img class="lazyload image-card" data-src="${this._url}" alt ="gambar ${
                      this._restaurant.name
                    }" width="100%" height="100%" crossorigin="anonymous">

                </figure>

                <h3 class="title-card">
                    <a href="#/detail/${this._restaurant.id}">${
      this._restaurant.name
    }</a>
                </h3>

                <h4 class="subtitle-card">
                    <i class="material-icons md-18">place</i>
                    ${this._restaurant.city}
                </h4>

                <p class="rating">
                    <i class="material-icons md-18">star</i>
                    ${this._restaurant.rating}
                </p>

                <p class="description-card" id="description">
                    ${this._restaurant.description.substr(0, 100)}
                </p>

            </article>
            `
    this.querySelector('.image-card').addEventListener('error', async () => {
      this.querySelector('image-card').src = await '/images/not-found/not-found.png'
    })
  }

  async renderError (message) {
    this.innerHTML = `<h3>${message}<h3>`
  }
}
customElements.define('restaurant-item', RestaurantElement)
