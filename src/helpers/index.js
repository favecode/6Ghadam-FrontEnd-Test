import { userService } from './../api/service'

export const apiFunctions = {
   loginUser,
   readLeagues,
   addLeague,
   updateLeague
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
function addLeague(token, name, pictureURL) {
   userService.addLeague(token, name, pictureURL)
      .then(
         (response) => {
            console.log(response)
         }
      )
}
function updateLeague(token, name, pictureURL, id) {
   userService.updateLeague(token, name, pictureURL, id)
      .then(
         (response) => {
            console.log(response)
         }
      )
}