<template>
  <!-- <figure class="rounded-xl border-4 m-12 p-2 lg:w-1/4 md:w-1/3 sm:w-2/3"> -->
  <figure class="rounded-xl border-4 w-auto">
    <a :href="id_url"></a>

    <h1
      class="text-center font-black border-gray-900"
      style="font-family: acumin-pro;"
    >
      {{ name }}
    </h1>
    <div class="w-full h-full">
      <img :src="img" :alt="name" class="w-11/12 h-11/12 align-center" />
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
    },
    id_url: {
      required: true,
      type: String
    }
  },
  link: [{ rel: "stylesheet", href: "https://use.typekit.net/fbp8sfd.css" }]
};
</script>
