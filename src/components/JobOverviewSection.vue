<template>
  <div>
    <div class="job-post-company pt-120 pb-120 mt-5 mb-5">
      <div class="container">
        <div class="row justify-content-between">
          <!-- Left Content -->
          <div class="col-xl-7 col-lg-8">
            <!-- job single -->
            <div class="single-job-items mb-5">
              <div class="job-items">
                <div
                  class="company-img company-img-details custom-link"
                  @click="goToEmployerProfile(job.employer.id)"
                >
                  <img :src="job.employer.profile_image" alt="" />
                </div>
                <div class="job-tittle">
                  <h4>{{ job.title }}</h4>
                  <ul>
                    <li @click="goToEmployerProfile(job.employer.id)" class="custom-link">
                      {{ job.employer.name }}
                    </li>
                    <li>
                      <i class="fas fa-map-marker-alt"></i>{{ job.location }}
                    </li>
                    <li>Rs. {{ job.salary }}</li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- job single End -->

            <div class="job-post-details">
              <div class="post-details1 mb-5">
                <!-- Small Section Tittle -->
                <div class="small-section-tittle">
                  <h4>Job Description</h4>
                </div>
                <p>
                  {{ job.description }}
                </p>
              </div>

              <div class="post-details2 mb-5">
                <!-- Small Section Tittle -->
                <div class="small-section-tittle">
                  <h4>Skills</h4>
                </div>
                <div class="skill-tags">
              <ul>
                <li v-for="skill in job.skills" v-bind:key="skill.id">
                  {{ skill }}
                </li>
              </ul>
            </div>
              </div>
            </div>
          </div>
          <!-- Right Content -->
          <div class="col-xl-4 col-lg-4">
            <div class="post-details3 mb-5">
              <!-- Small Section Tittle -->
              <div class="small-section-tittle">
                <h4>Job Overview</h4>
              </div>
              <ul>
                <li>
                  Posted date :
                  <span>{{ job.created_at | formatDateStart }}</span>
                </li>
                <li>
                  Location : <span>{{ job.location }}</span>
                </li>
                <li>
                  Vacancy : <span>{{ job.open_position }}</span>
                </li>
                <li>
                  Job nature : <span>{{ job.type }}</span>
                </li>
                <li>
                  Salary : <span>Rs. {{ job.salary }}</span>
                </li>
                <li>
                  Application date :
                  <span>{{ job.deadline | formatDateEnd }}</span>
                </li>
              </ul>
              <div class="apply-btn2">
                <a
                  class="btn"
                  v-if="getUser.type === '0'"
                  @click="applyJob(job.id)"
                  >Apply Now</a
                >
              </div>
            </div>
            <div class="post-details4 mb-5">
              <!-- Small Section Tittle -->
              <div class="small-section-tittle">
                <h4>Company Information</h4>
              </div>
              <span
                class="custom-link"
                @click="goToEmployerProfile(job.employer.id)"
                >{{ job.employer.name }}</span
              >
              <p>
                {{ job.employer.slogan }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "JobOverviewSection",
  props: {
    job: Object,
    getUser: Object,
  },
  methods: {
    goToEmployerProfile(emp_id) {
      this.$router.push({ path: `/employer-profile/${emp_id}` });
    },
    applyJob(job_id) {
      let formData = new FormData();
      formData.append("job_id", job_id);
      this.$swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, apply job!",
      }).then((result) => {
        if (result.value) {
          this.$http
            .post("jobseeker/apply-job", formData)
            .then((response) => {
              let message = response.data.message;
              this.$swal("Info", message, "success");
            })
            .catch((error) => {
              this.$toast.success(error.response.data.message);
            });
        }
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.single-job-items {
  padding: 36px 30px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  -webkit-transition: 0.4s;
  -moz-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
}
.single-job-items .job-items {
  display: flex;
  flex-wrap: wrap;
}
.single-job-items .company-img img {
  overflow: hidden;
  float: left;
  margin-right: 32px;
  z-index: 999;
}
a,
button {
  color: #fff;
  outline: medium none;
}
.single-job-items .job-tittle a h4 {
  color: #28395a;
  font-size: 24px;
  -webkit-transition: 0.4s;
  -moz-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
}
.single-job-items .job-tittle ul li {
  display: inline-block;
  margin-right: 48px;
  font-size: 15px;
  color: #808080;
  line-height: 1.8;
}
li {
  list-style: none;
}
ul {
  margin: 0px;
  padding: 0px;
}
.single-job-items .job-tittle ul li i {
  font-size: 14px;
  color: #bbbbbb;
  margin-right: 10px;
}
.fa-map-marker-alt:before {
  content: "\f3c5";
}
.single-job-items .job-tittle ul li:last-child {
  margin-right: 0px;
}
p {
  font-family: "Muli", sans-serif;
  color: #506172;
  font-size: 16px;
  line-height: 30px;
  margin-bottom: 15px;
  font-weight: normal;
}
.post-details3 {
  padding: 30px 30px 30px 30px;
  border: 1px solid #ededed;
}
.post-details3 ul li {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
}
.btn {
  background: #fb246a;
  -moz-user-select: none;
  text-transform: capitalize;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 0;
  margin-bottom: 0;
  padding: 27px 44px;
  border-radius: 0px;
  margin: 10px;
  cursor: pointer;
  transition: color 0.4s linear;
  position: relative;
  z-index: 1;
  border: 0;
  overflow: hidden;
  margin: 0;
}
.btn:not(:disabled):not(.disabled) {
  cursor: pointer;
}
.btn::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 101%;
  height: 101%;
  background: #da2461;
  z-index: 1;
  border-radius: 5px;
  transition: transform 0.5s;
  transition-timing-function: ease;
  transform-origin: 0 0;
  transition-timing-function: cubic-bezier(0.5, 1.6, 0.4, 0.7);
  transform: scaleX(0);
  border-radius: 0;
}
.post-details4 p {
  margin-bottom: 30px;
  display: block;
}
.post-details4 ul li span {
  color: #5b5c6e;
  font-weight: 400;
  font-size: 16px;
  display: inline-block;
  padding-left: 18px;
}

.single-job-items:hover {
  box-shadow: 0px 22px 57px 0px #eee;
}

.skill-tags ul {
  list-style: none;
  text-align: center;
}
.skill-tags ul li {
  float: left;
  margin-right: 10px;
  background: #fb5f2e;
  color: white;
  border-radius: 5px;
  padding: 8px 10px 8px 10px;
}
</style>
