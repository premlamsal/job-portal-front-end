<template>
  <div>
    <div class="job-listing-area pt-5 pb-5 mt-5 mb-5">
      <div class="container">
        <div class="row">
          <!-- Left content -->
          <div class="col-xl-3 col-lg-3 col-md-4">
            <div class="row">
              <div class="col-12">
                <div class="small-section-tittle2 mb-4">
                  <div class="ion">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      width="20px"
                      height="12px"
                    >
                      <path
                        fill-rule="evenodd"
                        fill="rgb(27, 207, 107)"
                        d="M7.778,12.000 L12.222,12.000 L12.222,10.000 L7.778,10.000 L7.778,12.000 ZM-0.000,-0.000 L-0.000,2.000 L20.000,2.000 L20.000,-0.000 L-0.000,-0.000 ZM3.333,7.000 L16.667,7.000 L16.667,5.000 L3.333,5.000 L3.333,7.000 Z"
                      ></path>
                    </svg>
                  </div>
                  <h4>Filter Jobs</h4>
                  <button class="btn btn-warning" @click="filterJobs()">
                    Apply Filter
                  </button>
                </div>
              </div>
            </div>
            <!-- Job Category Listing start -->
            <div class="job-category-listing mb-5">
              <!-- single two -->
              <div class="single-listing">
                <div class="small-section-tittle2">
                  <h4>Top Selection</h4>
                </div>
                <div class="form-group">
                  Featued Jobs ?
                  <input type="checkbox" v-model="query.isFeatured" />
                  <span class="checkmark"></span>
                </div>
              </div>
              <!-- single one -->
              <div class="single-listing">
                <div class="small-section-tittle2">
                  <h4>Job Category</h4>
                </div>
                <div v-for="category in categories" v-bind:key="category.id">
                  <label class="container">
                    {{ category.name }}
                    <input
                      type="checkbox"
                      v-model="query.category"
                      :value="category.slug"
                    />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <!-- select-Categories start -->
                <div class="select-Categories pt-5 pb-5">
                  <div class="small-section-tittle2">
                    <h4>Job Type</h4>
                  </div>
                  <label class="container"
                    >Full Time
                    <input
                      type="checkbox"
                      v-model="query.jobtype"
                      value="full_time"
                    />
                    <span class="checkmark"></span>
                  </label>
                  <label class="container"
                    >Part Time
                    <input
                      type="checkbox"
                      v-model="query.jobtype"
                      value="part_time"
                    />
                    <span class="checkmark"></span>
                  </label>
                  <label class="container"
                    >Remote
                    <input
                      type="checkbox"
                      v-model="query.jobtype"
                      value="remote"
                    />
                    <span class="checkmark"></span>
                  </label>
                  <label class="container"
                    >Freelance
                    <input
                      type="checkbox"
                      v-model="query.jobtype"
                      value="freelance"
                    />
                    <span class="checkmark"></span>
                  </label>
                  <label class="container"
                    >Project Basis
                    <input
                      type="checkbox"
                      v-model="query.jobtype"
                      value="project_basis"
                    />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <!-- select-Categories End -->
              </div>
              <!-- single two -->
              <div class="single-listing">
                <div class="small-section-tittle2">
                  <h4>Job Location</h4>
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    v-model="query.location"
                    placeholder="eg. ghorahi,dang"
                    class="form-control"
                  />
                </div>

                <!-- select-Categories start -->
                <div class="select-Categories pt-8 pb-5">
                  <div class="small-section-tittle2">
                    <h4>Experience</h4>
                  </div>
                  <label class="container"
                    >1-2 Years
                    <input
                      type="checkbox"
                      v-model="query.experience"
                      value="1-2"
                    />
                    <span class="checkmark"></span>
                  </label>
                  <label class="container"
                    >2-3 Years
                    <input
                      type="checkbox"
                      v-model="query.experience"
                      value="2-3"
                    />
                    <span class="checkmark"></span>
                  </label>
                  <label class="container"
                    >3-6 Years
                    <input
                      type="checkbox"
                      v-model="query.experience"
                      value="3-6"
                    />
                    <span class="checkmark"></span>
                  </label>
                  <label class="container"
                    >6-more..
                    <input
                      type="checkbox"
                      v-model="query.experience"
                      value="6-7"
                    />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <!-- select-Categories End -->
              </div>
              <!-- single three -->
            </div>
            <!-- Job Category Listing End -->
          </div>
          <!-- Right content -->
          <div class="col-xl-9 col-lg-9 col-md-8">
            <!-- Featured_job_start -->
            <section class="featured-job-area">
              <div class="container">
                <div class="row">
                  <div class="col-md-12">
                    <div class="search-bar mt-5 mb-5">
                      <input
                        type="text"
                        class="form-control search-input"
                        placeholder="Search jobs by skills, locations.."
                        v-model="search"
                      />
                      <button @click="makeSearch()">
                        <b-icon icon="search"></b-icon>
                      </button>
                    </div>
                  </div>
                </div>
                <!-- Count of Job list Start -->
                <div class="row">
                  <div class="col-lg-12 mt-4">
                    <div class="count-job mb-3">
                      <span>{{ totaljobs }} found</span>
                      <h4 v-if="jobs.length === 0">
                        Whoops!! nothing found here...
                      </h4>
                      <!-- Select job items start -->
                      <!--  Select job items End-->
                    </div>
                  </div>
                </div>
                <!-- Count of Job list End -->
                <JobCard :jobs="jobs" />
                <div class="text-center" v-if="showLoading">
                  <b-spinner
                    variant="primary"
                    style="width: 3rem; height: 3rem"
                    label="Text Centered"
                    type="grow"
                  ></b-spinner>
                </div>
              </div>
            </section>
            <!-- Featured_job_end -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import JobCard from "@/components/JobCard.vue";
