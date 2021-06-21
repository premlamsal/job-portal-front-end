<template>
  <div>
    <div class="employer-profile-section mt-5 mb-5">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <div class="row">
              <div class="col-md-2">
                <img
                  :src="employer.profile_image"
                  class="img-fluid img-thumbnail"
                  alt="..."
                />
              </div>
              <div class="col-md-7">
                <h3 class="theme-color">{{ employer.name }}</h3>
                <h6>{{ employer.slogan }}</h6>
                <h6>{{ employer.address }}</h6>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <a class="border-btn2 mt-3" :href="employer.website"
              >Visit Website</a
            >
          </div>
        </div>
        <div class="row mt-5 mb-5">
          <div class="col-md-12">
            <div class="employer-detail">
              <p class="pt-3 pb-3">
                {{ employer.description }}
              </p>
              <div class="social-link">
                <ul>
                  <li><a :href="employer.twitter"></a></li>
                  <li><a :href="employer.facebook"></a></li>
                  <li><a :href="employer.github"></a></li>
                  <li><a :href="employer.youtube"></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "EmployerProfileSection",
  props: {
    employer: Object,
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.employer-detail {
}
.social-link ul {
  list-style: none;
}
</style>
