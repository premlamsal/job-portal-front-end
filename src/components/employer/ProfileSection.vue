<template>
  <div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-12">
          <DashNavHeader />
        </div>
      </div>
      <div class="row">
        <div class="col-md-3"><DashNav /></div>
        <div class="col-md-9 mb-5">
          <div class="employer-profile-section">
            <div class="text-center" v-if="showLoading">
              <b-spinner
                variant="primary"
                style="width: 3rem; height: 3rem"
                label="Text Centered"
                type="grow"
              ></b-spinner>
            </div>
            <div class="col-md-12">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Your name please"
                      v-model="user.name"
                    />
                  </div>

                  <div class="form-group">
                    <label>Address</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Your address please"
                      v-model="user.address"
                    />
                  </div>
                  <div class="form-group">
                    <label>Slogan</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Your slogan please"
                      v-model="user.slogan"
                    />
                  </div>

                  <div class="form-group">
                    <label>Description </label>
                    <textarea
                      class="form-control"
                      v-model="user.description"
                    ></textarea>
                  </div>
                  <div class="form-group">
                    <label>Company Type</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Your website please"
                      v-model="user.company_type"
                    />
                  </div>
                  <div class="form-group">
                    <label>Technologies Using </label>
                    <textarea
                      class="form-control"
                      v-model="user.technologies_using"
                    ></textarea>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Email</label>
                    <input
                      disabled=""
                      type="email"
                      class="form-control"
                      placeholder="Your email please"
                      v-model="user.email"
                    />
                  </div>

                  <div class="form-group">
                    <label>Phone</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Your phone please"
                      v-model="user.phone"
                    />
                  </div>
                  <div class="form-group">
                    <label>Website</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Your website please"
                      v-model="user.website"
                    />
                  </div>

                  <div class="form-group">
                    <label>Facebook Url</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="user.facebook"
                      placeholder="Enter Facebook url"
                    />
                  </div>
                  <div class="form-group">
                    <label>Twitter Url</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="user.twitter"
                      placeholder="Enter Twitter url"
                    />
                  </div>
                  <div class="form-group">
                    <label>Youtube Url</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="user.youtube"
                      placeholder="Enter Youtube url"
                    />
                  </div>
                  <div class="form-group">
                    <label>Github Url</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="user.github"
                      placeholder="Enter github url"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <button class="btn btn-primary" @click="updateEmployerInfo()">
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import DashNav from "@/components/employer/DashNav.vue";
import DashNavHeader from "@/components/employer/DashNavHeader.vue";

export default {
  name: "EmployerProfileSection",
  props: {
    msg: String,
  },
  components: {
    DashNav,
    DashNavHeader,
  },
  data() {
    return {
      user: {},
      showLoading: false,
    };
  },
  created() {
    this.getEmployerInfo();
  },
  methods: {
    getEmployerInfo() {
      this.showLoading = true;
      this.$Progress.start();

      let formData = new FormData();
      formData.append("_method", "POST");
      // formData.append('user_id',this.getUser.id);
      this.$http
        .post("employer/info")
        .then((response) => {
          // console.log(response.data.data);
          this.user = response.data.data;
          this.$Progress.finish();
          this.showLoading = false;
        })
        .catch((error) => {
          console.log(error.response.data);
          this.$Progress.fail();
        });
    },
    updateEmployerInfo() {
      this.showLoading = true;

      this.$Progress.start();

      let formData = new FormData();
      formData.append("_METHOD", "post");
      formData.append("name", this.user.name);
      // formData.append("email", this.user.email);
      formData.append("address", this.user.address);
      formData.append("slogan", this.user.slogan);
      formData.append("phone", this.user.phone);
      formData.append("description", this.user.description);
      formData.append("company_type", this.user.company_type);
      formData.append("website", this.user.website);
      formData.append("technologies_using", this.user.technologies_using);
      formData.append("facebook", this.user.facebook);
      formData.append("youtube", this.user.youtube);
      formData.append("twitter", this.user.twitter);
      formData.append("github", this.user.github);
      console.log(formData);
      this.$http
        .post("employer/updateinfo", formData)
        .then((response) => {
          // console.log(response.data);
          let message = response.data.message;
          // let status = response.data.status;
          this.$swal("Info", message, "success");
          ///will load new infos from api->server->database
          this.getEmployerInfo();
          this.$Progress.finish();
          this.showLoading = false;
        })
        .catch((error) => {
          // console.log(error.response.data);
          this.$toast.error(error.response.data.message, {
            timeout: 2000,
          });
          this.$Progress.fail();
          this.showLoading = false;
        });
    },
  },
  computed: {
    ...mapGetters({
      getUser: "auth/getUser",
      getToken: "auth/getToken",
    }),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.custom-control {
  display: inline;
  padding-left: 2.5rem;
}
</style>
