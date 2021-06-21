<template>
  <div>
    <div class="CommonHeroSection">
      <div class="container">
        <h3>{{ title }}</h3>
        <h4>{{ description }}</h4>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CommonHeroSection",
  props: {
    title: String,
    description: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.CommonHeroSection {
  background: #eee;
  padding-top: 8em;
  padding-bottom: 8em;
}
.CommonHeroSection h3 {
  text-align: center;
  font-size: 5em;
}
.CommonHeroSection h4 {
  text-align: center;
}
</style>
