<template>
  <div>
    <div class="online-cv section-overly cv-bg">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-10">
            <div class="cv-caption text-center">
              <p class="pera1">FEATURED Packages</p>
              <p class="pera2">Make a Difference with Your Resume!</p>
              <router-link to="/login" class="border-btn2 border-btn4">
                Upload your cv
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResumeSection",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.cv-bg {
  // background:#dc3545;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 90px;
  padding-bottom: 120px;
}
.online-cv .cv-caption .pera2 {
  // font-family: "Muli",sans-serif;
  color: #fff;
  font-weight: 700;
  font-size: 60px;
  line-height: 1.3;
  margin-bottom: 51px;
}
.online-cv .border-btn2:hover {
  background: #fb611e;
  color: white;
}

.online-cv .border-btn2 {
  border: 1px solid white;
  color: white;
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

.section-overly::before {
  position: absolute;
  content: "";
  background: url("/assets/backhero.jpg");
  width: 100%;
  height: 100%;
  background-size: cover;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  background-repeat: no-repeat;
}
.section-overly {
  position: relative;
  z-index: 0;
}
.online-cv .cv-caption .pera1 {
  // font-family: "Muli",sans-serif;
  color: #fff;
  text-transform: uppercase;
}
@media screen and (max-width: 768px) {
  .online-cv .cv-caption .pera2 {
    font-size: 40px;
  }
}
</style>
