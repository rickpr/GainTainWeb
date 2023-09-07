import type { Workout } from '../grpc/workout_pb'
import { deleteWorkout } from './delete'

export const renderWorkout = (workout: Workout): HTMLTableRowElement => {
  const tableRow = document.createElement('tr')
  tableRow.id = `workout-${workout.getId()}`
  const idCell = document.createElement('td')
  idCell.innerText = workout.getId()
  tableRow.appendChild(idCell)
  const userIdCell = document.createElement('td')
  userIdCell.innerText = workout.getUserId()
  tableRow.appendChild(userIdCell)
  const nameCell = document.createElement('td')
  nameCell.innerText = workout.getName()
  tableRow.appendChild(nameCell)
  const descriptionCell = document.createElement('td')
  descriptionCell.innerText = workout.getDescription()
  tableRow.appendChild(descriptionCell)

  const deleteButton = document.createElement('button')
  deleteButton.onclick = () => { deleteWorkout({ workout }) }
  deleteButton.innerText = 'Delete'
  const deleteCell = document.createElement('td')
  deleteCell.appendChild(deleteButton)
  tableRow.appendChild(deleteCell)
  return tableRow
}
