<template>
  <div>
    <section class="contat-section mt-5 mb-5">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2 class="contact-title">Get in Touch</h2>
            {{ successmessage }}
          </div>
          <div class="col-lg-8">
            <div class="row" v-if="showContactForm">
              <div class="col-12">
                <div class="form-group">
                  <textarea
                    class="form-control w-100"
                    cols="30"
                    rows="9"
                    required=""
                    v-model="contact.message"
                    placeholder="Enter Message"
                  ></textarea>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <input
                    required=""
                    class="form-control valid"
                    type="text"
                    placeholder="Enter your name"
                    v-model="contact.name"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <input
                    required=""
                    class="form-control valid"
                    type="email"
                    placeholder="Email"
                    v-model="contact.email"
                  />
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Enter Subject"
                    v-model="contact.subject"
                  />
                </div>
              </div>
            </div>
            <div class="form-group mt-3" v-if="showContactForm">
              <button
                type="submit"
                class="button button-contactForm boxed-btn"
                @click="sendQuery()"
              >
                Send
              </button>
            </div>
          </div>
          <div class="col-lg-3 offset-lg-1">
            <div class="media contact-info" v-if="appinfo.address">
              <span class="contact-info__icon"><i class="ti-home"></i></span>
              <div class="media-body">
                <h3>{{ appinfo.address }}</h3>
              </div>
            </div>
            <div class="media contact-info" v-if="appinfo.phone | appinfo.mobile">
              <span class="contact-info__icon"><i class="ti-tablet"></i></span>
              <div class="media-body">
                <h3>{{ appinfo.phone }}</h3>
                <h3>{{ appinfo.mobile }}</h3>
                <p>Mon to Fri 9am to 6pm</p>
              </div>
            </div>
            <div class="media contact-info" v-if="appinfo.email">
              <span class="contact-info__icon"><i class="ti-email"></i></span>
              <div class="media-body">
                <h3>{{ appinfo.email }}</h3>
                <p>Send us your query anytime!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "ContactSection",
  data() {
    return {
      contact: {
        message: "",
        email: "",
        subject: "",
        name: "",
      },
      successmessage: "",
      showContactForm: true,
      errors: [],
    };
  },
  methods: {
    sendQuery() {
      this.showContactForm = false;
      let formData = new FormData();
      formData.append("message", this.contact.message);
      formData.append("email", this.contact.email);
      formData.append("name", this.contact.name);
      formData.append("subject", this.contact.subject);
      this.$http
        .post("save-contact-query", formData)
        .then((response) => {
          this.successmessage = response.data.message;
        })
        .catch((error) => {
          this.errors = error.response.data;
          this.showContactForm = true;
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
<style scoped lang="scss">
.contact-title {
  font-size: 27px;
  font-weight: 600;
  margin-bottom: 20px;
}

.form-contact textarea {
  border-radius: 0px;
  height: 100% !important;
}
.form-contact .form-group {
  margin-bottom: 30px;
}
.boxed-btn:hover {
  background: #fb611e;
  color: white !important;
}
.boxed-btn {
  background: #fff;
  color: #fb611e !important;
  display: inline-block;
  padding: 18px 44px;
  font-size: 14px;
  font-weight: 400;
  border: 0;
  border: 1px solid #fb611e;
  letter-spacing: 3px;
  text-align: center;
  color: #fb246a;
  text-transform: uppercase;
  cursor: pointer;
}
.contact-info {
  margin-bottom: 25px;
}
.contact-info__icon {
  margin-right: 20px;
}
.media-body {
  -ms-flex: 1;
  flex: 1;
}
.contact-info .media-body h3 {
  font-size: 16px;
  margin-bottom: 0;
  font-size: 16px;
  color: #2a2a2a;
}
.contact-info .media-body p {
  color: #8a8a8a;
}
.contact-info__icon i,
.contact-info__icon span {
  color: #8f9195;
  font-size: 27px;
}
.ti-tablet:before {
  content: "\e609";
}
</style>
