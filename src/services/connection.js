BASE_URL: "https://om.test/api/";
import axios from "axios";


const LOGIN_USER_PATH = () => "login";

export default {
    loginUser: function (loginData, successCallback, errorCallback) {
        axios
          .post(config.BASE_URL + LOGIN_USER_PATH(), loginData)
          .then((response) => {
            successCallback(response.data);
          })
          .catch((response) => {
            errorCallback(response);
          });
      },
}