<template>
  <div>
    <div class="box-nav-hero">
      <b-navbar toggleable="lg" type="dark" :sticky="true">
        <div class="container">
          <b-navbar-brand class="navbar-brand">
            <router-link to="/">
              <img src="/assets/white_brand.png" class="brand-img" />
            </router-link>
          </b-navbar-brand>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav right>
                <router-link to="/job-listing" class="nav-link">
                  <b-icon icon="briefcase"></b-icon>

                  Jobs
                </router-link>
                <router-link to="/about" class="nav-link">
                  <b-icon icon="justify"></b-icon>

                  About</router-link
                >
                <router-link to="/contact" class="nav-link">
                  <b-icon icon="phone"></b-icon>

                  Contact</router-link
                >
                <!-- show when user is not loggedin -->
                <router-link to="/login" class="nav-link" v-if="!getUser.name">
                  <b-icon icon="box-arrow-in-left"></b-icon>

                  Login</router-link
                >
              </b-navbar-nav>
              <!-- show when user is loggedIn-->
              <b-nav-item-dropdown right v-if="getUser.name">
                <!-- Using 'button-content' slot -->
                <template #button-content>
                  <em>
                    <img
                      :src="getUser.profile_image"
                      class="user-avtar"
                      v-if="getUser.profile_image"
                    />
                    <img src="/assets/avtar.png" class="user-avtar" v-else />
                  </em>
                </template>
                <div class="jobseeker-nav-section" v-if="getUser.type === '0'">
                  <router-link to="/jobseeker/dashboard" class="dropdown-item">
                    <b-icon icon="display"></b-icon>
                    Dashboard
                  </router-link>
                </div>
                <div class="employer-section" v-if="getUser.type === '1'">
                  <router-link to="/employer/dashboard" class="dropdown-item">
                    <b-icon icon="display"></b-icon>
                    Dashboard
                  </router-link>
                </div>

                <b-dropdown-item @click="logout(getUser.type)">
                  <b-icon icon="box-arrow-right"></b-icon>

                  Log Out</b-dropdown-item
                >
              </b-nav-item-dropdown>
              <!-- show when user is loggedIn-->
            </b-collapse>
          </b-navbar-nav>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        </div>
      </b-navbar>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "NavBar",
  data() {
    return {
      search_key: "",
    };
  },
  computed: {
    ...mapGetters({
      getUser: "auth/getUser",
      getToken: "auth/getToken",
      appinfo: "appinfo/getAppInfo",
    }),
  },
  methods: {
    makeSearch() {
      const search_key = this.search_key;
      if (search_key != "") {
        this.$router
          .push({
            path: "/job-listing",
            query: { search: search_key },
          })
          .catch(() => {});
      }
    },
    logout(type) {
      const token = this.getToken; //accessing getter from action
      this.$http.defaults.headers.common = { Authorization: `Bearer ${token}` };
      this.$http.defaults.headers.common["Accept"] = "application/json";

      console.log();
      let logout_url;
      if (type === "0") {
        logout_url = "jobseeker/logout";
      } else if (type === "1") {
        logout_url = "employer/logout";
      }
      this.$http
        .post(logout_url)
        .then(() => {
          this.$store.dispatch("auth/removeAuthToken");
          this.$toast("Logged Out ", {
            timeout: 2000,
          });
          this.$router.push("/login");
        })
        .catch(() => {
          // console.log(error.response.data);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navbar {
  // background: #fb611e !important;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 20px;
  transition: 0.5s;
}
.navbar ul li a {
}
.box-nav-hero {
  background: url("/assets/backhero.jpg");
  background-size: cover;
}

@media screen and (max-width: 768px) {
  // .navbar-brand {
  //   display: none;
  // }
}

.top-bar {
  padding: 0.5rem 0;
  background: #eee;
}
.top-bar a {
  color: #666666;
}
a {
  -webkit-transition: 0.3s all ease;
  -o-transition: 0.3s all ease;
  transition: 0.3s all ease;
}
a,
a:hover {
  text-decoration: none !important;
}
.border-btn4:hover {
  background: #fb611e;
  color: white;
}

.border-btn4 {
  border: 1px solid #ffffff6b;
  color: #eee;
  font: "Muli", sans-serif;
  background: none;
  -moz-user-select: none;
  padding: 19px 69px;
  margin: 0px;
  text-transform: uppercase;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  margin-bottom: 0;
  border-radius: 5px;
  position: relative;
  transition: color 0.4s linear;
  position: relative;
  overflow: hidden;
  margin: 0;
}
.hero-search-box .b-icon {
  color: red;
  position: absolute;
}
.main-hero-section {
  padding-top: 17em;
  padding-bottom: 17em;
  // background: url("/assets/intro1.jpg");
  // background: #eee;
  text-align: center;
  background-size: cover;
  color: white;
}

.main-hero-section h3 {
  text-align: center;
  font-size: 5em;
}
.main-hero-section h4 {
  text-align: center;
}
@media screen and (max-width: 768px) {
  .main-hero-section {
    text-align: center;
  }
  .main-hero-section h3 {
    text-align: center;
    font-size: 40px;
  }
  .main-hero-section h4 {
    text-align: center;
  }
}
.border-btn-hero {
}

input.search-input:focus {
  background: #ffffffa6;
}
input.search-input {
  height: 50px;
  font-size: 24px;
  background: #ffffff85;
  border: 1px solid #bbb5b5ba;
  transition: ease-in-out, width 0.35s ease-in-out;
  box-shadow: 0px 1px 2px -1px #fb611e;
  color: black;
  padding-left: 8px;
}
img.brand-img {
  height: 50px;
  width: 50px;
  border-radius: 50%;
}
.search-bar {
  position: relative;
  margin: 0 auto;
  width: 60%;
}
.search-bar button {
  border: 0px;
  position: absolute;
  right: 2px;
  background: unset;
  font-size: 30px;
  color: #773ab7;
  top: 0px;
}

.navbar-brand a {
  color: white;
}
.navbar-brand a:hover {
  color: yellow !important;
}
img.user-avtar {
  width: 45px;
  height: 45px;
  border: 1px solid #fff;
  padding: 2px;

  border-radius: 50%;
}

/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  input.search-input {
    width: 100%;
  }
  .search-bar {
    width: 80%;
  }
}
</style>
