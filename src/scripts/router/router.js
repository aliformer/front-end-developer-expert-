import Home from '../views/pages/home'
import Detail from '../views/pages/detail'
import NotFound from '../views/pages/notfound'
import Favorite from '../views/pages/favorite'
import Login from '../views/pages/login'
import Register from '../views/pages/register'  // Add this import

const Router = (url) => {
    switch (url.primaryHash) {
        case '/':
            return new Home(url)
        case '/detail':
            return new Detail(url)
        case '/favorite':
            return new Favorite(url)
        case '/login':
            return new Login()
        case '/register':
            return new Register()
        default:
            return new NotFound(url)
    }
}

export default Router
