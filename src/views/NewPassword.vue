<template>
  <div class="newpassword">
    <NavBar />
    <CommonHeroSection
      title="New Password"
      description="Please fill the form and procced"
    />
    <div class="container">
      <div class="row">
        <div class="col-md-5 mx-auto">
          <h5 v-if="successmessage" class="mt-4 mb-4">{{ successmessage }}</h5>
          <div class="new-password-form" v-if="showNewPasswordForm">
            <h2 class="theme-color mt-5">New Password</h2>
            <div class="form-group">
              <label>Email</label>
              <input type="email" v-model="user.email" class="form-control" />
            </div>
            <div class="form-group">
              <label>New Password</label>
              <input
                type="password"
                v-model="user.password"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label>Confirm New Password</label>
              <input
                type="password"
                v-model="user.password_confirmation"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label v-if="errormessage" style="color: orange">{{
                errormessage
              }}</label>
            </div>
            <div class="form-group">
              <button class="btn btn-primary" @click="submitNewPasswordForm()">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterSection />
  </div>
</template>
<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import CommonHeroSection from "@/components/CommonHeroSection.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  name: "NewPassword",
  title: "New Password | JobMalai",
  components: {
    NavBar,
    CommonHeroSection,
    FooterSection,
  },

  data() {
    return {
      user: {},
      showNewPasswordForm: false,
      token: "",
      errormessage: "",
      successmessage: "",
    };
  },
  created() {
    this.getUrlParams();
    this.checkToken();
  },
  methods: {
    getUrlParams() {
      this.token = this.$route.params.token;
    },
    checkToken() {
      this.$http
        .get("check-token/" + this.token)
        .then(() => {
          this.showNewPasswordForm = true;
        })
        .catch(() => {
          this.$router.push("/error");
        });
      //hit api to check token otherwise header to error page
    },
    submitNewPasswordForm() {
      let formData = new FormData();
      formData.append("email", this.user.email);
      formData.append("token", this.token);
      formData.append("password", this.user.password);
      formData.append("password_confirmation", this.user.password_confirmation);

      this.$http
        .post("new-password", formData)
        .then((response) => {
          this.successmessage = response.data.message;
          this.showResetForm = false;
        })
        .catch((error) => {
          //do check for validation errors
          this.showResetForm = true;
          this.errormessage = error.response.data.message;
        });
    },
  },
};
</script>
<style scoped></style>
