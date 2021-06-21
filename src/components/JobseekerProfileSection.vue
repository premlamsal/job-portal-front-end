<template>
  <div>
    <div class="jobseeker-hero-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h3>
              <img
                :src="jobseeker.profile_image"
                v-if="jobseeker.profile_image"
                class="jobseeker-profile-image"
              />
              <img
                src="/assets/avtar.png"
                class="jobseeker-profile-image"
                v-else
              />
            </h3>
            <h3>{{ jobseeker.name }}</h3>
            <h4>{{ jobseeker.title }}</h4>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="skill-tags">
              <ul>
                <li v-for="skill in jobseeker.skills" v-bind:key="skill.id">
                  {{ skill }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="web-link">
              <a :href="jobseeker.website"><i class="fa fa-globe"></i></a>
              <a :href="jobseeker.facebook"
                ><i class="fab fa-facebook-f"></i
              ></a>
              <a :href="jobseeker.twitter"><i class="fab fa-twitter"></i></a>
              <a :href="jobseeker.youtube"><i class="fab fa-youtube"></i></a>
              <a :href="jobseeker.github"><i class="fab fa-github"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="jobseeker-profile-details-more">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="row mt-5 mb-5">
              <div class="col-md-12">
                <div class="jobseeker-detail">
                  <h3 class="theme-color">Qualification</h3>
                  <p class="pt-3 pb-3">
                    {{ jobseeker.qualification }}
                  </p>
                </div>
                <div class="jobseeker-detail">
                  <h3 class="theme-color">Cover</h3>
                  <p class="pt-3 pb-3">
                    {{ jobseeker.cover }}
                  </p>
                </div>
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
  name: "JobseekerProfileSection",
  props: {
    jobseeker: Object,
  },

  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.jobseeker-detail {
}
.jobseeker-detail ul {
  list-style: none;
}
.pointer {
  cursor: pointer;
}
.custom-control {
  display: inline;
  padding-left: 2.5rem;
}
.single-application {
  border: 1px solid #fb611e47;
  box-shadow: 2px 3px 2px 1px #eee;
  padding: 1em;
  -webkit-transition: 0.4s;
  -moz-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
  margin: 1em;
  text-align: center;
}
.single-application:hover {
  box-shadow: 2px 3px 14px 1px #fb611e47;
}
img.jobseeker-profile-image-application {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}
.jobseeker-hero-section {
  background: #eee;
  padding-top: 5em;
  padding-bottom: 5em;
}
.jobseeker-hero-section h3 {
  text-align: center;
  font-size: 3em;
}
.jobseeker-hero-section h4 {
  text-align: center;
  text-transform: uppercase;
}
img.jobseeker-profile-image {
  width: 200px;
  height: 200px;
  border: 1px solid #fb5f2e;
  border-radius: 50%;
  padding: 5px;
}
.skill-tags {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.web-link {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}
.web-link a {
  margin-right: 15px;
}

.skill-tags ul {
  list-style: none;
  text-align: center;
}
.skill-tags ul li {
  float: left;
  margin-right: 10px;
  background: #fb5f2e;
  color: white;
  border-radius: 5px;
  padding: 8px 10px 8px 10px;
}
</style>
