import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import auth from "./modules/auth";
import appinfo from "./modules/appinfo";
// import cart from "./modules/cart";

Vue.use(Vuex);

/* eslint-disable no-new */
const store = new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {
    auth,
    appinfo,
    // cart,
  },
});

export default store;
