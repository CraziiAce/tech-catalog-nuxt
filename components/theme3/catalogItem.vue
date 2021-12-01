<template>
  <figure
    class="rounded-xl border-4 w-auto pb-2 rounded sm:m-1.5 md:m-3md:mt-20 sm:mt-16 md:mb-20 sm:mb-16 bg-gray-800 text-gray-50 border-gray-400"
  >
    <a :href="id_url">
      <h1 class="text-center font-light " style="font-family: acumin-pro;">
        {{ name }}
      </h1>
      <div class="w-full h-full">
        <img :src="img" :alt="name" class="w-auto h-auto align-center" />
      </div>
    </a>
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
  link: [{ rel: "stylesheet", href: "https://use.typekit.net/fbp8sfd.css" }],
  mounted() {
    console.log(this.id_url);
  }
};
</script>
