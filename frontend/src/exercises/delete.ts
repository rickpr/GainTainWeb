import type { Exercise } from '../grpc/exercise_pb'
import { ExerciseServiceClient } from '../grpc/ExerciseServiceClientPb'
import { authToken } from '../util/auth'

const client = new ExerciseServiceClient('http://localhost:8080')

export const deleteExercise = ({ exercise }: { exercise: Exercise }): void => {
  const token = authToken() as string
  client.deleteExercise(exercise, { token }, (err, _response) => {
    if (err !== null) {
      console.error(err)
      alert('Error deleting exercise')
      return
    }
    document.getElementById(`exercise-${exercise.getId()}`)?.remove()
  })
}
