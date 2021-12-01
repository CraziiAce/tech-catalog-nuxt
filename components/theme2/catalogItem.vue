<template>
  <figure
    class="rounded-xl border-4 w-auto pb-2 rounded sm:m-1.5 md:m-3md:mt-20 sm:mt-16 md:mb-20 sm:mb-16 border-blue-300"
    style="background-color: #F3F7F0;"
  >
    <a :href="id_url"></a>

    <h1 class="text-center font-black" style="font-family: acumin-pro;">
      {{ name }}
    </h1>
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
    },
    id_url: {
      required: true,
      type: String
    }
  },
  link: [{ rel: "stylesheet", href: "https://use.typekit.net/fbp8sfd.css" }]
};
</script>
