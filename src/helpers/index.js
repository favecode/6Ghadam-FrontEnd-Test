import { userService } from './../api/service'

export const apiFunctions = {
   loginUser
}

function loginUser(email, password) {
   userService.loginUser(email, password)
      .then(
         (response) => {
            console.log(response)
         }
      )
}