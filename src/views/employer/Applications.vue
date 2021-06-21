<template>
  <div class="Applications">
    <NavBar />
    <CommonHeroSection
    />
    <ApplicationSection />
    <FooterSection />
  </div>
</template>
<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import CommonHeroSection from "@/components/CommonHeroSection.vue";
import ApplicationSection from "@/components/employer/ApplicationSection.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  name: "Applications",
  title: "Applications | JobMalai",
  components: {
    NavBar,
    CommonHeroSection,
    ApplicationSection,
    FooterSection,
  },
};
</script>
