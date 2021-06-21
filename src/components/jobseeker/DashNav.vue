<template>
  <div class="dashboard-nav">
    <div class="list-group mb-5">
      <router-link
        to="/jobseeker/dashboard"
        class="list-group-item list-group-item-action dash"
      >
        <b-icon icon="display"></b-icon>

        Dashboard
      </router-link>
      <router-link
        to="/jobseeker/inbox"
        class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
      >
        <b-icon icon="chat"></b-icon>
        Inbox
        <span class="badge badge-primary badge-pill ml-auto">{{
          dashInfo.messages
        }}</span>
      </router-link>
      <router-link
        to="/jobseeker/applied-jobs"
        class="list-group-item list-group-item-action"
      >
        <b-icon icon="briefcase"></b-icon>

        Applied Jobs
      </router-link>

      <router-link
        to="/jobseeker/matched-jobs"
        class="list-group-item list-group-item-action"
      >
        <b-icon icon="intersect"></b-icon>
        Matched Jobs
      </router-link>

      <router-link
        :to="{ name: 'JobSeekerPublicProfile', params: { id: getUser.id } }"
        class="list-group-item list-group-item-action"
      >
        <b-icon icon="globe"></b-icon>
        Public Profile
      </router-link>
        <router-link
        :to="{ name: 'JobSeekerResume'}"
        class="list-group-item list-group-item-action"
      >
        <b-icon icon="file-earmark"></b-icon>
        Resume
      </router-link>

      <router-link
        to="/jobseeker/profile"
        class="list-group-item list-group-item-action"
      >
        <b-icon icon="pen"></b-icon>
        Edit Profile
      </router-link>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "DashNav",
  data() {
    return {
      dashInfo: {},
    };
  },
  created() {
    this.dashInfo.messages=0;
    this.getDashInfo();
  },
  methods: {
    getDashInfo() {
      this.$http
        .get("jobseeker/dash-info")
        .then((response) => {
          //  console.log(response.data);
          this.dashInfo = response.data;
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    },
  },
  computed: {
    ...mapGetters({
      getUser: "auth/getUser",
      getToken: "auth/getToken",
      appinfo: "appinfo/getAppInfo",
    }),
  },
};
</script>
<style scoped>
.dash {
  color: #fb611e;
  background-color: #fff;
  border-color: #fb611e;
}
.router-link-active {
  z-index: 2;
  color: #fff;
  background-color: #fb611e;
  border-color: #fb611e;
}
img.img-dash-jobseeker {
  width: 200px;
  height: 200px;
  margin: 0 auto;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  border: 1px solid #fb611e;
  padding: 4px;
  margin-bottom: 10px;
}
.upper-dash-nav {
  text-align: center;
}
</style>
