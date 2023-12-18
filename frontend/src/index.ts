import './index.css'

import { uuidRegex } from './constants'
import { listUsers } from './users/list'
import { listExercises } from './exercises/list'

import { listWorkouts } from './workouts/list'
import { showWorkout } from './workouts/show'

import { Login } from './login'

import RootHTML from './root/index.html'
import FourOhFourHTML from './404.html'
import UsersHTML from './users/index.html'
import LoginHTML from './login/index.html'
import ExerciseHTML from './exercises/index.html'

import WorkoutHTML from './workouts/index.html'
import ShowWorkoutHTML from './workouts/show.html'

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

const dynamicRoute = (path: string): Route | undefined => {
  const matches = path.match(`/workouts/${uuidRegex}`)
  if (matches) {
    return {
      html: ShowWorkoutHTML,
      js: showWorkout
    }
  }
  return undefined
}

const path = window.location.pathname
const { html, js } = routes[path] ?? dynamicRoute(path) ?? routes['404']

if (document?.getElementById('content')?.innerHTML !== null) {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  document!.getElementById('content')!.innerHTML = html
  js()
}
