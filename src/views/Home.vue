<template>
  <div class="home">
    <NavBar />
    <CategorySection />
    <FeaturedJobSection />
    <ResumeSection />
    <RecentJobSection />
    <FooterSection />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBarHero.vue";
// import HeroSection from "@/components/HeroSection.vue";
import CategorySection from "@/components/CategorySection.vue";
import ResumeSection from "@/components/ResumeSection.vue";
import FeaturedJobSection from "@/components/FeaturedJobSection.vue";
import RecentJobSection from "@/components/RecentJobSection.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  name: "Home",
  title: "JobMalai - Best Online Job Portal in Nepal",
  mounted() {
    this.$Progress.finish();
  },
  components: {
    NavBar,
    CategorySection,
    ResumeSection,
    FeaturedJobSection,
    RecentJobSection,
    FooterSection,
  },
};
</script>
