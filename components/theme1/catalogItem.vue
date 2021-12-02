<template>
  <figure
    class="rounded-xl border-4 w-auto pb-2 rounded sm:m-1.5 md:m-3md:mt-20 sm:mt-16 md:mb-20 sm:mb-16"
  >
    <a :href="id_url"></a>

    <h1
      class="text-center font-normal border-gray-900"
      style="font-family: acumin-pro;"
    >
      {{ name }}
    </h1>
    <img :src="img" :alt="name" class="w-11/12 h-11/12 align-center mx-auto" />
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
    },
    id_url: {
      required: true,
      type: String
    }
  },
  link: [{ rel: "stylesheet", href: "https://use.typekit.net/fbp8sfd.css" }]
};
</script>
