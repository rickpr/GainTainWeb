import { NewExercise } from '../grpc/exercise_pb'
import { ExerciseServiceClient } from '../grpc/ExerciseServiceClientPb'
import { renderExercise } from './renderExercise'
import { authToken } from '../util/auth'

const client = new ExerciseServiceClient('http://localhost:8080')

export const createExercise = (): void => {
  const exercisesTableBody = document.getElementById('exercises')
  const createExerciseForm = document.getElementById('create-exercise')
  const token = authToken() as string
  if (createExerciseForm === null || createExerciseForm === undefined) return

  createExerciseForm.onsubmit = (event: SubmitEvent) => {
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement)
    const name = formData.get('name') as string
    const description = formData.get('description') as string
    const videoUrl = formData.get('video-url') as string

    const newExerciseRequest = new NewExercise()
    newExerciseRequest.setName(name)
    newExerciseRequest.setDescription(description)
    newExerciseRequest.setVideoUrl(videoUrl)
    void client.createExercise(newExerciseRequest, { token }, (err, response) => {
      console.log(err)
      if (err !== null) {
        console.error(err)
        alert('Error creating exercise')
        return
      }

      if (exercisesTableBody?.innerHTML !== undefined) {
        exercisesTableBody.appendChild(renderExercise(response))
      }
    })
  }
}
