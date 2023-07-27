import apiServices from "@/services/apiServices.js";
export default {
  components: {
  },
  data() {
    return {
      userData: this.$store.state.authData,
      // appConfig: config,
      documents: this.$store.state.documents,
    };
  },

 
  methods: {
    addScript(src) {
      //Helper to put script in page
      var script = document.createElement("script");
      script.src = src;
      document.body.appendChild(script);
    },
    generateRandom(length) {
      var result = "";
      var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    },
    logOut() {
      if (this.$store.state.authData.token) {
        this.$store.dispatch("setAuth", null);
        this.$router.push("/");
      }
    },
  },
};
