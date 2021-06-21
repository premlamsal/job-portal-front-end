<template>
  <div>
    <b-modal
      id="bv-modal-add-job"
      title="Call For Interview"
      @ok="callForInterview"
    >
      <div class="form-group">
        <label>Venue</label>
        <input type="text" v-model="interview.venue" class="form-control" />
      </div>
       <div class="form-group">
        <label>Date</label>
        <input type="date" v-model="interview.date" class="form-control" />
      </div>
        <div class="form-group">
        <label>Time</label>
        <input type="time" v-model="interview.time" class="form-control" />
      </div>
       <div class="form-group">
        <label>Note</label>
        <textarea v-model="interview.note" class="form-control" ></textarea>
      </div>
    </b-modal>

    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <DashNavHeader />
        </div>
      </div>
      <div class="row">
        <div class="col-md-3"><DashNav /></div>
        <div class="col-md-9 mb-5">
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
              <div
                class="col-md-5 m-2 single-application"
                v-for="application in applications"
                v-bind:key="application.id"
              >
                <img
                  class="jobseeker-profile-image-application"
                  :src="application.jobseeker.profile_image"
                  @click="goToJobSeekerPublicProfile(application.jobseeker.id)"
                />
                <h2
                  class="theme-color pointer"
                  @click="goToJobSeekerPublicProfile(application.jobseeker.id)"
                >
                  {{ application.jobseeker.name }}
                </h2>
                <h4>
                  For the Post of :
                  <br />
                  <span
                    class="text-warning pointer"
                    @click="goToJobDetail(application.job.id)"
                    >{{ application.job.title }}</span
                  >
                </h4>

                <span>{{ application.jobseeker.email }}</span>
                <br />
                <span
                  >Applied {{ application.created_at | formatDateStart }}</span
                >
                <br />
                <span style="font-weight: bold">Status </span>
                <span class="theme-color">{{ application.status }} </span>
                <hr />
                <button
                  class="btn btn-primary"
                  v-if="application.status === 'applied'"
                  @click="acceptApplication(application.id)"
                  style="margin-right: 5px"
                >
                  Mark Accepted
                </button>
                <button
                  class="btn btn-default"
                  v-if="application.status === 'accepted'"
                  @click="callForInterviewModal(application.id)"
                  style="margin-right: 5px"
                >
                  Call for Interview
                </button>
                <button
                  class="btn btn-danger"
                  v-if="application.status === 'applied'"
                  @click="rejectApplication(application.id)"
                >
                  Mark Rejected
                </button>
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
  name: "ApplicationSection",
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
      applications: {},
      showLoading: false,
      interview: {},
      application_id:'',
    };
  },
  created() {
    this.getJobsApplications();
  },
  methods: {
    goToJobSeekerPublicProfile(jobseeker_id) {
      this.$router.push({ path: `/jobseeker-profile/${jobseeker_id}` });
    },
    goToJobDetail(job_id) {
      this.$router.push({ path: `/job-detail/${job_id}` });
    },
    callForInterviewModal(application_id) {

      this.application_id = application_id;
      this.interview={};
      this.$bvModal.show("bv-modal-add-job");
    },
    callForInterview() {
      //redirect to send email page from here
      this.showLoading = true;
      this.$Progress.start();
      let formData = new FormData();
      formData.append("venue", this.interview.venue);
      formData.append("date", this.interview.date);
      formData.append("time", this.interview.time);
      formData.append("note", this.interview.note);
      formData.append("application_id", this.application_id);

      this.$http
        .post("employer/interview-call", formData)
        .then((response) => {
          let message = response.data.message;
          // let status = response.data.status;
          this.$swal("Info", message, "success");
          this.interview={};
          this.getJobsApplications();
          this.$Progress.finish();
          this.showLoading = false;
          this.$bvModal.hide("bv-modal-interview-call");
        })
        .catch((error) => {
          this.showLoading = false;

          this.$toast.error(error.response.data.message, {
            timeout: 2000,
          });
          this.$Progress.fail();
        });
    },
    acceptApplication(application_id) {
      this.showLoading = true;
      this.$Progress.start();
      let formData = new FormData();
      formData.append("application_id", application_id);
      this.$http
        .post("employer/accept-application", formData)
        .then((response) => {
          let message = response.data.message;
          // let status = response.data.status;
          this.$swal("Info", message, "success");
          this.getJobsApplications();
          this.$Progress.finish();
          this.showLoading = false;
        })
        .catch((error) => {
          this.showLoading = false;

          this.$toast.error(error.response.data.message, {
            timeout: 2000,
          });
          this.$Progress.fail();
        });
    },
    rejectApplication(application_id) {
      this.showLoading = true;

      this.$Progress.start();

      let formData = new FormData();
      formData.append("application_id", application_id);
      this.$http
        .post("employer/reject-application", formData)
        .then((response) => {
          let message = response.data.message;
          // let status = response.data.status;
          this.$swal("Info", message, "success");
          this.getAppliedJobs();
          this.$Progress.finish();
          this.showLoading = false;
        })
        .catch((error) => {
          this.showLoading = false;

          this.$toast.error(error.response.data.message, {
            timeout: 2000,
          });
          this.$Progress.fail();
        });
    },

    getJobsApplications() {
      this.showLoading = true;

      this.$Progress.start();

      this.$http
        .get("employer/jobs-applications")
        .then((response) => {
          // console.log(response.data.data);
          this.applications = response.data.data;

          // console.log(this.applications);
          this.$Progress.finish();
          this.showLoading = false;
        })
        .catch((error) => {
          this.showLoading = false;

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
.pointer {
  cursor: pointer;
}
.custom-control {
  display: inline;
  padding-left: 2.5rem;
}
.single-application {
  border: 1px solid #fb611e47;
  box-shadow: 2px 3px 2px 1px #eee;
  padding: 1em;
  -webkit-transition: 0.4s;
  -moz-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
  margin: 1em;
  text-align: center;
}
.single-application:hover {
  box-shadow: 2px 3px 14px 1px #fb611e47;
}
img.jobseeker-profile-image-application {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
</style>
