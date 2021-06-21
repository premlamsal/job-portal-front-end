<template>
  <div class="row">
    <!-- Count of Job list End -->
    <!-- single-job-content -->
    <div
      class="col-sm-6 col-lg-6 m-15px-tb"
      v-for="job in jobs"
      v-bind:key="job.key"
    >
      <div
        class="media box-shadow-only-hover hover-top border-all-1 border-color-gray p-15px"
      >
        <div class="icon-100 white-color border-radius-50 d-inline-block">
          <img
            :src="job.employer.profile_image"
            @click="goToEmployerProfile(job.employer.id)"
            style="border-radius: 50px"
            :alt="job.employer.name"
            width="100"
            height="100"
          />
        </div>
        <div class="p-20px-l media-body">
          <span
            class="theme2nd-bg white-color p-0px-tb p-10px-lr border-radius-15"
            v-if="job.type === 'full_time'"
            >full time</span
          >
          <span
            class="theme2nd-bg white-color p-0px-tb p-10px-lr border-radius-15"
            v-else
            >{{ job.type }}</span
          >
          <h5 class="m-5px-tb custom-link" @click="goToJobDetail(job.id)">
            {{ job.title }}
          </h5>
          <p class="m-0px" style="font-size: 15px">
            <i class="fas fa-map-marker-alt"></i> {{ job.location }}
          </p>
        </div>
      </div>
    </div>
    <!-- single-job-content -->
  </div>
</template>
<script>
export default {
  name: "JobCard",
  props: {
    jobs: Array,
  },
  methods: {
    goToJobDetail(job_id) {
      this.$router.push({ path: `/job-detail/${job_id}` });
    },
    goToEmployerProfile(emp_id) {
      this.$router.push({ path: `/employer-profile/${emp_id}` });
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
