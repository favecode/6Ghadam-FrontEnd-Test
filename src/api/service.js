import { serverConstants } from './../constants'
import axios from 'axios'
export const userService = {
   loginUser
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