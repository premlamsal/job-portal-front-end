<template>
  <div></div>
</template>
<script>
export default {
  name: "Dropbox",
  delimiters: ["${", "}"], // Avoid Twig conflicts
  data() {
    return {
      filelist: [], // Store our uploaded files
    };
  },
  created() {},
  methods: {
    onChange() {
      this.filelist = [...this.$refs.file.files];
    },
    remove(i) {
      this.filelist.splice(i, 1);
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
  },
};
</script>

<style scoped></style>
