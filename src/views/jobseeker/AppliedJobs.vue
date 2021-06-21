<template>
  <div class="JobSeekerProfile">
    <NavBar />
    <CommonHeroSection/>
    <AppliedJobSection />
    <FooterSection />
  </div>
</template>
<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import CommonHeroSection from "@/components/CommonHeroSection.vue";
import AppliedJobSection from "@/components/jobseeker/AppliedJobSection.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  name: "AppliedJobs",
  title: "Applied Jobs | JobMalai",
  components: {
    NavBar,
    CommonHeroSection,
    AppliedJobSection,
    FooterSection,
  },
};
</script>
