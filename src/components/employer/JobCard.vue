<template>
  <div>
    <div v-for="job in jobs" v-bind:key="job.key">
      <!-- Count of Job list End -->
      <!-- single-job-content -->
      <div class="single-job-items mb-3">
        <div class="job-items">
          <div class="company-img" @click="job.employer.id">
            <img :src="job.employer.profile_image" :alt="job.employer.name" />
          </div>
          <div class="job-tittle job-tittle2">
            <h4 @click="goToJobDetail(job.id)">{{ job.title }}</h4>
            <ul>
              <li @click="goToEmployerProfile(job.employer.id)">
                {{ job.employer.name }}
              </li>
              <li><i class="fas fa-map-marker-alt"></i>{{ job.location }}</li>
              <li>$ {{ job.salary }}</li>
            </ul>
          </div>
        </div>
        <div class="items-link items-link2 f-right">
          <a>{{ job.type }}</a>
          <p>Views {{job.views}}</p>
          <span>Posted {{ job.created_at | formatDateStart }}</span>
          <br />
          <button
            class="btn btn-warning"
            style="margin-right: 5px"
            @click="closeJob(job.id)"
            v-if="job.status === 'active'"
          >
            Mark as Closed
          </button>
          <button
            class="btn btn-warning"
            style="margin-right: 5px"
            @click="activeJob(job.id)"
            v-if="job.status === 'closed'"
          >
            Mark as Active
          </button>
          <button
            class="btn btn-primary"
            style="margin-right: 5px"
            @click="editJob(job.id)"
          >
            Edit
          </button>
          <button class="btn btn-danger" @click="deleteJob(job.id)">
            Delete
          </button>
        </div>
      </div>
      <!-- single-job-content -->
    </div>
  </div>
</template>
<script>
export default {
  name: "EmployerJobCard",
  props: {
    jobs: Array,
  },
  methods: {
    goToEmployerProfile(emp_id) {
      this.$router.push({ path: `/employer-profile/${emp_id}` });
    },
    goToJobDetail(job_id) {
      this.$router.push({ path: `/job-detail/${job_id}` });
    },
    editJob(job_id) {
      this.$emit("clicked", job_id, "editjob");
    },
    closeJob(job_id) {
      this.$emit("clicked", job_id, "closejob");
    },
    deleteJob(job_id) {
      this.$emit("clicked", job_id, "deletejob");
    },
    activeJob(job_id) {
      this.$emit("clicked", job_id, "activejob");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.select-job-items2 {
  width: 100%;
  height: 45px;
  background: #fff;
  border-radius: 0px;
  padding: 11px 19px 11px 10px;
  color: #616875;
  line-height: 20px;
  border: 1px solid #ededed;
}
.single-listing .select-job-items2 {
  width: 100%;
}
.single-listing .select-job-items2 ::after {
  border-bottom: 1px solid #a9b6cd;
  border-right: 1px solid #a9b6cd;
  height: 12px;
  width: 12px;
  margin-top: -9px;
  right: 29px;
}
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
.single-job-items:hover {
  box-shadow: 0px 22px 57px 0px #eee;
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
.single-job-items .job-tittle ul li i {
  font-size: 14px;
  color: #bbbbbb;
  margin-right: 10px;
}
.items-link a {
  color: #fb611e;
  display: block;
  border: 1px solid #fb611e;
  border-radius: 30px;
  padding: 4px 33px;
  text-align: center;
  margin-bottom: 25px;
}
ul {
  margin: 0px;
  padding: 0px;
}
</style>
