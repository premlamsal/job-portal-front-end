<template>
  <div class="EmployerProfile">
    <NavBar />
    <CommonHeroSection :title="employer.name" :description="employer.slogan" />
    <div class="text-center" v-if="showLoading">
      <b-spinner
        variant="primary"
        style="width: 3rem; height: 3rem"
        label="Text Centered"
        type="grow"
      ></b-spinner>
    </div>
    <EmployerProfileSection :employer="employer" v-if="!showLoading" />
    <FooterSection />
  </div>
</template>
<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import CommonHeroSection from "@/components/CommonHeroSection.vue";
import EmployerProfileSection from "@/components/EmployerProfileSection.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  name: "EmployerProfile",
  title: "EmployerProfile",
  components: {
    NavBar,
    CommonHeroSection,
    EmployerProfileSection,
    FooterSection,
  },
  data() {
    return {
      emp_id: "",
      employer: {},
      showLoading: false,
    };
  },
  created() {
    this.getIdFromUrl();
    this.getEmployerProfile();
  },
  methods: {
    getIdFromUrl() {
      this.emp_id = this.$route.params.id; //get book slug from the url.
    },
    getEmployerProfile() {
      this.count_views="yes";

      this.showLoading = true;
      this.$Progress.start();

      this.$http
        .get(
          "employer-public-profile/" + this.emp_id + "/" +this.count_views
        )
        .then((response) => {
          // console.log(response.data);
          this.employer = response.data.data;
          document.title = this.employer.name + " | JobMalai";
          this.$Progress.finish();
          this.showLoading = false;
        })
        .catch((error) => {
          this.showLoading = true;

          console.log(error.response.data);
          this.$Progress.fail();
        });
    },
  },
};
</script>
