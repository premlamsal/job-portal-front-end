import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store";

import VueMeta from "vue-meta";
Vue.use(VueMeta);
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting

    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    // route level code-splitting

    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/Contact.vue"),
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting

    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
     
  },
  {
    path: "/register",
    name: "Register",
    // route level code-splitting

    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Register.vue"),
  },
  {
    path: "/page/:slug",
    name: "Page",
    // route level code-splitting

    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Page.vue"),
  },
  {
    path: "/employer-profile/:id",
    name: "EmployerPublicProfile",
    // route level code-splitting

    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "employerprofile" */ "../views/EmployerProfile.vue"
      ),
  },
  {
    path: "/jobseeker-profile/:id",
    name: "JobSeekerPublicProfile",
    // route level code-splitting

    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "employerprofile" */ "../views/JobseekerProfile.vue"
      ),
  },
  {
    path: "/verify-user/:user_type/:token",
    name: "verifyUser",
    // route level code-splitting

    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "VerifyUser" */ "../views/VerifyUser.vue"),
  },
  {
    path: "/forget-password",
    name: "forgetPassword",
    // route level code-splitting

    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "ForgetPassword" */ "../views/ForgetPassword.vue"
      ),
  },
  {
    path: "/new-password/:token",
    name: "newPassword",
    // route level code-splitting

    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "NewPassword" */ "../views/NewPassword.vue"),
  },
  {
    path: "/jobseeker/dashboard",
    name: "JobSeekerDashboard",
    // route level code-splitting

    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "jobseeker/Dashboard" */ "../views/jobseeker/Dashboard.vue"
      ),
    meta: {
      requiresAuth: true,
    },

    beforeEnter(to, from, next) {
      if (store.getters["auth/getUser"].type === "0") {
        next();
        return;
      }
      next("/error");
      return;
    },
  },
  {
    path: "/employer/dashboard",
    name: "EmployerDashboard",
    // route level code-splitting

    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "employer/Dashboard" */ "../views/employer/Dashboard.vue"
      ),
    meta: {
      requiresAuth: true,
    },

    beforeEnter(to, from, next) {
      if (store.getters["auth/getUser"].type === "1") {
        next();
        return;
      }
      next("/error");
      return;
    },
  },
  {
    path: "/jobseeker/inbox",
    name: "JobSeekerInbox",
    // route level code-splitting

    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "jobseeker/Inbox" */ "../views/jobseeker/Inbox.vue"
      ),
    meta: {
      requiresAuth: true,
    },

    beforeEnter(to, from, next) {
      if (store.getters["auth/getUser"].type === "0") {
        next();
        return;
      }
      next("/error");
      return;
    },
  },
  {
    path: "/employer/inbox",
    name: "EmployerInbox",
    // route level code-splitting

    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "employer/Inbox" */ "../views/employer/Inbox.vue"
      ),
    meta: {
      requiresAuth: true,
    },

    beforeEnter(to, from, next) {
      if (store.getters["auth/getUser"].type === "1") {
        next();
        return;
      }
      next("/error");
      return;
    },
  },
  {
    path: "/jobseeker/resume",
    name: "JobSeekerResume",
    // route level code-splitting

    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "jobseeker/Inbox" */ "../views/jobseeker/Resume.vue"
      ),
    meta: {
      requiresAuth: true,
    },

    beforeEnter(to, from, next) {
      if (store.getters["auth/getUser"].type === "0") {
        next();
        return;
      }
      next("/error");
      return;
    },
  },
  {
    path: "/jobseeker/profile",
    name: "JobSeekerProfile",
    // route level code-splitting

    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "jobseeker/Profile" */ "../views/jobseeker/Profile.vue"
      ),
    meta: {
      requiresAuth: true,
    },

    beforeEnter(to, from, next) {
      if (store.getters["auth/getUser"].type === "0") {
        next();
        return;
      }
      next("/error");
      return;
    },
  },
  {
    path: "/jobseeker/applied-jobs",
    name: "JobSeekerAppliedJobs",
    // route level code-splitting

    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "jobseeker/AppliedJobs" */ "../views/jobseeker/AppliedJobs.vue"
      ),
    meta: {
      requiresAuth: true,
    },
    beforeEnter(to, from, next) {
      if (store.getters["auth/getUser"].type === "0") {
        next();
        return;
      }
      next("/error");
      return;
    },
  },
  {
    path: "/jobseeker/matched-jobs",
    name: "JobSeekerMatchedJobs",
    // route level code-splitting

    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "jobseeker/MatchedJobs" */ "../views/jobseeker/MatchedJobs.vue"
      ),
    meta: {
      requiresAuth: true,
    },
    beforeEnter(to, from, next) {
      if (store.getters["auth/getUser"].type === "0") {
        next();
        return;
      }
      next("/error");
      return;
    },
  },
  {
    path: "/employer/profile",
    name: "employerProfile",
    // route level code-splitting

    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "employer/profile" */ "../views/employer/Profile.vue"
      ),
    meta: {
      requiresAuth: true,
    },
    beforeEnter(to, from, next) {
      if (store.getters["auth/getUser"].type !== "1") {
        next("/error");
        return;
      }
      next();
      return;
    },
  },
  {
    path: "/employer/jobs",
    name: "employerJobs",
    // route level code-splitting

    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "employer/jobs.vue" */ "../views/employer/Jobs.vue"
      ),
    meta: {
      requiresAuth: true,
    },
    beforeEnter(to, from, next) {
      if (store.getters["auth/getUser"].type !== "1") {
        next("/error");
        return;
      }
      next();
      return;
    },
  },
  {
    path: "/employer/applications",
    name: "employerApplications",
    // route level code-splitting

    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "employer/applications.vue" */ "../views/employer/Applications.vue"
      ),
    meta: {
      requiresAuth: true,
    },
    beforeEnter(to, from, next) {
      if (store.getters["auth/getUser"].type !== "1") {
        next("/error");
        return;
      }
      next();
      return;
    },
  },
  {
    path: "/job-listing",
    name: "JobListing",
    // route level code-splitting

    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "joblisting" */ "../views/JobListing.vue"),
  },
  {
    path: "/job-detail/:id",
    name: "JobDetail",
    // route level code-splitting

    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "jobdetail" */ "../views/JobDetail.vue"),
  },
  {
    path: "/error/",
    name: "Error",
    // route level code-splitting

    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "jobdetail" */ "../views/Error.vue"),
  },
  {
    path: "/*/",
    name: "*",
    // route level code-splitting

    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "jobdetail" */ "../views/Error.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes,
});

router.beforeEach((to, from, next) => {
  store
    .dispatch("appinfo/getAppInfo")
    .then(() => {
      //is user authenticated or not i.e logged on
      if (store.getters["auth/getUser"].name) {
        // console.log("hello user");

        //fetching recent user information from db and set it to db
        store
          .dispatch("auth/getUserFromDB", store.getters["auth/getUser"].type)
          .then(() => {
            // console.log("updated vuex");

            if (to.name == "Login" || to.name === "Register") {
              if (store.getters["auth/getUser"].type === "0") {
                next("/jobseeker/dashboard");
                return;
              } else if (store.getters["auth/getUser"].type === "1") {
                next("/employer/dashboard");
                return;
              } else {
                next();
                return;
              }
            }
            next();
            return;
          })
          .catch(() => {
            next("/error");
            return;
            // console.log("error fetching db and failed updating vuex");
          });
      }
      //user is not logged in
      else {
        if (to.matched.some((record) => record.meta.requiresAuth)) {
          next("/login");
          return;
        } else {
          next();
          return;
        }
        // console.log("user is not logged in");
      }
    })
    .catch(() => {
      next("/error");
      return;
      // console.log("error getting appinfo");
    });
});

export default router;
