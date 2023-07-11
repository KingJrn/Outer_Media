<template>
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
import axios from "axios";


export default {
  name:"App",
  components: {

    },
  data() {
    return {
      userData: null,
      appLoaded: false,
    };
  },
  mounted(){
    var tokenValue = this.$store.state.authData;
    if (tokenValue && tokenValue != null) {
      axios.defaults.headers.common = {
        Authorization: "Bearer" + " " + tokenValue.token,
        Accept: "application/json",
      };
    } else {
      axios.defaults.headers.common = {};
    }
  }
};


</script>

<style>

  html {
  font-size: 16px;
}
</style>