import { ExercisesRequest } from '../grpc/exercise_pb'
import { ExerciseServiceClient } from '../grpc/ExerciseServiceClientPb'
import { createExercise } from './create'
import { renderExercise } from './renderExercise'
import { authToken, requireAuth } from '../util/auth'

const client = new ExerciseServiceClient('http://localhost:8080')

export const listExercises = () => {
  if (!requireAuth()) return

  const exercisesTableBody = document.getElementById('exercises')
  const listRequest = new ExercisesRequest()
  client.listExercises(listRequest, { token: authToken() }, (err, response) => {
    if (err) {
      console.error(err)
      exercisesTableBody.innerHTML = '<tr>Error</tr>'
      return
    }

    exercisesTableBody.innerHTML = response.getExercisesList().map(renderExercise).join('')
  })

  createExercise()
}
