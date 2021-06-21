<template>
  <div class="error">
    <NavBar />
    <CommonHeroSection
      title="Whoops"
      description="There is nothing like that..."
    />
    <FooterSection />
  </div>
</template>
<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import CommonHeroSection from "@/components/CommonHeroSection.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  name: "Error",
  title: "Error  | JobMalai",
  components: {
    NavBar,
    CommonHeroSection,
    FooterSection,
  },
};
</script>
