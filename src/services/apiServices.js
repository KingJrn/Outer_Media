import axios from 'axios'
import { error } from 'jquery'

// Base url
const BASE_URL = 'https://api.outer.media/api'

const LOGIN_PATH = () => "/login";
const ADD_ORGANIZATION_PATH = () => "/organisations";
const GET_ORGANIZATION_PATH = () => "/organisations";
const ADD_PRESET_PATH = () => "/presets";
const GET_PRESET_PATH = () => "/presets";
const ADD_LIBRARY_PATH = () => "/libraries";
const GET_LIBRARIES_PATH = () => "/libraries";
const GET_IMAGES_PATH = () => "/images?page=1";
const ADD_IMAGE_PATH = () => "/images";
const SITE_SETTINGS_PATH = () => "/settings"

// Organizations  dashboard
const ADD_NEW_USER_PATH = (id) => `/${id}/users`

export default{
   loginUser: function (loginData, successCallback, errorCallback) {
      axios
        .post(BASE_URL + LOGIN_PATH(), loginData)
        .then((response) => {
          successCallback(response.data);
        })
        .catch((response) => {
          errorCallback(response);
        });
    },
    addOrganization: function (data, callback) {
      axios
        .post(BASE_URL + ADD_ORGANIZATION_PATH(), data)
        .then((response) => {
          callback(response.data);
        })
        .catch((error) => {
          callback(error.data);
        });
    },
    getOrganizations: function (callback) {
      axios
        .get(BASE_URL + GET_ORGANIZATION_PATH())
        .then((response) => {
          callback(response.data);
          console.log(response.data)
        })
        .catch((error) => {
          callback(error.data);
        });
    },
    addLibrary: function (data, callback) {
      axios
        .post(BASE_URL + ADD_LIBRARY_PATH(), data)
        .then((response) => {
          callback(response.data);
        })
        .catch((error) => {
          callback(error.data);
        });
    },
    getLibraries: function (callback) {
      axios
        .get(BASE_URL + GET_LIBRARIES_PATH())
        .then((response) => {
          callback(response.data);
          console.log(response.data)
        })
        .catch((error) => {
          callback(error.data);
        });
    },
    addPreset: function (data, callback) {
      axios
        .post(BASE_URL + ADD_PRESET_PATH(), data)
        .then((response) => {
          callback(response.data);
        })
        .catch((error) => {
          callback(error.data);
        });
    },
    getPreset: function (callback) {
      axios
        .get(BASE_URL + GET_PRESET_PATH())
        .then((response) => {
          callback(response.data);
          console.log(response.data)
        })
        .catch((error) => {
          callback(error.data);
        });
    },
    addImage: function (data, callback) {
      axios
        .post(BASE_URL + ADD_IMAGE_PATH(), data)
        .then((response) => {
          callback(response.data);
        })
        .catch((error) => {
          callback(error.data);
        });
    },
    getImages: function (callback) {
      axios
        .get(BASE_URL + GET_IMAGES_PATH())
        .then((response) => {
          console.log(response)
          callback(response.data);
          console.log(response.data)
        })
        .catch((error) => {
          callback(error.data);
        });
    },
    siteSettings: function (data, callback) {
      axios
        .put(BASE_URL + SITE_SETTINGS_PATH(), data)
        .then((response) => {
          callback(response.data);
        })
        .catch((error) => {
          callback(error.data);
        });
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
