<template>
  <div>
    <div class="top-bar">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <span class="mr-2 icon-envelope-open-o"></span>
            <span class="d-md-inline-block">{{ appinfo.email }}</span>
            <span class="mx-md-2 d-inline-block"></span>
            <span class="mr-2 icon-phone"></span>
            <span class="d-md-inline-block">
              <span
                style="margin-right: 3px"
                v-for="phone in appinfo.phones"
                v-bind:key="phone.id"
              >
                {{ phone.number }}
              </span>
            </span>

            <div class="float-right">
              <a :href="appinfo.twitter" class=""
                ><span class="mr-2 icon-twitter"></span>
                <span class="d-md-inline-block">
                  <b-icon icon="twitter"></b-icon></span
              ></a>
              <span class="mx-md-2 d-inline-block"></span>
              <a :href="appinfo.facebook" class=""
                ><span class="mr-2 icon-facebook"></span>
                <span class="d-md-inline-block">
                  <b-icon icon="facebook"></b-icon></span
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-navbar toggleable="lg" type="dark" variant="danger">
      <div class="container">
        <router-link to="/" class="navbar-brand">JobMalai</router-link>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav right>
              <router-link to="/" class="nav-link">Home</router-link>
              <router-link to="/job-listing" class="nav-link">Jobs</router-link>
              <router-link to="/about" class="nav-link">About</router-link>
              <router-link to="/contact" class="nav-link">Contact</router-link>
              <!-- show when user is not loggedin -->
              <router-link to="/login" class="nav-link" v-if="!getUser.name"
                >Login</router-link
              >
            </b-navbar-nav>
            <!-- show when user is loggedIn-->
            <b-nav-item-dropdown right v-if="getUser.name">
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>{{ getUser.name }}</em>
              </template>
              <div class="jobseeker-nav-section" v-if="getUser.type === '0'">
                <router-link to="/jobseeker/profile" class="dropdown-item">
                  Profile
                </router-link>
                <router-link to="/jobseeker/applied-jobs" class="dropdown-item">
                  Applied Jobs
                </router-link>
                <router-link to="/jobseeker/matched-jobs" class="dropdown-item">
                  Matched Jobs
                </router-link>
              </div>
              <div class="employer-section" v-if="getUser.type === '1'">
                <router-link to="/employer/profile" class="dropdown-item">
                  Profile
                </router-link>
                <router-link to="/employer/applications" class="dropdown-item">
                  Applications
                </router-link>
                <router-link to="/employer/jobs" class="dropdown-item">
                  Jobs
                </router-link>
              </div>

              <b-dropdown-item @click="logout(getUser.type)"
                >Log Out</b-dropdown-item
              >
            </b-nav-item-dropdown>
            <!-- show when user is loggedIn-->
          </b-collapse>
        </b-navbar-nav>
      </div>
    </b-navbar>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "NavBar",
  props: {
    msg: String,
  },
  computed: {
    ...mapGetters({
      getUser: "auth/getUser",
      getToken: "auth/getToken",
    }),
  },
  methods: {
    logout(type) {
      const token = this.getToken; //accessing getter from action
      this.$http.defaults.headers.common = { Authorization: `Bearer ${token}` };
      this.$http.defaults.headers.common["Accept"] = "application/json";

      console.log();
      let logout_url;
      if (type === "0") {
        logout_url = "http://jobmalai.test/api/v1/jobseeker/logout";
      } else if (type === "1") {
        logout_url = "http://jobmalai.test/api/v1/employer/logout";
      }
      this.$http
        .post(logout_url)
        .then((response) => {
          console.log(response.data);
          this.$store.dispatch("auth/removeAuthToken");
          this.$toast("Logged Out ", {
            timeout: 2000,
          });
          this.$router.push("/login");
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navbar {
  background: #fb611e !important;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 20px;
}
.navbar ul li a {
}

@media screen and (max-width: 768px) {
  .navbar-brand {
    display: none;
  }
}
</style>
