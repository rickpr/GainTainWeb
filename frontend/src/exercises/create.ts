import { NewExercise } from '../grpc/exercise_pb'
import { ExerciseServiceClient } from '../grpc/ExerciseServiceClientPb'
import { renderExercise } from './renderExercise'
import { authToken } from '../util/auth'

const client = new ExerciseServiceClient('http://localhost:8080')

export const createExercise = () => {
  const exercisesTableBody = document.getElementById('exercises')
  const createExerciseForm = document.getElementById('create-exercise')

  createExerciseForm.onsubmit = (event: any) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const name = formData.get('name') as string
    const description = formData.get('description') as string
    const videoUrl = formData.get('video-url') as string

    const newExerciseRequest = new NewExercise()
    newExerciseRequest.setName(name)
    newExerciseRequest.setDescription(description)
    newExerciseRequest.setVideoUrl(videoUrl)
    client.createExercise(newExerciseRequest, { token: authToken() }, (err, response) => {
      if (err) {
        console.error(err)
        alert('Error creating exercise')
        return
      }

      exercisesTableBody.innerHTML += renderExercise(response)
    })
  }
}
