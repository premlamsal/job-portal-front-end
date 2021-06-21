<template>
  <div class="joblisting">
    <NavBar />
    <CommonHeroSection
      title="Get a Job"
      description="Find perfect Job for you."
    />
    <JobListPanel />
    <FooterSection />
  </div>
</template>
<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import CommonHeroSection from "@/components/CommonHeroSection.vue";
import JobListPanel from "@/components/JobListPanel.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  name: "JobListing",
  title: "Job Listing  | JobMalai",
  components: {
    NavBar,
    CommonHeroSection,
    JobListPanel,
    FooterSection,
  },
  mounted() {},
  created() {},
};
</script>
