<template>
  <div class="JobSeekerProfile">
    <NavBar />
    <CommonHeroSection
    
    />
    <Profile />
    <FooterSection />
  </div>
</template>
<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import CommonHeroSection from "@/components/CommonHeroSection.vue";
import Profile from "@/components/jobseeker/ProfileSection.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  name: "JobSeekerProfile",
  title: "JobSeeker Profile | JobMalai",
  components: {
    NavBar,
    CommonHeroSection,
    Profile,
    FooterSection,
  },
};
</script>
