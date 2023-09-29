import type { Exercise } from '../grpc/exercise_pb'
import { deleteExercise } from './delete'

export const renderExercise = (exercise: Exercise): HTMLTableRowElement => {
  const tableRow = document.createElement('tr')
  tableRow.id = `exercise-${exercise.getId()}`
  const idCell = document.createElement('td')
  idCell.innerText = exercise.getId()
  tableRow.appendChild(idCell)
  const nameCell = document.createElement('td')
  nameCell.innerText = exercise.getName()
  tableRow.appendChild(nameCell)
  const descriptionCell = document.createElement('td')
  descriptionCell.innerText = exercise.getDescription()
  tableRow.appendChild(descriptionCell)
  const videoUrlCell = document.createElement('td')
  videoUrlCell.innerText = exercise.getVideoUrl()
  tableRow.appendChild(videoUrlCell)

  const deleteButton = document.createElement('button')
  deleteButton.onclick = () => { deleteExercise({ exercise }) }
  deleteButton.innerText = 'Delete'
  const deleteCell = document.createElement('td')
  deleteCell.appendChild(deleteButton)
  tableRow.appendChild(deleteCell)
  return tableRow
}
