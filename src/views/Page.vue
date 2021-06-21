<template>
  <div class="pagedetails">
    <NavBar />
    <CommonHeroSection :title="page.title" description="" />

    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="page-body mt-5 mb-5">
            <h4>{{ page.title }}</h4>
            <p>
              {{ page.body }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <FooterSection />
  </div>
</template>
<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import CommonHeroSection from "@/components/CommonHeroSection.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  name: "PageDetail",
  title: "Page Detail",

  components: {
    NavBar,
    CommonHeroSection,
    FooterSection,
  },
  data() {
    return {
      page: {},
    };
  },
  watch: {
    $route: function () {
      this.getIdFromUrl();
    },
  },
  created() {
    this.getIdFromUrl();
  },
  methods: {
    getIdFromUrl() {
      this.slug = this.$route.params.slug;
      this.getPageDetail();
    },
    getPageDetail() {
      this.$http
        .get("page/" + this.slug)
        .then((response) => {
          this.page = response.data.data[0];
          document.title = this.page.title + " | JobMalai";
        })
        .catch(() => {
          //   this.$toast.error(error.response.data.message, {
          //     timeout: 2000,
          //   });
          this.$router.push("/error");
        });
    },
  },
};
</script>
<style scoped lang="scss">
.page-body {
  border: 1px solid #eee;
  padding: 1em;
}
</style>
