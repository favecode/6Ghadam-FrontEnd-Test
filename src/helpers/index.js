import { userService } from './../api/service'

export const apiFunctions = {
   loginUser,
   readLeagues
}

function loginUser(email, password) {
   userService.loginUser(email, password)
      .then(
         (response) => {
            console.log(response)
         }
      )
}
function readLeagues(token) {
   userService.readLeagues(token)
      .then(
         (response) => {
            console.log(response)
         }
      )
}