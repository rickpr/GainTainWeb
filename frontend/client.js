const { UsersRequest } = require('./grpc/user_pb.js')
const { UserServiceClient } = require('./grpc/user_grpc_web_pb.js')

const client = new UserServiceClient('http://localhost:8080')

const request = new UsersRequest()

client.listUsers(request, {}, (err, response) => {
  if (err) {
    console.error(err)
  }
  const usersTableBody = document.getElementById('users')
  usersTableBody.innerHTML = response.array[0].map(user =>
    `<tr>
       ${user.map(attribute => `<td>${attribute}</td>`).join('')}
     </tr>
    `
  ).join('')
  console.log(response)
})
