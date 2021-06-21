<template>
  <div class="verifyuser">
    <NavBar />
    <div class="CommonHeroSection">
      <div class="container">
        <h3>{{ title }}</h3>
        <h4>{{ description }}</h4>
        <h4>
          <router-link to="/login" class="btn btn-primary" v-if="showLoginBtn"
            >Login</router-link
          >
        </h4>
      </div>
    </div>
    <FooterSection />
  </div>
</template>
<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import FooterSection from "@/components/FooterSection.vue";
export default {
  name: "VerifyUser",
  title: "Verify user | JobMalai",
  components: {
    NavBar,
    FooterSection,
  },
  data() {
    return {
      user: {},
      title: "",
      description: "",
      showLoginBtn: false,
    };
  },
  mounted() {},
  created() {
    this.getUrlParams();
    this.callVerificationURL();
  },
  methods: {
    getUrlParams() {
      this.user.user_type = this.$route.params.user_type;
      this.user.token = this.$route.params.token;
    },
    callVerificationURL() {
      this.$http
        .get("verify-user/" + this.user.user_type + "/" + this.user.token)
        .then((response) => {
          if (response.status === 200) {
            this.title = response.data.title;
            this.description = response.data.description;
            this.showLoginBtn = true;
            // this.$router.push("login");
          }
        })
        .catch((error) => {
          this.title = error.response.data.title;
          this.description = error.response.data.description;
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.CommonHeroSection {
  background: #eee;
  padding-top: 8em;
  padding-bottom: 8em;
}
.CommonHeroSection h3 {
  text-align: center;
  font-size: 5em;
}
.CommonHeroSection h4 {
  text-align: center;
}
</style>
