<template>
  <div>
    <div class="support-company-area fix section-padding2 mt-5 mb-5">
      <div class="about-box">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-xl-6 col-lg-6">
              <div class="right-caption">
                <!-- Section Tittle -->
                <div class="section-tittle section-tittle2">
                  <span>What we are doing</span>
                  <h2>Talented people are getting Jobs</h2>
                </div>
                <div class="support-caption">
                  <p class="pera-top">
                    JobMalai is a platform that helps to connect the Jobseekers
                    and Employers. Jobseekers can search, view , save and apply
                    jobs of their choice. Employers can search , view Jobseekers
                    profile and hire them if their skill matches for ths post.
                  </p>
                  <p>
                    Jobmalai is product of the BatikLeaf- feel the nature, feel
                    the web.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6">
              <div class="support-location-img">
                <img
                  src="/assets/aboutus.jpg"
                  style="border-radius: 10px"
                  alt=""
                />
                <div class="support-img-cap text-center">
                  <p>Since</p>
                  <span>2018</span>
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
//this page is about page section content
export default {
  name: "AboutSection",
};
</script>
<style scoped lang="scss">
.about-box {
}
.about-box h3 {
  font-size: 35px;
}
.about-box p {
  line-height: 1.5;
  font-size: 18px;
  text-align: justify;
}
.support-company-area .support-location-img img {
  width: 100%;
}

.support-company-area .support-location-img {
  position: relative;
}

element.style {
}
.support-company-area .support-location-img .support-img-cap {
  position: absolute;
  bottom: 200px;
  background: #393431b5;
  padding: 59px 28px;
  border-radius: 5px;
  left: -104px;
}
.support-company-area .support-location-img .support-img-cap P {
  color: #fff;
  line-height: 1;
  margin: 0;
  font-size: 20px;
}

.support-company-area .support-location-img .support-img-cap span {
  font-size: 60px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
  line-height: 1.2;
}

.section-tittle span {
  color: #fb611e;
  text-transform: uppercase;
  margin-bottom: 28px;
  display: block;
}
.section-tittle h2 {
  color: #fb611e;
  font-size: 50px;
  line-height: 1.2;
  margin-bottom: 95px;
}
.section-tittle2 h2 {
  margin-bottom: 35px;
}
.support-company-area .right-caption .support-caption {
  padding-right: 144px;
}
.support-company-area .right-caption .support-caption p.pera-top {
  font-size: 20px;
  color: #0b0b2b;
}
.support-company-area .right-caption .support-caption p {
  margin-bottom: 46px;
  font-size: 15px;
}
.post-btn {
  border-radius: 5px;
  padding: 30px 55px;
}
.btn:not(:disabled):not(.disabled) {
  cursor: pointer;
}
.btn {
  background: #fb611e;
  -moz-user-select: none;
  text-transform: capitalize;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 0;
  margin-bottom: 0;
  padding: 27px 44px;
  border-radius: 0px;
  margin: 10px;
  cursor: pointer;
  transition: color 0.4s linear;
  position: relative;
  z-index: 1;
  border: 0;
  overflow: hidden;
  margin: 0;
}
</style>
