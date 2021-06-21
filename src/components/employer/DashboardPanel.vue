<template>
  <div class="dashboard mt-5">
    <div class="container">
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
          <div class="container" v-if="!showLoading">
            <div class="row">
              <div class="col-md-4 col-xl-3">
                <div class="card bg-c-blue order-card">
                  <div class="card-block">
                    <h6 class="m-b-20">Profile Viewers</h6>
                    <h2 class="text-right">
                      <b-icon icon="eye" class="f-left"></b-icon>
                      <span>{{ dashInfo.views }}</span>
                    </h2>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-xl-3">
                <div class="card bg-c-green order-card">
                  <div class="card-block">
                    <h6 class="m-b-20">Applications</h6>
                    <h2 class="text-right">
                      <b-icon icon="journals" class="f-left"></b-icon>
                      <span>{{ dashInfo.applications }}</span>
                    </h2>
                  </div>
                </div>
              </div>

              <div class="col-md-4 col-xl-3">
                <div class="card bg-c-yellow order-card">
                  <div class="card-block">
                    <h6 class="m-b-20">Jobs</h6>
                    <h2 class="text-right">
                      <b-icon icon="briefcase" class="f-left"></b-icon>
                      <span>{{ dashInfo.jobs }}</span>
                    </h2>
                  </div>
                </div>
              </div>

              <div class="col-md-4 col-xl-3">
                <div class="card bg-c-pink order-card">
                  <div class="card-block">
                    <h6 class="m-b-20">Inbox</h6>
                    <h2 class="text-right">
                      <b-icon icon="chat" class="f-left"></b-icon>
                      <span>{{ dashInfo.messages }}</span>
                    </h2>
                  </div>
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
import DashNav from "@/components/employer/DashNav.vue";
import DashNavHeader from "@/components/employer/DashNavHeader.vue";

export default {
  name: "EmployerDashboardPanel",
  tittle: "Dashboard Employer |Job Malai",
  data() {
    return {
      dashInfo: {},
      showLoading: false,
    };
  },
  components: {
    DashNav,
    DashNavHeader,
  },
  created() {
    this.getDashInfo();
  },
  methods: {
    getDashInfo() {
      this.showLoading = true;
      this.$http
        .get("employer/dash-info")
        .then((response) => {
          //  console.log(response.data);
          this.dashInfo = response.data;
          this.showLoading = false;
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    },
  },
};
</script>
<style scoped>
.order-card {
  color: #fff;
}

.bg-c-blue {
  background: linear-gradient(45deg, #4099ff, #73b4ff);
}

.bg-c-green {
  background: linear-gradient(45deg, #2ed8b6, #59e0c5);
}

.bg-c-yellow {
  background: linear-gradient(45deg, #ffb64d, #ffcb80);
}

.bg-c-pink {
  background: linear-gradient(45deg, #ff5370, #ff869a);
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
