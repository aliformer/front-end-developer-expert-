import FavoriteRestaurantIdb from '../../../data/idb'

class Favorite {
  constructor (url) {
    this.url = url
    this.content = document.querySelector('main')
    this.restaurantElement = document.createElement('restaurant-container')
  }

  async render () {
    this.content.append(this.restaurantElement)
  }

  async afterRender () {
    this.dataLoaded()
  }

  async dataLoaded () {
    const data = await this.getData()
    if (data.length === 0) {
      this.restaurantElement.innerHTML = `
    <figure style="display: flex; flex-direction: row; margin-top: 100px;">
    <img src='images/logo/logo.png' style="display:block; width: 200px; margin: 10px;">
    <p style="display:block; margin: auto;"> Belum ada Restaurant yang ditambahkan ke dalam favorite </p>
    </figure>
    
    `
    } else {
      this.loadData(data, 'Tidak dapat memuat data', this.restaurantElement)
    }
  }

  async loadData (data, error, element) {
    if (data) {
      element.innerHTML = ''
      element.restaurant = await data
    } else {
      element.renderError(error)
    }
  }

  async getData () {
    const response = await FavoriteRestaurantIdb.getAllRestaurant()
    return response
  }
}

export default Favorite
