import type { User } from '../grpc/user_pb'

export const renderUser = (user: User): string =>
  `<tr id='user=${user.getId()}'>
<td>${user.getId()}</td>
<td>${user.getName()}</td>
<td>${user.getEmail()}</td>
   </tr>`
