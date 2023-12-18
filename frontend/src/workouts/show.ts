import { WorkoutRequest } from '../grpc/workout_pb'
import { WorkoutServiceClient } from '../grpc/WorkoutServiceClientPb'
import { createWorkout } from './create'
import { renderWorkout } from './renderWorkout'
import { authToken, requireAuth } from '../util/auth'
import { uuidRegex  } from '../constants'

const client = new WorkoutServiceClient('http://localhost:8080')

export const showWorkout = (): void => {
  if (!requireAuth()) return
  const workoutId = window.location.pathname.match(uuidRegex)?.[0]
  if (workoutId === undefined) return

  const workoutDiv = document.getElementById('workout')
  if (workoutDiv === null) return

  const token = authToken() as string
  const getRequest = new WorkoutRequest()
  getRequest.setId(workoutId)
  client.getWorkout(getRequest, { token }, (err, response) => {
    if (err !== null) {
      console.error(err)
      workoutDiv.innerHTML = '<h1>Error</h1>'
      return
    }

    workoutDiv.appendChild(renderWorkout(response))
  })

  createWorkout()
}
