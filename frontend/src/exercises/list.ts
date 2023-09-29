import { ExercisesRequest } from '../grpc/exercise_pb'
import { ExerciseServiceClient } from '../grpc/ExerciseServiceClientPb'
import { createExercise } from './create'
import { renderExercise } from './renderExercise'
import { authToken, requireAuth } from '../util/auth'

const client = new ExerciseServiceClient('http://localhost:8080')

export const listExercises = (): void => {
  if (!requireAuth()) return
  const exercisesTableBody = document.getElementById('exercises')
  if (exercisesTableBody === null) return

  const token = authToken() as string
  const listRequest = new ExercisesRequest()
  client.listExercises(listRequest, { token }, (err, response) => {
    if (err !== null) {
      console.error(err)
      exercisesTableBody.innerHTML = '<tr>Error</tr>'
      return
    }

    response.getExercisesList().forEach(exercise => {
      exercisesTableBody.appendChild(renderExercise(exercise))
    })
  })

  createExercise()
}
