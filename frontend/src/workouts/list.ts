import { WorkoutsRequest } from '../grpc/workout_pb'
import { WorkoutServiceClient } from '../grpc/WorkoutServiceClientPb'
import { createWorkout } from './create'
import { renderWorkout } from './renderWorkout'
import { authToken, requireAuth } from '../util/auth'

const client = new WorkoutServiceClient('http://localhost:8080')

export const listWorkouts = (): void => {
  if (!requireAuth()) return
  const workoutsTableBody = document.getElementById('workouts')
  if (workoutsTableBody === null) return

  const token = authToken() as string
  const listRequest = new WorkoutsRequest()
  client.listWorkouts(listRequest, { token }, (err, response) => {
    if (err !== null) {
      console.error(err)
      workoutsTableBody.innerHTML = '<tr>Error</tr>'
      return
    }

    response.getWorkoutsList().forEach(workout => {
      workoutsTableBody.appendChild(renderWorkout(workout))
    })
  })

  createWorkout()
}
