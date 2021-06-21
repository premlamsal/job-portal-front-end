<template>
  <div class="JobSeekerResume">
    <NavBar />
    <CommonHeroSection
    />
    <ResumeSection />
    <FooterSection />
  </div>
</template>
<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import CommonHeroSection from "@/components/CommonHeroSection.vue";
import ResumeSection from "@/components/jobseeker/ResumeSection.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  name: "JobSeekerResume",
  title: "JobSeeker Inbox | JobMalai",
  components: {
    NavBar,
    CommonHeroSection,
    ResumeSection,
    FooterSection,
  },
};
</script>
