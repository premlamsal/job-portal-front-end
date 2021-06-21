<template>
  <div class="contact">
    <NavBar />
    <CommonHeroSection title="Contact" description="contact us" />
    <ContactSection />
    <FooterSection />
  </div>
</template>
<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import CommonHeroSection from "@/components/CommonHeroSection.vue";
import ContactSection from "@/components/ContactSection.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  name: "Contact",
  title: "Contact | JobMalai",
  components: {
    NavBar,
    CommonHeroSection,
    ContactSection,
    FooterSection,
  },
};
</script>
