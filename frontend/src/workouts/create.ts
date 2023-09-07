import { NewWorkout } from '../grpc/workout_pb'
import { WorkoutServiceClient } from '../grpc/WorkoutServiceClientPb'
import { renderWorkout } from './renderWorkout'
import { authToken } from '../util/auth'

const client = new WorkoutServiceClient('http://localhost:8080')

export const createWorkout = (): void => {
  const workoutsTableBody = document.getElementById('workouts')
  const createWorkoutForm = document.getElementById('create-workout')
  if (createWorkoutForm === null) return

  const token = authToken() as string
  createWorkoutForm.onsubmit = (event: SubmitEvent) => {
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement)
    const userId = formData.get('user-id') as string
    const name = formData.get('name') as string
    const description = formData.get('description') as string

    const newWorkoutRequest = new NewWorkout()
    newWorkoutRequest.setUserId(userId)
    newWorkoutRequest.setName(name)
    newWorkoutRequest.setDescription(description)
    client.createWorkout(newWorkoutRequest, { token }, (err, response) => {
      if (err !== null) {
        console.error(err)
        alert('Error creating workout')
        return
      }

      workoutsTableBody?.appendChild(renderWorkout(response))
    })
  }
}
