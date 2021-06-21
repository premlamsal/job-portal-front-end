<template>
  <div class="EmployerSeekerProfile">
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
import JobSection from "@/components/employer/JobSection.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  name: "EmployerJobs",
  title: "Employer Jobs | JobMalai",
  components: {
    NavBar,
    CommonHeroSection,
    JobSection,
    FooterSection,
  },
};
</script>
