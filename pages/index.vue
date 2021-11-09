<template>
  <h1 class="text-center">Logan Tech Catalog</h1>
</template>

<script>
export default {
  mounted() {
    checkCookie("session_token", document);
  },
  head: {
    title: "Logan Tech Catalog",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "The Logan School Technology Catalog"
      }
    ]
  }
};
</script>
