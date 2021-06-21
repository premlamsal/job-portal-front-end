<template>
  <div>
    <div class="common-page-box mt-5 mb-5">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-xl-12 col-lg-12 col-md-12">
            <!--you content here-->
            <h3 class="theme-color">This is page title</h3>
            <p class="page-content">This is page content</p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//thi is common page section for dynamic page creation
//just import it with nav,hero,this-secciton,footer and the page become ready

export default {
  name: "CommonPageSection",
};
</script>
<style scoped lang="scss">
.common-page-box {
}
.common-page-box h3 {
}
.common-page-box p {
}
</style>
