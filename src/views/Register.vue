<template>
  <div class="register">
    <NavBar />
    <CommonHeroSection
      title="Register"
      description="register as Jobseeker or Employer"
    />
    <LoginRegisterSection formType="Register" />
    <FooterSection />
  </div>
</template>
<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import CommonHeroSection from "@/components/CommonHeroSection.vue";
import LoginRegisterSection from "@/components/LoginRegisterSection.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  name: "Register",
  title: "Register  | JobMalai",

  components: {
    NavBar,
    CommonHeroSection,
    LoginRegisterSection,
    FooterSection,
  },
};
</script>
