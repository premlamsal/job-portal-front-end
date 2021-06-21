<template>
  <div class="JobseekerProfile">
    <NavBar />
    <JobseekerProfileSection :jobseeker="jobseeker" />
    <FooterSection />
  </div>
</template>
<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import JobseekerProfileSection from "@/components/JobseekerProfileSection.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  name: "JobseekerProfile",
  title: "JobseekerProfile",
  components: {
    NavBar,
    JobseekerProfileSection,
    FooterSection,
  },
  data() {
    return {
      jobseeker_id: "",
      jobseeker: {},
    };
  },
  created() {
    this.getIdFromUrl();
    this.getJobseekerProfile();
  },
  methods: {
    getIdFromUrl() {
      this.jobseeker_id = this.$route.params.id; //get book slug from the url.
    },
    getJobseekerProfile() {
      this.count_views="yes";

      this.$http
        .get("jobseeker-public-profile/" + this.jobseeker_id + "/" + this.count_views)
        .then((response) => {
          // console.log(response.data);
          this.jobseeker = response.data.data;
          if (this.jobseeker.skills) {
            this.jobseeker.skills = this.jobseeker.skills.split(",");
          }
          document.title = this.jobseeker.name + " | JobMalai";
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    },
  },
};
</script>
