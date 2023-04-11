import './index.css'
import { listUsers } from './users/list'
import { Login } from './login'

import FourOhFourHTML from './404.html'
import UsersHTML from './users/index.html'
import LoginHTML from './login/index.html'

interface Route {
  html: string;
  js: () => void;
}

const routes: { [key: string]: Route } = {
  '/': {
    html: UsersHTML,
    js: listUsers
  },
  '/login': {
    html: LoginHTML,
    js: Login
  },
  '404': {
    html: FourOhFourHTML,
    js: (): void => {}
  }
}

const { html, js } = routes[window.location.pathname] || routes['404']

document.getElementById('content').innerHTML = html
js()
