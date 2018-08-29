import { serverConstants } from './../constants'
import axios from 'axios'
export const userService = {
   loginUser,
   readLeagues
}
function loginUser(email, password) {
   let url =
      serverConstants.PROTOCOL +
      serverConstants.AAA +
      serverConstants.WEBSERVICE_URL +
      serverConstants.CLIENTS +
      serverConstants.LOGIN
   return axios.post(url,
      {
         "realm": "Organization",
         "email": email,
         "password": password
      })
      .then(response => { return response })
      .catch(err => console.log(err))
}
function readLeagues(token) {
   let url =
      serverConstants.PROTOCOL +
      serverConstants.DATA +
      serverConstants.WEBSERVICE_URL +
      serverConstants.LEAGUES +
      serverConstants.ACCESS_TOKEN +
      token
   return axios.get(url)
      .then(response => { return response })
      .catch(err => console.log(err));
}