import { LoginRequest } from '../grpc/login_pb'
import { LoginServiceClient } from '../grpc/LoginServiceClientPb'

const client = new LoginServiceClient('http://localhost:8080')

export const Login = (): void => {
  const loginForm = document.getElementById('login')
  if (loginForm === null) return

  loginForm.onsubmit = (event: SubmitEvent) => {
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement)
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const loginRequest = new LoginRequest()
    loginRequest.setEmail(email)
    loginRequest.setPassword(password)

    client.login(loginRequest, {}, (err, response) => {
      if (err !== null) {
        alert(err)
        return
      }

      document.cookie = `token=${response.getToken()}; SameSite=strict`
      window.location.href = '/'
    })
  }
}
