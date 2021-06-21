import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//boostrap start
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
//custom css
import "@/assets/custom.scss";
//bootstrap end

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

//axios
import Axios from "axios";
//axios config
Axios.defaults.headers.common = {
  Authorization: `Bearer ${localStorage.getItem("token")}`,
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
  Accept: "application/json",
};

Axios.defaults.baseURL = process.env.VUE_APP_API_URL;

// const instance = Axios.create({
//   baseURL: "https://jobmalai.test/api/v1/",
// });
Vue.prototype.$http = Axios;
//axios config
//end of axios

//vue toastification
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

Vue.use(Toast, {
  transition: "Vue-Toastification__bounce",
  maxToasts: 20,
  newestOnTop: true,
  position: "top-right",
  timeout: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: "button",
  icon: true,
  rtl: false,
});

//end of toastification

//sweet alert

// for sweet alert
import VueSweetalert2 from "vue-sweetalert2";

// If you don't need the styles, do not connect
import "sweetalert2/dist/sweetalert2.min.css";

//register SweetAlert globally
Vue.use(VueSweetalert2);

//end of sweeet alert

import titleMixin from "@/mixins/titleMixin";
Vue.mixin(titleMixin);

///moment
import moment from "moment";

Vue.filter("formatDateStart", function (value) {
  if (value) {
    return moment(String(value)).startOf("day").fromNow();
  }
});

Vue.filter("formatDateEnd", function (value) {
  if (value) {
    return moment(String(value)).endOf("day").fromNow();
  }
});

//moment

// import VueInsProgressBar from "vue-ins-progress-bar";

// Vue.config.productionTip = false;
// const options = {
//   position: "fixed",
//   show: true,
//   height: "3px",
// };

// Vue.use(VueInsProgressBar, options);

import VueProgressBar from "vue-progressbar";

Vue.use(VueProgressBar, {
  color: "#00FFFF",
  failedColor: "red",
  height: "2px",
});

import VueRellax from "vue-rellax";

Vue.use(VueRellax);

new Vue({
  router,
  store,
 
  render: (h) => h(App),
}).$mount("#app");
