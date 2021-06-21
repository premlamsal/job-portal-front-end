<template>
  <div class="JobSeekerProfile">
    <NavBar />
    <CommonHeroSection
    
    />
    <JobSection />
    <FooterSection />
  </div>
</template>
<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import CommonHeroSection from "@/components/CommonHeroSection.vue";
import JobSection from "@/components/jobseeker/JobSection.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  name: "MatchedJobs",
  title: "Matched Jobs | JobMalai",
  components: {
    NavBar,
    CommonHeroSection,
    JobSection,
    FooterSection,
  },
};
</script>
