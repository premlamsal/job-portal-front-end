<template>
  <div class="JobSeekerProfile">
    <NavBar />
    <CommonHeroSection
      title=""
      description=""
    />
    <DashboardPanel />
    <FooterSection />
  </div>
</template>
<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import CommonHeroSection from "@/components/CommonHeroSection.vue";
import DashboardPanel from "@/components/jobseeker/DashboardPanel.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  name: "JobseekerDashboard",
  title: "Dashboard JobSeeker | JobMalai",
  components: {
    NavBar,
    CommonHeroSection,
    DashboardPanel,
    FooterSection,
  },
};
</script>
