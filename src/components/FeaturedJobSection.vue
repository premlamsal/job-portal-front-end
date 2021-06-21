<template>
  <div>
    <section class="featured-job-area feature-padding">
      <div class="text-center" v-if="showLoading">
        <b-spinner
          variant="primary"
          style="width: 3rem; height: 3rem"
          label="Text Centered"
          type="grow"
        ></b-spinner>
      </div>
      <div class="container" v-if="!showLoading">
        <!-- Section Tittle -->
        <div class="row">
          <div class="col-lg-12">
            <div class="section-tittle text-center">
              <span>Featured Jobs</span>
              <h2>Featured Jobs</h2>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-xl-10">
            <JobCard :jobs="jobs" />
          </div>
          <div class="row" v-if="!showLoading">
            <div class="col-lg-12">
              <router-link
                to="/job-listing/?isFeatured=true"
                class="border-btn2 mt-5"
              >
                See More
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import JobCard from "@/components/JobCard.vue";

export default {
  name: "FeaturedJobSection",
  props: {
    msg: String,
  },
  components: {
    JobCard,
  },
  data() {
    return {
      jobs: [],
      showLoading: false,
    };
  },
  created() {
    this.showLoading = true;
    this.getFeaturedJobs();
  },
  methods: {
    getFeaturedJobs() {
      let url = "featured-jobs";
      this.$http
        .get(url)
        .then((response) => {
          this.jobs = response.data.data;
          this.totaljobs = this.jobs.length;
          this.showLoading = false;
        })
        .catch((error) => {
          this.$toast.error(error.response.data.message, {
            timeout: 2000,
          });
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.feature-padding {
  padding-top: 100px;
  padding-bottom: 80px;
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
  border: 1px solid #dafcef;
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
.featured-job-area ul {
  margin: 0px;
  padding: 0px;
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
.featured-job-area .items-link a {
  color: #fb611e;
  display: block;
  border: 1px solid #fb611e;
  border-radius: 30px;
  padding: 4px 33px;
  text-align: center;
  margin-bottom: 25px;
}
</style>
