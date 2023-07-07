import axios from 'axios'

// Base url
const BASE_URL = 'https://api.outer.media/api';

const LOGIN_PATH = () => "/login";
const ADD_ORGANIZATION_PATH = () => "notification/subscribe";

export default{
   loginUser: function (loginData, successCallback, errorCallback) {
    console.log('hello')
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
        .post(BASE_URL + ADD_SUBSCRIPTION_PATH(), data)
        .then((response) => {
          callback(response.data);
        })
        .catch((error) => {
          callback(error.data);
        });
    },
}
