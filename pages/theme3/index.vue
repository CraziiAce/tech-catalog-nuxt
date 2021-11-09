<template>
  <h1
    class="font-extrabold text-center text-7xl pt-8"
    style="font-family: acumin-pro;"
  >
    Logan Tech Catalog 3
  </h1>
</template>

<script>
export default {
  mounted() {
    checkCookie("session_token", document);
  },
  head: {
    link: [
      {
        rel: "stylesheet",
        href: "https://use.typekit.net/fbp8sfd.css"
      }
    ]
  }
};
</script>

<style></style>
