import { createStore } from 'vuex'
import VuexPersist from "vuex-persist";

const vuexLocal = new VuexPersist({
  key: "OMPlayer",
  storage: window.localStorage,
});


const store = createStore({
    state () {
      return {
        count: 0,
        user: null,
        authData: null,
        documents: null,
      }
    },
    mutations: {
      increment (state) {
        state.count++
      },
      setUser(state, value) {
        state.user = value;
      },
      setDocuments(state, value) {
        state.documents = value;
      },
      setAuth(state, value) {
        state.authData = value;
      },
    },
    actions: {
      setUser({ commit }, payload) {
        commit("setUser", payload);
      },
      setDocuments({ commit }, payload) {
        commit("setDocuments", payload);
      },
      setAuth({ commit }, payload) {
        commit("setAuth", payload);
      },
    },
    plugins: [vuexLocal.plugin],
  });

  export default store;