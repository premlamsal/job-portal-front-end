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
          <div class="jobseeker-profile-section">
            <div class="text-center" v-if="showLoading">
              <b-spinner
                variant="primary"
                style="width: 3rem; height: 3rem"
                label="Text Centered"
                type="grow"
              ></b-spinner>
            </div>

            <div class="col-md-12" v-if="!showLoading">
              <div class="row">
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
                    <label>Skills</label>
                    <textarea
                      class="form-control"
                      v-model="user.skills"
                    ></textarea>
                  </div>
                  <div class="form-group">
                    <label>Short Cover</label>
                    <textarea
                      class="form-control"
                      v-model="user.cover_letter"
                    ></textarea>
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
                  <b-form-group label="Gender" v-slot="{ ariaDescribedby }">
                    <b-form-radio
                      :aria-describedby="ariaDescribedby"
                      value="Male"
                      v-model="user.gender"
                      >Male</b-form-radio
                    >
                    <b-form-radio
                      :aria-describedby="ariaDescribedby"
                      value="Female"
                      v-model="user.gender"
                      >Female</b-form-radio
                    >
                    <b-form-radio
                      :aria-describedby="ariaDescribedby"
                      value="Others"
                      v-model="user.gender"
                      >Others</b-form-radio
                    >
                  </b-form-group>
                  
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Title</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Your title please eg. Java Developer"
                      v-model="user.title"
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
                    <label>Qualification</label>
                    <textarea
                      class="form-control"
                      v-model="user.qualification"
                    ></textarea>
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
                  
                </div>
              </div>
             
              <div class="row">
                <div class="col-md-12">
                  <button
                    class="btn btn-primary"
                    @click="updateJobSeekerInfo()"
                  >
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
import DashNav from "@/components/jobseeker/DashNav.vue";
import DashNavHeader from "@/components/jobseeker/DashNavHeader.vue";

export default {
  name: "JobSeekerProfileSection",
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
    this.getJobSeekerInfo();
  },
  methods: {
    
    getJobSeekerInfo() {
      this.showLoading = true;

      this.$Progress.start();

      let formData = new FormData();
      formData.append("_method", "POST");
      // formData.append('user_id',this.getUser.id);
      this.$http
        .post("jobseeker/info")
        .then((response) => {
          // console.log(response.data.data);
          this.user = response.data.data;
          this.$Progress.finish();
          this.showLoading = false;
        })
        .catch((error) => {
          this.$toast.error(error.response.data.message, {
            timeout: 2000,
          });
          this.$Progress.fail();
        });
    },
    updateJobSeekerInfo() {
      this.showLoading = true;

      this.$Progress.start();

      let formData = new FormData();
      formData.append("_METHOD", "post");
      formData.append("name", this.user.name);
      // formData.append("email", this.user.email);
      formData.append("address", this.user.address);
      formData.append("phone", this.user.phone);
      formData.append("title", this.user.title);
      formData.append("skills", this.user.skills);
      formData.append("qualification", this.user.qualification);
      formData.append("cover_letter", this.user.cover_letter);
      formData.append("website", this.user.website);
      formData.append("facebook", this.user.facebook);
      formData.append("youtube", this.user.youtube);
      formData.append("twitter", this.user.twitter);
      formData.append("github", this.user.github);
      formData.append("gender", this.user.gender);
      this.$http
        .post("jobseeker/updateinfo", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          // console.log(response.data);

          let message = response.data.message;
          // let status = response.data.status;
          this.$swal("Info", message, "success");

          ///will load new infos from api->server->database
          this.getJobSeekerInfo();
          this.$Progress.finish();
          this.showLoading = false;
        })
        .catch((error) => {
          this.showLoading = false;

          // console.log(error.response.data);
          this.$toast.error(error.response.data.message, {
            timeout: 2000,
          });
          this.$Progress.fail();
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
img.img-dash-jobseeker {
  width: 200px;
  height: 200px;
  margin: 0 auto;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  border: 1px solid #fb611e;
  padding: 4px;
  margin-bottom: 10px;
}
.upper-dash-nav {
  text-align: center;
}
img.thumb {
  width: 300px;
  height: 300px;
}
.imageUpload {
  display: none;
}
.custom-file-upload {
   -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
.custom-file-upload:hover {
  cursor: pointer;
  color: #fff;
  background: #fb611e;
}
.cursor-pointer{
  cursor:pointer;
}
</style>
