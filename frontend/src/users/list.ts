import { UsersRequest } from '../grpc/user_pb'
import { UserServiceClient } from '../grpc/UserServiceClientPb'
import { createUser } from './create'
import { renderUser } from './renderUser'

const client = new UserServiceClient('http://localhost:8080')

export const listUsers = () => {
  const usersTableBody = document.getElementById('users')
  const listRequest = new UsersRequest()
  // TODO: figure out if this is the best way to do this.
  const token = document.cookie.split(';').find(h => h.slice(0, 6) === 'token=').split('=')[1]
  client.listUsers(listRequest, { token }, (err, response) => {
    if (err) {
      console.error(err)
      usersTableBody.innerHTML = '<tr>Error</tr>'
      return
    }

    usersTableBody.innerHTML = response.getUsersList().map(renderUser).join('')
  })

  createUser()
}
