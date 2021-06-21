<template>
  <div class="jobdetail">
    <NavBar />
    <CommonHeroSection :title="job.title" :description="job.employer.name" />
    <div class="text-center" v-if="showLoading">
      <b-spinner
        variant="primary"
        style="width: 3rem; height: 3rem"
        label="Text Centered"
        type="grow"
      ></b-spinner>
    </div>
    <JobOverviewSection :job="job" :getUser="getUser" v-if="!showLoading" />
    <FooterSection />
  </div>
</template>
<script>
import { mapGetters } from "vuex";

// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import CommonHeroSection from "@/components/CommonHeroSection.vue";
import JobOverviewSection from "@/components/JobOverviewSection.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  name: "JobDetail",
  title: "Job Detail",

  components: {
    NavBar,
    CommonHeroSection,
    JobOverviewSection,
    FooterSection,
  },
  computed: {
    ...mapGetters({
      getUser: "auth/getUser",
      getToken: "auth/getToken",
    }),
  },
  data() {
    return {
      job_id: "",
      job: {
        employer: {},
      },
      showLoading: false,
    };
  },
  watch: {
    $route: function () {
      this.getIdFromUrl();
    },
  },
  created() {
    this.getIdFromUrl();
  },
  methods: {
    getIdFromUrl() {
      this.job_id = this.$route.params.id; //get book slug from the url.
      this.getJobDetail();
    },
    getJobDetail() {
      this.count_views="yes";
      this.showLoading = true;
      this.$http
        .get("job/" + this.job_id + "/" +this.count_views)
        .then((response) => {
          // console.log(response.data.data);
          this.job = response.data.data[0];
          this.job.skills = this.job.skills.split(",");
          document.title = this.job.title + " | JobMalai";
          this.showLoading = false;
        })
        .catch(() => {
          this.showLoading = true;
          this.$router.push("/error");
          // this.$toast.error(error.response.data.message, {
          //   timeout: 2000,
          // });
        });
    },
  },
};
</script>
