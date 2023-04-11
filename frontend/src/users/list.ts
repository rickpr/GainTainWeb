import { UsersRequest } from '../grpc/user_pb'
import { UserServiceClient } from '../grpc/UserServiceClientPb'
import { createUser } from './create'
import { renderUser } from './renderUser'
import { authToken, requireAuth } from '../util/auth'

const client = new UserServiceClient('http://localhost:8080')

export const listUsers = () => {
  if (!requireAuth()) return

  const usersTableBody = document.getElementById('users')
  const listRequest = new UsersRequest()
  client.listUsers(listRequest, { token: authToken() }, (err, response) => {
    if (err) {
      console.error(err)
      usersTableBody.innerHTML = '<tr>Error</tr>'
      return
    }

    usersTableBody.innerHTML = response.getUsersList().map(renderUser).join('')
  })

  createUser()
}
