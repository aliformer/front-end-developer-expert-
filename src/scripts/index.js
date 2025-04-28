import 'regenerator-runtime' /* for async await transpile */
import './views/components/appbar/appbar'
import './views/components/footer/footer'
import '../styles/main.css'
import swRegister from '../scripts/utils/sw-register'
import App from './views/app'

const app = new App(
  document.createElement('app-bar'),
  document.createElement('main'),
  document.createElement('footer-app')
)

window.addEventListener('load', async () => {
  await app.init()
  await swRegister()
})

window.addEventListener('hashchange', () => {
  app.reset()
  app.init()
})
