<template>
  <div>
    <footer>
      <!-- Footer Start-->
      <div class="footer-area footer-bg footer-padding">
        <div class="container">
          <div class="row d-flex justify-content-between">
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div class="single-footer-caption mb-5">
                <div class="single-footer-caption mb-3">
                  <div class="footer-tittle">
                    <h4>About Us</h4>
                    <div class="footer-pera">
                      <p>
                        {{ appinfo.app_slogan }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-5">
              <div class="single-footer-caption mb-5">
                <div class="footer-tittle">
                  <h4>Contact Info</h4>
                  <ul>
                    <li v-if="appinfo.address">
                      <p>{{ appinfo.address }}</p>
                    </li>
                    <li v-if="appinfo.phone">
                      Phone :
                      <span> {{ appinfo.phone }} <br /></span>
                    </li>
                    <li v-if="appinfo.mobile">
                      Mobile :
                      <span> {{ appinfo.mobile }} <br /></span>
                    </li>
                    <li v-if="appinfo.email">Email : {{ appinfo.email }}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-5">
              <div class="single-footer-caption mb-5">
                <div class="footer-tittle">
                  <h4>Important Link</h4>
                  <ul>
                    <li><a href="#"> View Project</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Testimonial</a></li>
                    <li><a href="#">Proparties</a></li>
                    <li><a href="#">Support</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!--  -->
          <div class="row footer-wejed justify-content-between">
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-5">
              <div class="footer-tittle-bottom">
                <span>{{ appinfo.app_name }}</span>
                <sup style="font-size: 16px">get your dream job</sup>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-5">
              <div class="footer-tittle-bottom">
                <span>{{ appinfo.jobs_count }}+</span>
                <p>Jobs</p>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-5">
              <div class="footer-tittle-bottom">
                <span>{{ appinfo.jobseekers_count }}+</span>
                <p>Jobseekers</p>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-5">
              <!-- Footer Bottom Tittle -->
              <div class="footer-tittle-bottom">
                <span>{{ appinfo.employers_count }}+</span>
                <p>Employers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- footer-bottom area -->
      <div class="footer-bottom-area footer-bg">
        <div class="container">
          <div class="footer-border">
            <div class="row d-flex justify-content-between align-items-center">
              <div class="col-xl-10 col-lg-10">
                <div class="footer-copy-right">
                  <p>
                    {{ appinfo.copyright_text }} | Made with
                    <i class="fa fa-heart" aria-hidden="true"></i> by
                    <a href="https://batikleaf.com/" target="_blank"
                      >BatikLeaf</a
                    >
                  </p>
                </div>
              </div>
              <div class="col-xl-2 col-lg-2">
                <div class="footer-social f-right">
                  <a :href="appinfo.facebook"
                    ><i class="fab fa-facebook-f"></i
                  ></a>
                  <a :href="appinfo.twitter"><i class="fab fa-twitter"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer End-->
    </footer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "FooterSection",

  methods: {},
  computed: {
    ...mapGetters({
      getUser: "auth/getUser",
      getToken: "auth/getToken",
      appinfo: "appinfo/getAppInfo",
    }),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
li {
  list-style: none;
}
.footer-bg {
  background: #010b1d;
}
.footer-padding {
  padding-top: 170px;
  padding-bottom: 20px;
}
.footer-area ul {
  margin: 0px;
  padding: 0px;
}
.footer-area .footer-tittle h4 {
  color: #ffffff;
  font-size: 20px;
  margin-bottom: 29px;
  font-weight: 400;
  text-transform: uppercase;
}
.footer-area .footer-pera p {
  color: #868c98;
  padding-right: 52px;
  font-size: 16px;
  margin-bottom: 50px;
  line-height: 1.8;
}
.footer-wejed {
  padding-top: 120px;
  padding-bottom: 40px;
}
.footer-area .footer-tittle-bottom span {
  display: inline-block;
  color: #fff;
  font-weight: 600;
  font-size: 24px;
  margin-right: 11px;
}
.footer-area .footer-tittle-bottom p {
  display: inline-block;
  color: #fff;
}
.footer-area .footer-form {
  margin-top: 40px;
}
.footer-area .footer-form form {
  position: relative;
}
.footer-area .footer-form form input {
  width: 100%;
  height: 43px;
  padding: 10px 20px;
  border: 1px solid #fff;
  border-radius: 5px;
}
.footer-area .footer-form form .form-icon button {
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  border: 0;
  cursor: pointer;
  padding: 13px 22px;
  background: #fb611e;
  line-height: 1;
  border-radius: 0 3px 3px 0;
}
.footer-area .footer-tittle ul li {
  color: #868c98;
  margin-bottom: 9px;
}
.footer-area .footer-tittle ul li a {
  color: #868c98;
  font-weight: 300;
}
.footer-area p {
  font-family: "Muli", sans-serif;
  color: #506172;
  font-size: 16px;
  line-height: 30px;
  margin-bottom: 15px;
  font-weight: normal;
}
.footer-bottom-area .footer-copy-right p i {
  color: #fb611e;
}
.footer-bottom-area .footer-copy-right p {
  color: #888888;
  font-weight: 300;
  font-size: 16px;
  line-height: 2;
  margin-bottom: 12px;
}
.f-right {
  float: right;
}
.footer-bottom-area .footer-social a i:hover {
  color: #fb611e;
}

element.style {
}
.footer-bottom-area .footer-social a i:hover {
  color: #fb611e;
}
.footer-bottom-area .footer-social a i {
  color: #888888;
  margin-left: 13px;
  font-size: 14px;
  -webkit-transition: 0.4s;
  -moz-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
}
.fa-twitter:before {
  content: "\f099";
}
</style>
