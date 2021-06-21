<template>
  <div class="EmployerProfile">
    <NavBar />
    <CommonHeroSection
      title="Employer Profile"
      description="details of profile"
    />
    <Profile />
    <FooterSection />
  </div>
</template>
<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import CommonHeroSection from "@/components/CommonHeroSection.vue";
import Profile from "@/components/employer/ProfileSection.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  name: "EmployerProfile",
  title: "Employer Profile | JobMalai",
  components: {
    NavBar,
    CommonHeroSection,
    Profile,
    FooterSection,
  },
};
</script>
