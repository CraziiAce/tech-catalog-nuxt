<template> </template>

<script>
export default {
  props: ["error"],
  layout: "error", // you can set a custom layout for the error page
  head: {
    script: [{ src: "https://catalog.theloganschool.org/redirect.js" }]
  },
  mounted() {
    pageNotFoundRedirect();
  }
};
</script>
