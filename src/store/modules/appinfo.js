import Axios from "axios";
// axios allow cross origin
Axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
Axios.defaults.baseURL = process.env.VUE_APP_API_URL;

const state = {
  app_info: {},
};
const getters = {
  getAppInfo(state) {
    return state.appinfo;
  },
};
const mutations = {
  setAppInfo(state, payload) {
    state.appinfo = payload;
  },
};

const actions = {
  setAppInfo(context, payload) {
    return new Promise((resolve) => {
      context.commit("setAppInfo", payload.appinfo);
      resolve("okay");
    });
  },
  getAppInfo(context) {
    return new Promise((resolve, reject) => {
      Axios.defaults.headers.common["Accept"] = "application/json";
      Axios.get('appinfo')
        .then((response) => {
          const appinfo = response.data.data[0];
          context.commit("setAppInfo", appinfo);
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    }); //end of promise
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
