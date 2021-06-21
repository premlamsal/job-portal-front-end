<template>
  <div class="EmployerProfile">
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
import DashboardPanel from "@/components/employer/DashboardPanel.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  name: "EmployerDashboard",
  title: "Dashboard Employer | JobMalai",
  components: {
    NavBar,
    CommonHeroSection,
    DashboardPanel,
    FooterSection,
  },
};
</script>
