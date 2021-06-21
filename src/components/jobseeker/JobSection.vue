<template>
  <div>
    <div class="container mt-5">
    <div class="row">
        <div class="col-md-12">
          <DashNavHeader />
        </div>
    </div>
      <div class="row">
        <div class="col-md-3">
          <DashNav />
        </div>
        <div class="col-md-9">
          <div class="job-listing-area pt-5 pb-5 mb-5">
            <div class="text-center" v-if="showLoading">
              <b-spinner
                variant="primary"
                style="width: 3rem; height: 3rem"
                label="Text Centered"
                type="grow"
              ></b-spinner>
            </div>
            <div class="col-xl-12 col-lg-12 col-md-8" v-if="!showLoading">
              <section class="featured-job-area">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="count-job">
                        <span>{{ totaljobs }} found</span>
                      </div>
                    </div>
                  </div>
                  <JobCard :jobs="jobs" />
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import JobCard from "@/components/JobCard.vue";
import DashNav from "@/components/jobseeker/DashNav.vue";
import DashNavHeader from "@/components/jobseeker/DashNavHeader.vue";


export default {
  name: "MatchedJobs",
  data() {
    return {
      jobs: [],
      totaljobs: "",
      showLoading: false,
    };
  },
  props: {},
  components: {
    JobCard,
    DashNav,
    DashNavHeader,
  },
  created() {
    this.getAllJobs();
  },
  methods: {
    getAllJobs() {
      this.showLoading = true;

      this.$Progress.start();

      this.$http
        .get("jobseeker/matched-jobs")
        .then((response) => {
          this.jobs = response.data.data;
          this.totaljobs = this.jobs.length;
          this.$Progress.finish();
          this.showLoading = false;
        })
        .catch((error) => {
          console.log(error.response.data.message);
          this.$Progress.fail();
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.small-section-tittle2 .ion {
  float: left;
  padding-right: 16px;
}
.small-section-tittle2 h4 {
  color: #1e2147;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 20px;
}
.job-category-listing {
  border: 1px solid #ededed;
  padding: 30px 19px 30px 30px;
}

.feature-padding {
  padding-top: 195px;
  padding-bottom: 130px;
}
.featured-job-area ul {
  margin: 0px;
  padding: 0px;
}

li {
  list-style: none;
}

.section-tittle span {
  color: #fb611e;
  text-transform: uppercase;
  margin-bottom: 28px;
  display: block;
}
.section-tittle h2 {
  color: #28395a;
  font-size: 50px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 95px;
}
</style>
