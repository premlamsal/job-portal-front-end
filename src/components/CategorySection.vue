<template>
  <div>
    <div class="main-category-section">
      <div class="text-center" v-if="showLoading">
        <b-spinner
          variant="primary"
          style="width: 3rem; height: 3rem"
          label="Text Centered"
          type="grow"
        ></b-spinner>
      </div>
      <div class="container" v-if="!showLoading">
        <div class="row">
          <div class="col-md-12">
            <div class="category-title">
              <h5>Featured Categories</h5>
              <h3>Browse Top Categories</h3>
            </div>
          </div>
        </div>
        <div class="row d-flex justify-content-center">
          <div
            class="col-xl-3 col-lg-3 col-md-4 col-sm-6"
            v-for="category in categories"
            v-bind:key="category.id"
          >
            <div class="category-box" @click="goToCategory(category.slug)">
              <div class="category-icon">
                <span :class="category.icon"></span>
              </div>
              <div class="category-cap">
                <h5>{{ category.name }}</h5>
                <!-- <span class="theme-color">(200)</span> -->
              </div>
            </div>
          </div>
        </div>
        <div class="row" v-if="!showLoading">
          <div class="col-lg-3 mx-auto" style="text-align: center">
            <button class="btn-more-category" @click="goToJobListing()">
              See More
            </button>
          </div>
        </div>
      </div>
    </div>
    <!--//end of main-category-section-->
  </div>
</template>
<script>
export default {
  name: "CategorySection",
  props: {
    msg: String,
  },
  data() {
    return {
      categories: {},
      showLoading: false,
    };
  },
  created() {
    this.showLoading = true;
    this.getCategories();
  },
  methods: {
    goToJobListing() {
      this.$router
        .push({
          path: "/job-listing",
        })
        .catch(() => {});
    },
    goToCategory(category_slug) {
      this.$router
        .push({
          path: "/job-listing",
          query: { category: category_slug },
        })
        .catch(() => {});
    },
    getCategories() {
      this.$Progress.start();
      this.$http
        .get("categories")
        .then((response) => {
          this.categories = response.data.data;
          // console.log(response.data);
          this.$Progress.finish();
          this.showLoading = false;
        })
        .catch((error) => {
          this.$toast.error(error.response.data.message, {
            timeout: 2000,
          });
          this.$Progress.fail();
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main-category-section {
  padding-top: 5em;
  padding-bottom: 5em;
}
.main-category-section .category-title {
}
.main-category-section .category-title h5 {
  color: #fb611e;
  text-transform: uppercase;
  margin-bottom: 28px;
  text-align: center;
}
.main-category-section .category-title h3 {
  color: #28395a;
  font-size: 50px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 95px;
  text-align: center;
}
.category-box {
  border: 1px solid #dafcef;
  padding: 44px 0;
  -webkit-transition: 0.4s;
  -moz-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
  text-align: center;
  margin-bottom: 30px;
}
.category-box:hover {
  box-shadow: 2px 2px 7px -3px #fb611e;
  cursor: pointer;
}
.category-icon span {
  font-size: 60px;
  margin-bottom: 13px;
  // color: #014b85;
  color: #fb611e;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}
.category-cap h5 {
  font-weight: 600;
  font-size: 18px;
  // color: #001f38;
  line-height: 1.4;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}
.btn-more-category:hover {
  background: #fb611e;
  color: white;
}
.btn-more-category {
  border: 1px solid #fb611e;
  color: #fb611e;
  font: "Muli", sans-serif;
  background: none;
  -moz-user-select: none;
  padding: 19px 69px;
  margin: 0px;
  text-transform: uppercase;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  margin-bottom: 0;
  border-radius: 5px;
  position: relative;
  transition: color 0.4s linear;
  position: relative;
  overflow: hidden;
  margin: 0;
}
</style>
