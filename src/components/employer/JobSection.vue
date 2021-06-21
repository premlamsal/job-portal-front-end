<template>
  <div>
    <!-- add job modal start -->
    <b-modal id="bv-modal-add-job" hide-footer size="lg">
      <template v-slot:modal-title>
        <span class="text-primary">{{ modalForName }}</span>
      </template>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <input type="hidden" v-model="job.id" />
            <label>Job Title</label>
            <input
              type="text"
              placeholder="Job Title"
              v-model="job.title"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label>Job Category</label>
            <template>
              <select class="form-control" v-model="job.category_id">
                <option
                  selected=""
                  v-for="category in categories"
                  :value="category.id"
                  v-bind:key="category.id"
                >
                  {{ category.name }}
                </option>
              </select>
              <span v-if="errors.category_id" :class="['errorText']">{{
                errors.category_id[0]
              }}</span>
            </template>
          </div>

          <div class="form-group">
            <label>Job description</label>
            <textarea v-model="job.description" class="form-control"></textarea>
          </div>
          <div class="form-group">
            <label>Required Skills</label>
            <textarea v-model="job.skills" class="form-control"></textarea>
          </div>
          <div class="form-group">
            <label>Salary</label>
            <input
              type="text"
              placeholder="Job Salary"
              class="form-control"
              v-model="job.salary"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label>Deadline</label>
            <input
              type="date"
              placeholder="Job Deadline"
              class="form-control"
              v-model="job.deadline"
            />
          </div>
          <div class="form-group">
            <label>Open Positions</label>
            <input
              type="text"
              placeholder="Open Positions"
              v-model="job.open_position"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label>Location</label>
            <input
              type="text"
              placeholder="Location"
              class="form-control"
              v-model="job.location"
            />
          </div>
          <div class="form-group">
            <label>Job Type</label>
            <select v-model="job.type" class="form-control">
              <option>Select Job Type</option>
              <option value="full_time">Full Time</option>
              <option value="part_time">Part Time</option>
              <option value="remote">Remote</option>
              <option value="project_basis">Project Basis</option>
              <option value="freelance">Frelance</option>
            </select>
          </div>
          <div class="form-group">
            <label>Job Experience</label>
            <select v-model="job.experience" class="form-control">
              <option>Select Experience</option>
              <option value="1-2">1-2 Years</option>
              <option value="2-3">2-3 Years</option>
              <option value="3-6">3-6 Years</option>
              <option value="6-more">6- more</option>
              <option value="freelance">Frelance</option>
            </select>
          </div>
        </div>
      </div>
      <b-button class="btn-primary mt-3" block @click="callFunc">{{
        modalForName
      }}</b-button>
    </b-modal>
    <!-- add job modal end-->
    <div class="container">
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

            <div class="row mb-3">
              <div class="col-md-12">
                <button class="btn btn-primary" @click="showAddModal()">
                  Create a Job
                </button>
              </div>
            </div>

            <div class="row" v-if="!showLoading">
              <div class="col-md-12">
                <JobCard :jobs="jobs" @clicked="onClickJobCard" />
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
import JobCard from "@/components/employer/JobCard.vue";
import DashNav from "@/components/employer/DashNav.vue";
import DashNavHeader from "@/components/employer/DashNavHeader.vue";
export default {
  name: "EmployerJobsSection",
  props: {
    msg: String,
  },
  components: {
    JobCard,
    DashNav,
    DashNavHeader,
  },

  data() {
    return {
      modalForName: "",
      modalForCode: 0,
      job: {},
      categories: [],
      errors: [],
      jobs: [],
      showLoading: true,
    };
  },
  created() {
    this.getCategories();
    this.getEmployerJobs();
  },
  methods: {
    getCategories() {
      this.showLoading = true;
      this.$Progress.start();

      this.$http
        .get("categories")
        .then((response) => {
          this.categories = response.data.data;
          // console.log(response.data);
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

    callFunc() {
      if (this.modalForCode == 0) {
        this.createJob();
        console.log("Add Job");
      } else if (this.modalForCode == 1) {
        this.updateJob();
        console.log("Update Job");
      }
    },
    showAddModal() {
      this.modalForName = "Add new Job";
      this.modalForCode = 0; //0 for add

      this.job = [];
      // this.errors = ""; //clearing errors
      // // Vue.set(this.modalForCode,0);
      this.$bvModal.show("bv-modal-add-job");
    },
    createJob() {
      this.$Progress.start();

      let formData = new FormData();
      formData.append("title", this.job.title);
      formData.append("category_id", this.job.category_id);
      formData.append("description", this.job.description);
      formData.append("skills", this.job.skills);
      formData.append("experience", this.job.experience);
      formData.append("salary", this.job.salary);
      formData.append("deadline", this.job.deadline);
      formData.append("location", this.job.location);
      formData.append("open_position", this.job.open_position);
      formData.append("type", this.job.type);

      this.$http
        .post("employer/create-job", formData)
        .then((response) => {
          let message = response.data.message;
          // let status = response.data.status;
          this.$swal("Info", message, "success");
          // this.jobs = response.data.data;
          this.getEmployerJobs();
          this.$Progress.finish();
          this.$bvModal.hide("bv-modal-add-job");
        })
        .catch((error) => {
          this.$toast.error(error.response.data.message, {
            timeout: 2000,
          });
          this.$Progress.fail();
        });
    },

    getEmployerJobs() {
      this.showLoading = true;

      this.$Progress.start();

      this.$http
        .get("employer/jobs")
        .then((response) => {
          // console.log(response.data.data);
          this.jobs = response.data.data;
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
    //will get id from emitter from the compoent
    editJob(job_id) {
      this.$Progress.start();

      this.modalForName = "Edit Job";
      this.modalForCode = 1; // 1 for Edit
      this.$bvModal.show("bv-modal-add-job");

      this.$http
        .get("job/" + job_id)
        .then((response) => {
          // console.log(response.data.data);
          this.job = response.data.data[0];
          this.$Progress.finish();
        })
        .catch((error) => {
          this.$toast.error(error.response.data.message, {
            timeout: 2000,
          });
          this.$Progress.fail();
        });
    },

    updateJob() {
      this.$Progress.start();

      let formData = new FormData();
      formData.append("title", this.job.title);
      formData.append("category_id", this.job.category_id);
      formData.append("description", this.job.description);
      formData.append("skills", this.job.skills);
      formData.append("salary", this.job.salary);
      formData.append("experience", this.job.experience);
      formData.append("deadline", this.job.deadline);
      formData.append("location", this.job.location);
      formData.append("open_position", this.job.open_position);
      formData.append("type", this.job.type);
      formData.append("job_id", this.job.id);

      this.$http
        .post("employer/update-job", formData)
        .then((response) => {
          let message = response.data.message;
          // let status = response.data.status;
          this.$swal("Info", message, "success");
          // this.jobs = response.data.data;
          this.getEmployerJobs();

          this.$bvModal.hide("bv-modal-add-job");
          this.$Progress.finish();
        })
        .catch((error) => {
          this.$toast.error(error.response.data.message, {
            timeout: 2000,
          });
          this.$Progress.fail();
        });
    },
    closeJob(job_id) {
      this.showLoading = true;

      this.$swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, close it!",
      }).then((result) => {
        this.$Progress.start();
        if (result.value) {
          let formData = new FormData();
          formData.append("_METHOD", "put");
          formData.append("job_id", job_id);
          this.$http
            .post("employer/close-job", formData)
            .then((response) => {
              let message = response.data.message;
              // let status = response.data.status;
              this.$swal("Info", message, "success");
              // this.job = response.data.data;
              this.getEmployerJobs();
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
        }
      });
    },
    deleteJob(job_id) {
      this.showLoading = true;

      this.$swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, cancel it!",
      }).then((result) => {
        this.$Progress.start();
        if (result.value) {
          let formData = new FormData();
          formData.append("job_id", job_id);
          this.$http
            .post("employer/delete-job", formData)
            .then((response) => {
              let message = response.data.message;
              // let status = response.data.status;
              this.$swal("Info", message, "success");
              // console.log(response.data.data);
              this.getEmployerJobs();
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
        }
      });
    },
    activeJob(job_id) {
      this.showLoading = true;

      this.$swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, cancel it!",
      }).then((result) => {
        this.$Progress.start();
        if (result.value) {
          let formData = new FormData();
          formData.append("_METHOD", "put");
          formData.append("job_id", job_id);
          this.$http
            .post("employer/active-job", formData)
            .then((response) => {
              let message = response.data.message;
              // let status = response.data.status;
              this.$swal("Info", message, "success");
              // this.job = response.data.data;
              this.getEmployerJobs();
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
        }
      });
    },
    //will get emited job_id value from the child component
    onClickJobCard(job_id, action) {
      if (action === "editjob") {
        console.log("edit job");
        this.editJob(job_id);
      } else if (action === "closejob") {
        console.log("close job");
        this.closeJob(job_id);
      } else if (action === "deletejob") {
        console.log("delete job");
        this.deleteJob(job_id);
      } else if (action === "activejob") {
        console.log("active job");
        this.activeJob(job_id);
      } else {
        console.log("no task specified job");
      }
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
