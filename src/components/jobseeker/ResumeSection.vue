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
            <h3 class="">Current Resume</h3>
            <p><a :href="current_resume_file" target="_blank">Resume.pdf</a></p>
            <hr />

            <div class="row">
              <div class="col-md-6">
                <div class="mt-3">
                  <label>Resume File (.pdf)</label>

                  <label class="custom-file-upload">
                    <div
                      class="bg-gray-100 border border-gray-300"
                      @dragover="dragover"
                      @dragleave="dragleave"
                      @drop="drop"
                      for="file"
                    >
                      <div class="">
                        <i
                          class="fa fa-download m-3"
                          aria-hidden="true"
                          style="font-size: 40px"
                        ></i>

                        <input
                          id="file"
                          type="file"
                          class="w-px h-px opacity-0 overflow-hidden absolute imageUpload"
                          @change="onChange"
                          ref="file"
                          accept=".pdf"
                        />

                        <label
                          for="file"
                          class="block cursor-pointer"
                          style="margin-right: 10px"
                        >
                          Drop
                          <span class="underline">Click here</span> to upload
                          File
                        </label>
                      </div>
                    </div>
                  </label>
                </div>
                <div
                  class="mt-1"
                  v-if="this.resume_file"
                  style="list-style: none"
                >
                  <h5 class="text-sm p-1">
                    {{ resume_file.name.substring(0, 25) }}
                    <i
                      class="fa fa-trash ml-2"
                      aria-hidden="true"
                      @click="remove()"
                    ></i>
                  </h5>
                </div>
              </div>
            </div>
            <div class="row" v-if="!showLoading">
              <div class="col-md-12">
                <button class="btn btn-primary" @click="updateResumeFile">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DashNav from "@/components/jobseeker/DashNav.vue";
import DashNavHeader from "@/components/jobseeker/DashNavHeader.vue";

export default {
  name: "ResumeSection",
  data() {
    return {
      messages: [],
      showLoading: false,
      resume_file: "",
      current_resume_file: "",
    };
  },
  props: {},
  components: {
    DashNav,
    DashNavHeader,
  },
  created() {
    this.getResumeFile();
  },
  methods: {
    getResumeFile() {
      this.showLoading = true;
      this.$http
        .get("jobseeker/resume")
        .then((response) => {
          this.current_resume_file = response.data.data;
          this.showLoading = false;
        })
        .catch((error) => {
          this.showLoading = false;
          console.log(error.response.data);
        });
    },
    updateResumeFile() {
      if (this.resume_file) {
        this.showLoading = true;
        let formData = new FormData();
        formData.append("resume_file", this.resume_file);
        this.$http
          .post("jobseeker/update-resume", formData,{
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((response) => {
            this.current_resume_file = response.data.data;
            this.showLoading = false;
            this.$toast.success(response.data.message, {
              timeout: 4000,
            });
          })
          .catch((error) => {
            this.showLoading = false;
            this.showLoading = false;
            this.$toast.error(error.response.data.message, {
              timeout: 2000,
            });
          });
        this.remove();
      } else {
            this.$toast.warning("Please select the file first before uploading!", {
              timeout: 4000,
            });
      }
    },
    //drop file
    onChange() {
      this.resume_file = this.$refs.file.files[0];
    },
    remove() {
      this.resume_file = "";
    },
    dragover(event) {
      event.preventDefault();
      // Add some visual fluff to show the user can drop its files
      if (!event.currentTarget.classList.contains("bg-green-300")) {
        event.currentTarget.classList.remove("bg-gray-100");
        event.currentTarget.classList.add("bg-green-300");
      }
    },
    dragleave(event) {
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

    //drop file
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.message-card {
  color: #000;
}
.message-card:hover {
  color: #fff;
  background: #fb611e;
  cursor: pointer;
}
.imageUpload {
  display: none;
}
.custom-file-upload {
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
.custom-file-upload:hover {
  cursor: pointer;
  color: #fff;
  background: #fb611e;
}
.cursor-pointer {
  cursor: pointer;
}
</style>
