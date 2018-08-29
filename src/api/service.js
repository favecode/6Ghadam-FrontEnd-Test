import { serverConstants } from './../constants'
import axios from 'axios'
export const userService = {
   loginUser,
   readLeagues,
   addLeague,
   updateLeague,
   deleteLeague
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
function addLeague(token, name,pictureURL) {
   let url =
      serverConstants.PROTOCOL +
      serverConstants.DATA +
      serverConstants.WEBSERVICE_URL +
      serverConstants.LEAGUES +
      serverConstants.ACCESS_TOKEN +
      token
   return axios.post(url,
      {
         "pictureURL": pictureURL,
         "name": name,
      })
      .then(response => { return response })
      .catch(err => console.log(err));
}
function updateLeague(token, name, pictureURL, id) {
   let url =
      serverConstants.PROTOCOL +
      serverConstants.DATA +
      serverConstants.WEBSERVICE_URL +
      serverConstants.LEAGUES +
      '/' + id +
      serverConstants.ACCESS_TOKEN +
      token
   return axios.put(url,
      {
         "pictureURL": pictureURL,
         "name": name,
         "id": id,
      })
      .then(response => { return response })
      .catch(err => console.log(err));
}
function deleteLeague(token, id) {
   let url =
      serverConstants.PROTOCOL +
      serverConstants.DATA +
      serverConstants.WEBSERVICE_URL +
      serverConstants.LEAGUES +
      '/' + id +
      serverConstants.ACCESS_TOKEN +
      token
   return axios.delete(url,
      {})
      .then(response => { return response })
      .catch(err => console.log(err));
}