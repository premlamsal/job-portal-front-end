<template>
  <div class="forgetpassword">
    <NavBar />
    <CommonHeroSection
      title="Forget Password"
      description="Please fill the form and procced"
    />
    <div class="container">
      <div class="row">
        <div class="col-md-5 mx-auto">
          <div class="text-center mt-5 mb-5" v-if="showLoading">
            <b-spinner
              variant="primary"
              style="width: 3rem; height: 3rem"
              label="Text Centered"
              type="grow"
            ></b-spinner>
          </div>
          <h5 v-if="successmessage" class="mt-4 mb-4">{{ successmessage }}</h5>
          <div class="reset-form" v-if="showResetForm">
            <h2 class="theme-color mt-5">Reset Password</h2>
            <div class="form-group">
              <label>Email</label>
              <input type="email" v-model="user.email" class="form-control" />
            </div>
            <div class="form-group">
              <label v-if="errormessage" style="color: orange">{{
                errormessage
              }}</label>
            </div>
            <div class="form-group">
              <button
                class="btn btn-primary"
                @click="sendResetLink()"
                v-if="!showLoading"
              >
                Send Reset Link
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
  name: "ForgetPassowrd",
  title: "ForgetPassowrd | JobMalai",
  components: {
    NavBar,
    CommonHeroSection,
    FooterSection,
  },
  data() {
    return {
      user: {},
      errormessage: "",
      successmessage: "",
      showResetForm: true,
      showLoading: false,
    };
  },
  methods: {
    clearMsg() {
      this.successmessage = "";
      this.errormessage = "";
    },
    sendResetLink() {
      this.showLoading = true;
      this.clearMsg();
      this.showResetForm = false;

      let formData = new FormData();
      formData.append("email", this.user.email);
      this.$http
        .post("reset-password", formData)
        .then((response) => {
          this.successmessage = response.data.message;
          this.showResetForm = false;
          this.showLoading = false;
        })
        .catch((error) => {
          this.showLoading = false;
          this.showResetForm = true;
          this.errormessage = error.response.data.message;
          if (error.response.data.errors) {
            this.errormessage = error.response.data.errors.email[0];
          }
        });
    },
  },
};
</script>
<style scoped></style>
