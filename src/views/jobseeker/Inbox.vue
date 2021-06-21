<template>
  <div class="JobSeekerInbox">
    <NavBar />
    <CommonHeroSection
    
    />
    <InboxSection />
    <FooterSection />
  </div>
</template>
<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import CommonHeroSection from "@/components/CommonHeroSection.vue";
import InboxSection from "@/components/jobseeker/InboxSection.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  name: "JobSeekerInbox",
  title: "JobSeeker Inbox | JobMalai",
  components: {
    NavBar,
    CommonHeroSection,
    InboxSection,
    FooterSection,
  },
};
</script>
