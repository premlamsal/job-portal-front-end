<template>
  <div></div>
</template>
<script>
export default {
  name: "HeroSection",
  props: {
    msg: String,
  },
  data() {
    return {
      search_key: "",
    };
  },
  methods: {
    makeSearch() {
      const search_key = this.search_key;
      if (search_key != "") {
        this.$router
          .push({
            path: "/job-listing",
            query: { search: search_key },
          })
          .catch(() => {});
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.border-btn4:hover {
  background: #fb611e;
  color: white;
}

.border-btn4 {
  border: 1px solid #ffffff6b;
  color: #eee;
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
.hero-search-box .b-icon {
  color: red;
  position: absolute;
}
.main-hero-section {
  padding-top: 17em;
  padding-bottom: 17em;
  background: url("/assets/intro1.jpg");
  // background: #eee;
  text-align: center;
  background-size: cover;
  color: white;
}

.main-hero-section h3 {
  text-align: center;
  font-size: 5em;
}
.main-hero-section h4 {
  text-align: center;
}
@media screen and (max-width: 768px) {
  .main-hero-section {
    text-align: center;
  }
  .main-hero-section h3 {
    text-align: center;
    font-size: 40px;
  }
  .main-hero-section h4 {
    text-align: center;
  }
}
.border-btn-hero {
}

input.search-input:focus {
  background: #ffffffa6;
}
input.search-input {
  height: 50px;
  font-size: 24px;
  background: #ffffff85;
  border: 1px solid #bbb5b5ba;
  transition: ease-in-out, width 0.35s ease-in-out;
  box-shadow: 0px 1px 2px -1px #fb611e;
  color: black;
  padding-left: 8px;
}

.search-bar {
  position: relative;
  margin: 0 auto;
  width: 60%;
}
.search-bar button {
  border: 0px;
  position: absolute;
  right: 2px;
  background: unset;
  font-size: 30px;
  color: #773ab7;
  top: 0px;
}
.b-icon:hover {
  font-size: 30px;
}
.b-icon {
  transition: 0.4s;
  color: white;
}

/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  input.search-input {
    width: 100%;
  }
  .search-bar {
    width: 80%;
  }
}
</style>
