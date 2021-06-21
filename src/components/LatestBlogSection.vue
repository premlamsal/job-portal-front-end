<template>
  <div class="LatestBlogSection">
    <div class="home-blog-area blog-h-padding">
      <div class="container">
        <!-- Section Tittle -->
        <div class="row">
          <div class="col-lg-12">
            <div class="section-tittle text-center">
              <span>Our latest blog</span>
              <h2>Our recent news</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6 col-lg-6 col-md-6">
            <div class="home-blog-single mb-3">
              <div class="blog-img-cap">
                <div class="blog-img">
                  <img src="" alt="" />
                  <!-- Blog date -->
                  <div class="blog-date text-center">
                    <span>24</span>
                    <p>Now</p>
                  </div>
                </div>
                <div class="blog-cap">
                  <p>| Properties</p>
                  <h3>
                    <a href="single-blog.html"
                      >Footprints in Time is perfect House in Kurashiki</a
                    >
                  </h3>
                  <a href="#" class="more-btn">Read more »</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6">
            <div class="home-blog-single mb-30">
              <div class="blog-img-cap">
                <div class="blog-img">
                  <img src="" alt="" />
                  <!-- Blog date -->
                  <div class="blog-date text-center">
                    <span>24</span>
                    <p>Now</p>
                  </div>
                </div>
                <div class="blog-cap">
                  <p>| Properties</p>
                  <h3>
                    <a href="single-blog.html"
                      >Footprints in Time is perfect House in Kurashiki</a
                    >
                  </h3>
                  <a href="#" class="more-btn">Read more »</a>
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
  name: "LatestBlogSection",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.blog-h-padding {
  padding-top: 190px;
  padding-bottom: 170px;
}
.section-tittle span {
  color: #fb246a;
  text-transform: uppercase;
  margin-bottom: 28px;
  display: block;
}
.section-tittle h2 {
  color: #28395a;
  font-size: 50px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 95px;
}
.home-blog-single:hover {
  box-shadow: 0px 22px 57px 0px #eee;
}
.home-blog-area .home-blog-single {
  -webkit-transition: all 0.4s ease-out 0s;
  -moz-transition: all 0.4s ease-out 0s;
  -ms-transition: all 0.4s ease-out 0s;
  -o-transition: all 0.4s ease-out 0s;
  transition: all 0.4s ease-out 0s;
}
.home-blog-area .home-blog-single .blog-img-cap .blog-img {
  overflow: hidden;
  position: relative;
}
.home-blog-area .home-blog-single .blog-img-cap .blog-img img {
  width: 100%;
  -webkit-transform: scale 1;
  -ms-transform: scale 1;
  transform: scale 1;
  transition: all 0.5s ease-out 0s;
}
.home-blog-area .home-blog-single .blog-img-cap .blog-img .blog-date {
  background: #ff2424;
  padding: 15px 34px;
  display: inline-block;
  position: absolute;
  bottom: 0;
  left: 0;
}
.home-blog-area .home-blog-single .blog-img-cap .blog-img .blog-date span {
  color: #fff;
  font-size: 25px;
  font-weight: 600;
  line-height: 1;
  margin: 0;
}
.home-blog-area .home-blog-single .blog-img-cap .blog-img .blog-date p {
  color: #fff;
  margin: 0;
}
.home-blog-area .home-blog-single .blog-img-cap .blog-cap {
  background: #fff;
  padding: 37px 129px 37px 50px;
  border: 1px solid #f7f7f7;
}

element.style {
}
p {
  font-family: "Muli", sans-serif;
  color: #506172;
  font-size: 16px;
  line-height: 30px;
  margin-bottom: 15px;
  font-weight: normal;
}
.home-blog-area .home-blog-single .blog-img-cap .blog-cap h3 a {
  color: #191d34;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 20px;
  text-decoration: none;
  display: block;
}
a {
  text-decoration: none;
}
a:hover {
  color: #673ab7 !important;
}

.home-blog-area .home-blog-single .blog-img-cap .blog-cap .more-btn {
  color: #3a3a3a;
  text-transform: uppercase;
  font-size: 14px;
  font-family: "Muli", sans-serif;
  color: #3a3a3a;
}
</style>
