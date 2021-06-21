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
        <div class="col-md-9">
          <div class="jobseeker-applied-jobs-section mt-5 mb-5">
            <div class="container">
              <div class="text-center" v-if="showLoading">
                <b-spinner
                  variant="primary"
                  style="width: 3rem; height: 3rem"
                  label="Text Centered"
                  type="grow"
                ></b-spinner>
              </div>
              <div class="row mx-auto" v-if="!showLoading">
                <div class="col-md-12">
                  <div
                    class="applications-container-box"
                    v-for="application in applications"
                    v-bind:key="application.id"
                  >
                    <div class="single-application">
                      <div class="row">
                        <div class="col-md-10">
                          <h2
                            class="theme-color custom-link"
                            @click="goToJobDetail(application.job.id)"
                          >
                            {{ application.job.title }}
                          </h2>
                          <span
                            @click="
                              goToEmployerProfile(application.job.employer.id)
                            "
                            >{{ application.job.employer.name }}</span
                          >
                          <br />
                          <span
                            >Applied
                            {{ application.created_at | formatDateStart }}</span
                          >
                          <br />
                          <span style="font-weight: bold">Status </span>
                          <span class="theme-color"
                            >{{ application.status }}
                          </span>
                        </div>
                        <div class="col-md-2">
                          <button
                            class="btn btn-outline-danger"
                            v-if="application.status === 'applied'"
                            @click="cancelApplication(application.id)"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
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
import DashNav from "@/components/jobseeker/DashNav.vue";
import DashNavHeader from "@/components/jobseeker/DashNavHeader.vue";

import { mapGetters } from "vuex";
export default {
  name: "AppliedJobSection",
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
    };
  },
  created() {
    this.getAppliedJobs();
  },
  methods: {
    goToEmployerProfile(emp_id) {
      this.$router.push({ path: `/employer-profile/${emp_id}` });
    },
    goToJobDetail(job_id) {
      this.$router.push({ path: `/job-detail/${job_id}` });
    },
    cancelApplication(application_id) {
      this.$Progress.start();

      let formData = new FormData();
      formData.append("application_id", application_id);
      this.$http
        .post("jobseeker/cancel-application", formData)
        .then((response) => {
          let message = response.data.message;
          // let status = response.data.status;
          this.$swal("Info", message, "success");
          this.getAppliedJobs();
          this.$Progress.finish();
        })
        .catch((error) => {
          this.$toast.error(error.response.data.message, {
            timeout: 2000,
          });
          this.$Progress.fail();
        });
    },
    getAppliedJobs() {
      this.showLoading = true;
      this.$Progress.start();

      this.$http
        .get("jobseeker/applied-jobs")
        .then((response) => {
          // console.log(response.data.data);
          this.applications = response.data.data;
          this.$Progress.finish();
          this.showLoading = false;
        })
        .catch((error) => {
          this.$toast.error(error.response.data.message, {
            timeout: 2000,
          });
          this.$Progress.finish();
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
.single-application {
  border: 1px solid #fb611e47;
  box-shadow: 2px 3px 2px 1px #eee;
  padding: 1em;
  -webkit-transition: 0.4s;
  -moz-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
  margin: 1em;
}
.single-application:hover {
  box-shadow: 2px 3px 14px 1px #fb611e47;
}
</style>
