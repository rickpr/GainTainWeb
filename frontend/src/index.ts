import './index.css'
import { listUsers } from './users/list'
import { listExercises } from './exercises/list'
import { listWorkouts } from './workouts/list'
import { Login } from './login'

import RootHTML from './root/index.html'
import FourOhFourHTML from './404.html'
import UsersHTML from './users/index.html'
import LoginHTML from './login/index.html'
import ExerciseHTML from './exercises/index.html'
import WorkoutHTML from './workouts/index.html'

interface Route {
  html: string
  js: () => void
}

const routes: Record<string, Route> = {
  '/': {
    html: RootHTML,
    js: (): void => {}
  },
  '/users': {
    html: UsersHTML,
    js: listUsers
  },
  '/login': {
    html: LoginHTML,
    js: Login
  },
  '/exercises': {
    html: ExerciseHTML,
    js: listExercises
  },
  '/workouts': {
    html: WorkoutHTML,
    js: listWorkouts
  },
  404: {
    html: FourOhFourHTML,
    js: (): void => {}
  }
}

const { html, js } = routes[window.location.pathname] ?? routes['404']

if (document?.getElementById('content')?.innerHTML !== null) {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  document!.getElementById('content')!.innerHTML = html
  js()
}
