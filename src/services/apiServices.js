import axios from 'axios'
import { error } from 'jquery'

// Base url
const BASE_URL = 'https://api.outer.media/api'

const LOGIN_PATH = () => '/login'
const ADD_ORGANIZATION_PATH = () => '/organisations'
const GET_ORGANIZATION_PATH = () => '/organisations'

// Organizations  dashboard
const ADD_NEW_USER_PATH = (id) => `/${id}/users`

export default {
  loginUser: function (loginData, successCallback, errorCallback) {
    axios
      .post(BASE_URL + LOGIN_PATH(), loginData)
      .then((response) => {
        successCallback(response.data)
      })
      .catch((response) => {
        errorCallback(response)
      })
  },
  addOrganization: function (data, callback) {
    axios
      .post(BASE_URL + ADD_ORGANIZATION_PATH(), data)
      .then((response) => {
        callback(response.data)
      })
      .catch((error) => {
        callback(error.data)
      })
  },
  getOrganizations: function (callback) {
    axios
      .get(BASE_URL + GET_ORGANIZATION_PATH())
      .then((response) => {
        callback(response.data)
        // console.log(response.data)
      })
      .catch((error) => {
        callback(error.data)
      })
  },

  // ! This is for ORGANIZATION DASHBOARD

  addNewUser: function(data) {
    const username = userData.allData.username;
    axios
      .post(BASE_URL + ADD_NEW_USER_PATH(`${username}`), data)
      .then((response) => {
        callback(response.data)
      })
      .catch((error) => {
        callback(error.data)
      })
  }
  
}
