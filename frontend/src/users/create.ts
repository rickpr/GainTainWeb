import { NewUser } from '../grpc/user_pb'
import { UserServiceClient } from '../grpc/UserServiceClientPb'
import { renderUser } from './renderUser'
import { authToken } from '../util/auth'

const client = new UserServiceClient('http://localhost:8080')

export const createUser = (): void => {
  const usersTableBody = document.getElementById('users')
  const createUserForm = document.getElementById('create-user')
  if (usersTableBody === null || createUserForm === null) return

  const token = authToken() as string

  createUserForm.onsubmit = (event: SubmitEvent) => {
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement)
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const newUserRequest = new NewUser()
    newUserRequest.setName(name)
    newUserRequest.setEmail(email)
    client.createUser(newUserRequest, { token }, (err, response) => {
      if (err !== null) {
        console.error(err)
        alert('Error creating user')
        return
      }

      usersTableBody.innerHTML += renderUser(response)
    })
  }
}
