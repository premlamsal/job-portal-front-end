<template>
  <div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-12">
          <DashNavHeader />
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <DashNav />
        </div>
        <div class="col-md-9">
          <div class="text-center" v-if="showLoading">
            <b-spinner
              variant="primary"
              style="width: 3rem; height: 3rem"
              label="Text Centered"
              type="grow"
            ></b-spinner>
          </div>
          <div class="col-xl-12 col-lg-12 col-md-8" v-if="!showLoading">
            <h3 class="">Messages</h3>
            <div
              class="card message-card"
              v-for="message in messages"
              v-bind:key="message.id"
            >
              <div class="card-block">
                <h6 class="m-b-20">{{ message.data.message }}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DashNav from "@/components/employer/DashNav.vue";
import DashNavHeader from "@/components/employer/DashNavHeader.vue";

export default {
  name: "InboxSection",
  data() {
    return {
      messages: [],
      showLoading: false,
    };
  },
  props: {},
  components: {
    DashNav,
    DashNavHeader,
  },
  created() {
    this.getAllMessages();
  },
  methods: {
    getAllMessages() {
      this.showLoading = true;
      this.$Progress.start();
      this.$http
        .get("employer/messages")
        .then((response) => {
          this.messages = response.data.data;
          this.$Progress.finish();
          this.showLoading = false;
        })
        .catch((error) => {
          console.log(error.response.data.message);
          this.$Progress.fail();
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.small-section-tittle2 .ion {
  float: left;
  padding-right: 16px;
}
.small-section-tittle2 h4 {
  color: #1e2147;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 20px;
}
.job-category-listing {
  border: 1px solid #ededed;
  padding: 30px 19px 30px 30px;
}

.feature-padding {
  padding-top: 195px;
  padding-bottom: 130px;
}
.featured-job-area ul {
  margin: 0px;
  padding: 0px;
}

li {
  list-style: none;
}

.section-tittle span {
  color: #fb611e;
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
.message-card {
  color: #000;
}
.message-card:hover {
  color: #fff;
  background: #fb611e;
  cursor: pointer;
}

.card {
  border-radius: 5px;
  -webkit-box-shadow: 0 1px 2.94px 0.06px rgba(4, 26, 55, 0.16);
  box-shadow: 0 1px 2.94px 0.06px rgba(4, 26, 55, 0.16);
  border: none;
  margin-bottom: 30px;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.card .card-block {
  padding: 25px;
}

.order-card i {
  font-size: 26px;
}

.f-left {
  float: left;
}

.f-right {
  float: right;
}
</style>
