<template>
  <div class="dashboard-nav-header">
    <div class="upper-dash-nav">
      <div class="image-holder-box">
        <div class="image-holder">
          <div class="spinner-img-glow-loading" v-if="showImgLoading">
            <b-spinner
              variant="primary"
              style="width: 3rem; height: 3rem; margin-top: 75px"
              label="Text Centered"
              type="grow"
            ></b-spinner>
          </div>

          <label class="custom-file-upload">
            <div
              class="bg-gray-100"
              @dragover="dragover"
              @dragleave="dragleave"
              @drop="drop"
              for="file"
            >
              <div class="">
                <b-icon
                  icon="upload"
                  aria-hidden="true"
                  style="font-size: 20px"
                ></b-icon>

                <input
                  id="file"
                  type="file"
                  class="w-px h-px opacity-0 overflow-hidden absolute imageUpload"
                  @change="onChange"
                  ref="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                />
              </div>
            </div>
          </label>

          <img :src="profile_image" class="img-itself" v-if="profile_image" />
          <img src="/assets/avtar.png" class="img-dash-jobseeker" v-else />
        </div>
        <h4>{{ getUser.name }}</h4>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "DashNavHeader",
  data() {
    return {
      image_file: "",
      profile_image: "",
      showImgLoading: true,
    };
  },
  created() {
    this.profile_image = this.getUser.profile_image;
    this.showImgLoading = false;
  },
  methods: {
    //drop file
    onChange() {
      this.showImgLoading = true;
      this.image_file = this.$refs.file.files[0];
      if (this.image_file) {
        this.updateProfileImage();
      }

      /*
          Initialize a File Reader object
        */
      let reader = new FileReader();

      /*
          Add an event listener to the reader that when the image
          has been loaded, we flag the show preview as true and set the
          image to be what was read from the reader.
        */
      reader.addEventListener(
        "load",
        function () {
          this.profile_image = reader.result;
          this.showImgLoading = false;
        }.bind(this),
        false
      );

      /*
        Check to see if the image is not empty.
      */
      if (this.image_file) {
        /*
          Ensure the image is an image image.
        */
        if (/\.(jpe?g|png|gif)$/i.test(this.image_file.name)) {
          /*
            Fire the readAsDataURL method which will read the image in and
            upon completion fire a 'load' event which we will listen to and
            display the image in the preview.
          */
          reader.readAsDataURL(this.image_file);
        }
      }
    },

    remove() {
      this.image_file = "";
      this.profile_image = "";
    },
    dragover(event) {
      this.showImgLoading = true;
      event.preventDefault();
      // Add some visual fluff to show the user can drop its files
      if (!event.currentTarget.classList.contains("bg-green-300")) {
        event.currentTarget.classList.remove("bg-gray-100");
        event.currentTarget.classList.add("bg-green-300");
      }
    },
    dragleave(event) {
      this.showImgLoading = false;

      // Clean up
      event.currentTarget.classList.add("bg-gray-100");
      event.currentTarget.classList.remove("bg-green-300");
    },
    drop(event) {
      event.preventDefault();
      this.$refs.file.files = event.dataTransfer.files;
      this.onChange(); // Trigger the onChange event manually
      // Clean up
      event.currentTarget.classList.add("bg-gray-100");
      event.currentTarget.classList.remove("bg-green-300");
    },
    updateProfileImage() {
      if (this.image_file) {
        let formData = new FormData();
        formData.append("profile_image", this.image_file);
        this.$http
          .post("jobseeker/update-profile-image", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((response) => {
            this.profile_image = response.data.data;
            this.$toast.success(response.data.message, {
              timeout: 2000,
            });
          })
          .catch((error) => {
            this.profile_image = this.getUser.profile_image;
            this.$toast.error(error.response.data.message, {
              timeout: 2000,
            });
          });
      }
    },

    //drop file
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
.image-holder img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 1px solid #fb611e;
  padding: 4px;
}
.image-holder {
  position: relative;
  width: 200px;
  height: 200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding: 4px;
  margin-bottom: 10px;
}
.spinner-img-glow-loading {
  position: absolute;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  background: #eeeeeebf;
}
.upper-dash-nav {
  text-align: center;
}
.dashboard-nav-header {
  margin-top: -155px;
}
.imageUpload {
  display: none;
}
.custom-file-upload {
  position: absolute;
  bottom: 0px;
  right: -15px;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
.custom-file-upload:hover {
  cursor: pointer;
}
.custom-file-upload i {
  padding: 0px;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  color: white;
  background: #fb611e;
  padding: 5px;
  border-radius: 50%;
  border: 1px solid #fb611e;
}
.custom-file-upload i:hover {
  color: #fb611e;
  background: white;
}
.cursor-pointer {
  cursor: pointer;
}
</style>