export default {
  name: "JobListPanel",
  data() {
    return {
      jobs: [],
      check: [],
      categories: {},
      totaljobs: "",
      showLoading: false,
      query: {
        status: false, // enable this when there is query string on url
        category: [],
        jobtype: [],
        experience: [],
        location: "",
        search: "",
        isFeatured: "",
      },
      search: "",
      fetchQuery: {},
    };
  },
  props: {},
  components: {
    JobCard,
  },
  created() {
    this.showLoading = true;
    if (!this.$route.query) {
      //fire to load all the jobs when no query strting is present on url
      this.getAllJobs();
    }
    //fire this when there is query string available
    else {
      this.getUrlParams();
    }
    //this will load for both conditions
    this.getCategories();
  },
  watch: {
    $route: function () {
      this.getUrlParams();
    },
  },
  computed: {
    lengthCategories: function () {
      return this.query.category.length;
    },
    lengthJobType: function () {
      return this.query.jobtype.length;
    },
    isEmptyLocation: function () {
      if (this.query.location === "") {
        return true;
      }
      return false;
    },
    isFeaturedSelected: function () {
      if (this.query.isFeatured) {
        return true;
      }
      return false;
    },
    lengthExperience: function () {
      return this.query.experience.length;
    },
    isEmptySearch: function () {
      if (this.search === "") {
        return true;
      }
      return false;
    },
  },
  methods: {
    filterJobs() {
      this.showLoading = true;

      this.fetchQuery = {};
      if (this.lengthCategories !== 0) {
        this.fetchQuery.category = this.query.category.join(",");
      }
      if (this.lengthJobType !== 0) {
        this.fetchQuery.jobtype = this.query.jobtype.join(",");
      }
      if (this.lengthExperience !== 0) {
        this.fetchQuery.experience = this.query.experience.join(",");
      }
      if (!this.isEmptyLocation) {
        this.fetchQuery.location = this.query.location;
      }
      if (!this.isEmptySearch) {
        this.fetchQuery.search = this.query.search;
      }
      if (this.isFeaturedSelected) {
        this.fetchQuery.isFeatured = this.query.isFeatured;
      }
      this.fetchQuery.t = Date.now();

      this.$router
        .push({
          path: "/job-listing",
          query: this.fetchQuery,
        })
        .catch(() => {});
    },
    // filterJobs() {
    //   if (
    //     this.lengthJobType !== 0 &&
    //     this.lengthCategories !== 0 &&
    //     !this.isEmptyLocation
    //   ) {
    //     // console.log('both')
    //     this.$router
    //       .push({
    //         path: "/job-listing",
    //         query: {
    //           category: this.query.category.join(","),
    //           jobtype: this.query.jobtype.join(","),
    //           location: this.query.location,
    //         },
    //       })
    //       .catch(() => {
    //         console.log("error 1");
    //       });
    //   }
    //    else if (
    //     this.lengthJobType !== 0 &&
    //     this.lengthCategories !== 0

    //   ) {
    //     // console.log('both')
    //     this.$router
    //       .push({
    //         path: "/job-listing",
    //         query: {
    //           category: this.query.category.join(","),
    //           jobtype: this.query.jobtype.join(","),
    //         },
    //       })
    //       .catch(() => {
    //         console.log("error 1");
    //       });
    //   }
    //   else if (
    //     this.lengthCategories !== 0
    //     &&!this.isEmptyLocation

    //   ) {
    //     // console.log('both')
    //     this.$router
    //       .push({
    //         path: "/job-listing",
    //         query: {
    //           category: this.query.category.join(","),
    //           // jobtype: this.query.jobtype.join(","),
    //           location: this.query.location,

    //         },
    //       })
    //       .catch(() => {
    //         console.log("error 1");
    //       });
    //   }

    //    else if (this.lengthCategories !== 0) {
    //     // console.log('cat')
    //     this.$router
    //       .push({
    //         path: "/job-listing",
    //         query: { category: this.query.category.join(",") },
    //       })
    //       .catch(() => {
    //         console.log("error 2");
    //       });
    //   } else if (this.lengthJobType !== 0) {
    //     // console.log('jobtype')
    //     this.$router
    //       .push({
    //         path: "/job-listing",
    //         query: { jobtype: this.query.jobtype.join(",") },
    //       })
    //       .catch(() => {
    //         console.log("error 3");
    //       });
    //   } else if (!this.isEmptyLocation) {
    //     this.$router
    //       .push({
    //         path: "/job-listing",
    //         query: { location: this.query.location },
    //       })
    //       .catch(() => {
    //         console.log("error 3");
    //       });
    //   } else {
    //     console.log("nothing selected darling");
    //   }
    //   // this.$router.push({
    //   //   path: "/job-listing",
    //   //   query: {
    //   //     category: this.query.category.join(","),
    //   //     jobtype: this.query.jobtype.join(","),
    //   //   },
    //   // });
    // },
    goToCategory(category_slug) {
      // this.$route.query.category=category_slug;
      this.$router.push({
        path: "/job-listing",
        query: { category: category_slug },
      });
      // this.$router.push({ path: `/job-listing/?category=${category_slug}` });
      // console.log(category_slug);
    },
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
          this.$toast.error(error.response.data.message, {
            timeout: 2000,
          });
        });
    },
    getUrlParams() {
      this.showLoading = true;

      if (this.$route.query.category) {
        this.query.category = this.$route.query.category.split(",");
      }
      if (this.$route.query.jobtype) {
        this.query.jobtype = this.$route.query.jobtype.split(",");
      }
      if (this.$route.query.experience) {
        this.query.experience = this.$route.query.experience.split(",");
      }
      if (this.$route.query.location) {
        this.query.location = this.$route.query.location;
      }
      if (this.$route.query.isFeatured) {
        this.query.isFeatured = this.$route.query.isFeatured;
      }
      if (this.$route.query.search) {
        this.search = this.$route.query.search;
        this.query.search = this.$route.query.search;
      }

      // console.log(this.query.type);

      // this.query.jobtype = this.$route.query.jobtype;
      // if (this.query.category !== "") {
      //   this.query.status = true;
      // }
      // if (this.query.jobtype !== "") {
      //   this.query.status = true;
      // }
      // console.log(this.query.jobtype);
      this.getQueryJobs();
      // console.log(this.$route.query.jobtype)
    },
    getQueryJobs() {
      this.showLoading = true;

      this.$Progress.start();
      let url = "query-jobs?";
      if (this.query.category.length !== 0) {
        url = url + "category=" + this.query.category;
      }
      if (this.query.jobtype.length !== 0) {
        url = url + "&jobtype=" + this.query.jobtype;
      }
      if (this.query.location !== "") {
        url = url + "&location=" + this.query.location;
      }
      if (!this.isEmptySearch) {
        url = url + "&search=" + this.query.search;
      }
      if (this.query.experience.length !== 0) {
        url = url + "&experience=" + this.query.experience;
      }
      if (this.query.isFeatured) {
        url = url + "&isFeatured=" + this.query.isFeatured;
      }
      this.$http
        .get(url)
        .then((response) => {
          this.jobs = Array();
          this.jobs = response.data.data;
          this.totaljobs = this.jobs.length;
          this.$Progress.finish();
          this.showLoading = false;
        })
        .catch((error) => {
          this.$toast(error.response.data.message, {
            timeout: 2000,
          });
        });
    },
    makeSearch() {
      this.showLoading = true;

      const search_key = this.search;
      if (search_key != "") {
        this.$router
          .push({
            path: "/job-listing",
            query: { search: search_key },
          })
          .catch(() => {});
      } else {
        this.getAllJobs();
      }
    },
    getAllJobs() {
      this.showLoading = true;

      this.$Progress.start();
      let url = "jobs";
      this.$http
        .get(url)
        .then((response) => {
          this.jobs = response.data.data;
          this.totaljobs = this.jobs.length;
          this.$Progress.finish();
          this.showLoading = false;
        })
        .catch((error) => {
          this.$toast(error.response.data.message, {
            timeout: 2000,
          });
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hoverlink {
  cursor: pointer;
}
.hoverlink:hover {
  color: #fb611e;
}
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

input.search-input {
  /* width: 30em; */
  height: 50px;
  font-size: 24px;
  background: #ffffff;
  border: 0px;
  transition: ease-in-out, width 0.35s ease-in-out;
  box-shadow: 0px 1px 2px -1px #fb611e;
  padding-left: 8px;
}

.search-bar {
  position: relative;
  margin: 0 auto;
  width: 60%;
}
input.search-input:focus {
  border: 0px !important;
  /* width: 50em; */
  background: #fff;
  box-shadow: 0px 2px 4px -2px #773ab7 !important;
}
.search-bar button {
  border: 0px;
  position: absolute;
  right: 2px;
  background: unset;
  font-size: 30px;
  color: #773ab7;
  top: 0px;
}
.b-icon:hover {
  font-size: 30px;
}
.b-icon {
  transition: 0.4s;
}

/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  input.search-input {
    width: 100%;
  }
  .search-bar {
    width: 80%;
  }
}
</style>
