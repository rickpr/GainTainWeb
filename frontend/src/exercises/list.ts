import { ExercisesRequest } from '../grpc/exercise_pb'
import { ExerciseServiceClient } from '../grpc/ExerciseServiceClientPb'
import { createExercise } from './create'
import { renderExercise } from './renderExercise'
import { authToken, requireAuth } from '../util/auth'

const client = new ExerciseServiceClient('http://localhost:8080')

export const listExercises = (): void => {
  if (!requireAuth()) return
  const token = authToken() as string

  const exercisesTableBody = document.getElementById('exercises')
  const listRequest = new ExercisesRequest()
  client.listExercises(listRequest, { token }, (err, response) => {
    if (err !== null) {
      console.error(err)
      if (exercisesTableBody !== null) exercisesTableBody.innerHTML = '<tr>Error</tr>'
      return
    }

    if (exercisesTableBody !== null) {
      exercisesTableBody.innerHTML = response.getExercisesList().map(renderExercise).join('')
    }
  })

  createExercise()
}
