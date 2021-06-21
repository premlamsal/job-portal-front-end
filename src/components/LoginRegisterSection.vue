<template>
  <div>
    <div class="login-register-section mt-5 mb-5">
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
            <div class="form-box" v-if="!showLoading">
              <h2 class="theme-color">{{ formType }}</h2>
              <div class="form-group" v-if="formType === 'Register'">
                <label>Name </label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter your name"
                  v-model="user.name"
                />
                <span class="emailMessage text-danger">{{
                  msg.nameMessage
                }}</span>
              </div>
              <div class="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  class="form-control"
                  placeholder="Enter email"
                  v-model="user.email"
                />
                <span class="emailMessage text-danger">{{
                  msg.emailMessage
                }}</span>
              </div>
              <div class="form-group">
                <label>Password</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  v-model="user.password"
                />
                <span class="passwordMessage text-danger">{{
                  msg.passwordMessage
                }}</span>
              </div>
              <div class="form-group" v-if="formType === 'Register'">
                <label>Confirm Password</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Comfirm Password"
                  v-model="user.password_confirmation"
                />
                <span class="passwordConfirmationMessage text-danger">{{
                  msg.passwordConfirmationMessage
                }}</span>
              </div>
              <div class="form-group">
                <b-form-group
                  :label="formType + ' as'"
                  v-slot="{ ariaDescribedby }"
                >
                  <b-form-radio
                    v-model="user.type"
                    :aria-describedby="ariaDescribedby"
                    value="0"
                    >JobSeeker</b-form-radio
                  >
                  <b-form-radio
                    v-model="user.type"
                    :aria-describedby="ariaDescribedby"
                    value="1"
                    >Employer</b-form-radio
                  >
                </b-form-group>
              </div>
              <div class="form-group" v-if="msg.commonError">
                <label class="commonError text-danger">{{
                  msg.commonError
                }}</label>
              </div>
              <div class="form-group" v-if="formType === 'Login'">
                <router-link to="/forget-password" class="custom-link">
                  Forget Password ?
                </router-link>
              </div>
              <button class="btn btn-primary" @click="btnClicked">
                {{ formType }}
              </button>
              <button
                class="btn btn-outline-primary"
                @click="btnGoToLogin"
                v-if="formType === 'Register'"
                style="margin-left: 8px"
              >
                I have account
              </button>
              <button
                class="btn btn-outline-primary"
                @click="btnGoToRegister"
                v-if="formType === 'Login'"
                style="margin-left: 8px"
              >
                I don't have account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "LoginRegisterSection",
  props: {
    formType: String,
  },
  component: {},
  computed: {
    ...mapGetters({
      getUser: "auth/getUser",
    }),
  },
  data() {
    return {
      user: {
        name: "",
        email: "",
        type: "0",
        password: "",
        password_confirmation: "",
      },
      canSubmit: "",
      showLoading: false,
      msg: {
        nameMessage: "",
        emailMessage: "",
        passwordMessage: "",
        passwordConfirmationMessage: "",
        commonError: "",
      },
      errors: {},
      loggedInUser: {},
      loggedInUserToken: "",
      registeredUser: {},
    };
  },
  methods: {
    btnGoToLogin() {
      this.$router.push("login");
    },
    btnGoToRegister() {
      this.$router.push("register");
    },
    btnClicked() {
      this.validate();
      this.submitForm();
    },
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    resetFormInputMessage() {
      this.msg.passwordConfirmationMessage = "";
      this.msg.passwordMessage = "";
      this.msg.emailMessage = "";
      this.msg.nameMessage = "";
      this.msg.commonError = "";
    },
    resetFormInput() {
      this.user.name = "";
      this.user.email = "";
      this.user.password = "";
      this.user.confirmation = "";
    },
    submitForm() {
      this.showLoading = true;
      if (this.canSubmit == 1) {
        let formData = new FormData();
        formData.append("_METHOD", "POST");
        formData.append("email", this.user.email);
        formData.append("password", this.user.password);
        if (this.formType === "Login") {
          let login_url;
          //if login as jobseeker
          if (this.user.type === "0") {
            login_url = "jobseeker/login";
          }
          //if login as employer
          else if (this.user.type === "1") {
            login_url = "employer/login";
          }

          //hit login api
          this.$http
            .post(login_url, formData)
            .then((response) => {
              //can use vuex for auth login
              this.loggedInUser = response.data.data.user;
              this.loggedInUser.type = this.user.type;
              this.loggedInUserToken = response.data.data.token;

              let payload;
              payload = {
                user: this.loggedInUser,
                token: this.loggedInUserToken,
              };

              this.$store.dispatch("auth/setAuthToken", payload).then(() => {
                // console.log(this.loggedInUserToken);

                this.$toast.success("Welcome");

                const token = this.loggedInUserToken; //accessing getter from action
                this.$http.defaults.headers.common = {
                  Authorization: `Bearer ${token}`,
                };
                this.$http.defaults.headers.common["Accept"] =
                  "application/json";

                this.resetFormInput();
                this.resetFormInputMessage();

                if (this.loggedInUser.type === "0") {
                  this.$router.push("/jobseeker/dashboard");
                } else if (this.loggedInUser.type === "1") {
                  this.$router.push("/employer/dashboard");
                }
              });

              //after login code
            })
            .catch((error) => {
              this.showLoading = false;
              // console.log(error.response.data.message);
              this.msg.commonError = error.response.data.message;
              if (error.response.data.error) {
                this.errors = error.response.data.errors;
                if (this.errors["email"][0]) {
                  this.msg.emailMessage = this.errors["email"][0];
                }
                if (this.errors["password"][0]) {
                  this.msg.passwordMessage = this.errors["password"][0];
                }
                // console.log(error.response.data.errors['email'].[0])
              }
            });
        } else if (this.formType === "Register") {
          formData.append(
            "password_confirmation",
            this.user.password_confirmation
          );
          formData.append("name", this.user.name);
          //hit register api

          //if register as jobseeker
          if (this.user.type === "0") {
            //hit register api
            this.$http
              .post("jobseeker/register", formData)
              .then((response) => {
                this.showLoading = false;

                //can use vuex for auth login
                this.registeredUser = response.data.user;
                // console.log(this.registeredUser);
                // Or with options
                this.$toast(response.data.message, {
                  timeout: 2000,
                });
                this.btnGoToLogin();
                //after register code
                this.resetFormInput();
                this.resetFormInputMessage();
              })
              .catch((error) => {
                this.showLoading = false;

                // console.log(error.response.data.message);
                this.msg.commonError = error.response.data.message;
                this.errors = error.response.data.errors;
                if (this.errors["email"][0]) {
                  this.msg.emailMessage = this.errors["email"][0];
                }
                if (this.errors["password"][0]) {
                  this.msg.passwordMessage = this.errors["password"][0];
                }
                // console.log(error.response.data.errors['email'].[0])
              });
          }
          //if register as employer
          else if (this.user.type === "1") {
            //hit register api
            this.$http
              .post("employer/register", formData)
              .then((response) => {
                this.showLoading = false;

                //can use vuex for auth login
                this.registeredUser = response.data.user;
                // console.log(this.registeredUser);
                this.$toast(response.data.message, {
                  timeout: 2000,
                });
                this.btnGoToLogin();
                //after register code

                this.resetFormInput();
                this.resetFormInputMessage();
              })
              .catch((error) => {
                this.showLoading = false;

                // console.log(error.response.data.message);
                this.msg.commonError = error.response.data.message;
                this.errors = error.response.data.errors;
                if (this.errors["email"][0]) {
                  this.msg.emailMessage = this.errors["email"][0];
                }
                if (this.errors["password"][0]) {
                  this.msg.passwordMessage = this.errors["password"][0];
                }
                // console.log(error.response.data.errors['email'].[0])
              });
          }
        } else {
          console.log("Some unknown error FORMTYPE");
          this.showLoading = false;
        }
      } else {
        console.log("Some error occured");
        this.showLoading = false;
      }
    },
    validate() {
      this.canSubmit = 1;
      this.resetFormInputMessage();
      //this block only requires for registration
      if (this.formType === "Register") {
        // if (this.user.password.trim().localeCompare(this.user.password_confirmation.trim()))
        if (
          this.user.password.trim() !== this.user.password_confirmation.trim()
        ) {
          this.msg.passwordConfirmationMessage = "Password don't match";
          this.canSubmit = 0;
        }
        if (this.user.password_confirmation.trim() === "") {
          this.msg.passwordConfirmationMessage =
            "Password confirmation can't be blank or empty";
          this.canSubmit = 0;
        }
        if (this.user.name.trim() === "") {
          this.msg.nameMessage = "Name cant't be blank";
          this.canSubmit = 0;
        }
      } //the above block only requires for registration

      if (this.user.password.trim() === "") {
        this.msg.passwordMessage = "Password cant't be blank";
        this.canSubmit = 0;
      }

      if (this.user.email.trim() === "") {
        this.msg.emailMessage = "Email can't be blank or empty";
        this.canSubmit = 0;
      } else if (!this.validEmail(this.user.email)) {
        this.msg.emailMessage = "Valid email required.";
        this.canSubmit = 0;
      }

      console.log(this.canSubmit);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
