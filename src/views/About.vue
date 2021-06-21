<template>
  <div class="about">
    <NavBar />
    <CommonHeroSection title="About" description="about jobmalai" />
    <AboutSection />
    <FooterSection />
  </div>
</template>
<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import CommonHeroSection from "@/components/CommonHeroSection.vue";
import AboutSection from "@/components/AboutSection.vue";
// import ResumeSection from "@/components/ResumeSection.vue";
// import LatestBlogSection from "@/components/LatestBlogSection.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  name: "About",
  title: "About | JobMalai",
  components: {
    NavBar,
    CommonHeroSection,
    // ResumeSection,
    AboutSection,
    // LatestBlogSection,
    FooterSection,
  },
};
</script>
