<template>
  <figure class="rounded-xl border-4 m-12 p-2 h-auto">
    <h1 class="text-center" style="font-family: acumin-pro;">{{ name }}</h1>
    <div class="w-full h-full">
      <img :src="img" :alt="name" class="w-auto h-auto align-center" />
    </div>
  </figure>
</template>
<script>
export default {
  props: {
    img: {
      required: false,
      type: String,
      default: "https://via.placeholder.com/720"
    },
    name: {
      required: true,
      type: String,
      default: "Catalog Item"
    }
  },
  link: [{ rel: "stylesheet", href: "https://use.typekit.net/fbp8sfd.css" }]
};
</script>
