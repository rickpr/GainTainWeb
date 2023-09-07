import type { Workout } from '../grpc/workout_pb'
import { WorkoutServiceClient } from '../grpc/WorkoutServiceClientPb'
import { authToken } from '../util/auth'

const client = new WorkoutServiceClient('http://localhost:8080')

export const deleteWorkout = ({ workout }: { workout: Workout }): void => {
  const token = authToken() as string
  client.deleteWorkout(workout, { token }, (err, _response) => {
    if (err !== null) {
      console.error(err)
      alert('Error deleting workout')
    }
    document.getElementById(`workout-${workout.getId()}`)?.remove()
  })
}
