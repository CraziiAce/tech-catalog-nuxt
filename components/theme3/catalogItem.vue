<template>
  <figure class="rounded-none border-4 m-12 p-2 h-auto bg-gray-900 text-white">
    <h1 class="text-center">{{ name }}</h1>
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
  }
};
</script>
