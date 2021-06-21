import Axios from "axios";
// axios allow cross origin
Axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
Axios.defaults.baseURL = process.env.VUE_APP_API_URL;

const state = {
  token: localStorage.getItem("token") || "",
  user: {},
  isAuthenticated: false,
};
const getters = {
  getToken(state) {
    return state.token;
  },
  getType(state) {
    return state.user.type;
  },
  getUser(state) {
    return state.user;
  },
  getIsAuthenticated(state) {
    return state.isAuthenticated;
  },
};
const mutations = {
  setToken(state, payload) {
    state.token = payload;
  },
  // setType(state, payload) {
  //   state.user.type = payload;
  // },
  destroyToken(state) {
    state.token = "";
  },
  destroyUser(state) {
    state.user = {};
  },
  setUser(state, payload) {
    state.user = payload;
  },
  setIsAuthenticated(state, payload) {
    state.isAuthenticated = payload;
  },
};

const actions = {
  getUserFromDB(context, user_type) {
    let url;
    if (user_type === "0") {
      url = "jobseeker/info";
    } else if (user_type === "1") {
      url = "employer/info";
    }
    else{
      console.log('oh')
    }
    if (url) {
      return new Promise((resolve, reject) => {
        Axios.defaults.headers.common = {
          Authorization: `Bearer ${context.getters.getToken}`,
          Accept: "application/json"
        };
        Axios.post(url)
          .then((response) => {
            let user = response.data.data;
            user.type = user_type;
            context.commit("setUser", user);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      }); //end of promise
    }
  },

  setAuthToken(context, payload) {
    return new Promise((resolve) => {
      context.commit("setToken", payload.token);
      context.commit("setUser", payload.user);
      // context.commit("setType", payload.user.type);
      context.commit("setIsAuthenticated", true);
      localStorage.setItem("token", payload.token);
      resolve("okay");
    });
  },
  removeAuthToken(context) {
    return new Promise((resolve) => {
      context.commit("destroyToken");
      context.commit("destroyUser");
      context.commit("setIsAuthenticated", false);
      localStorage.removeItem("token");
      delete Axios.defaults.headers.common["Authorization"];
      resolve("okay");
      //now hit api for token revoke so no other person can access thorough that token.
    });
  },

  logout(context) {
    return new Promise((resolve) => {
      context.commit("destroyToken");
      localStorage.removeItem("token");
      delete Axios.defaults.headers.common["Authorization"];
      resolve();
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
