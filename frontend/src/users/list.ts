import { UsersRequest } from '../grpc/user_pb'
import { UserServiceClient } from '../grpc/UserServiceClientPb'

const client = new UserServiceClient('http://localhost:8080')

export const listUsers = () => {
  const request = new UsersRequest()
  client.listUsers(request, {}, (err, response) => {
    const usersTableBody = document.getElementById('users')
    if (err) {
      console.error(err)
      usersTableBody.innerHTML = '<tr>Error</tr>'
      return
    }

    // @ts-ignore
    usersTableBody.innerHTML = response.array[0].map(user =>
      `<tr>
${user.map((attribute: any) => `<td>${attribute}</td>`).join('')}
       </tr>`
    ).join('')
  })
}
