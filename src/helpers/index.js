import { userService } from './../api/service'

export const apiFunctions = {
   loginUser,
   readLeagues,
   addLeague,
   updateLeague,
   deleteLeague
}

function loginUser(email, password) {
      return userService.loginUser(email, password)
      .then(
            (response) => {
                  return response
            }
      )
}
function readLeagues(token) {
      return userService.readLeagues(token)
      .then(
            (response) => {
                  return response
            }
      )
}
function addLeague(token, name, pictureURL) {
      return userService.addLeague(token, name, pictureURL)
      .then(
            (response) => {
                  return response
            }
      )
}
function updateLeague(token, name, pictureURL, id) {
      return userService.updateLeague(token, name, pictureURL, id)
      .then(
            (response) => {
                  return response
            }
      )
}
function deleteLeague(token, id) {
      return userService.deleteLeague(token, id)
      .then(
            (response) => {
                  return response
            }
      )
}