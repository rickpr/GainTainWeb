import { NewUser } from '../grpc/user_pb'
import { UserServiceClient } from '../grpc/UserServiceClientPb'
import { renderUser } from './renderUser'

const client = new UserServiceClient('http://localhost:8080')

export const createUser = () => {
  const usersTableBody = document.getElementById('users')
  const createUserForm = document.getElementById('create-user')

  createUserForm.onsubmit = (event: any) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const newUserRequest = new NewUser()
    newUserRequest.setName(name)
    newUserRequest.setEmail(email)
    client.createUser(newUserRequest, {}, (err, response) => {
      if (err) {
        console.error(err)
        alert('Error creating user')
        return
      }

      usersTableBody.innerHTML += renderUser(response)
    })
  }
}
