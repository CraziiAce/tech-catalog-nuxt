<template>
  <figure class="rounded-xl border-4 m-12 p-2">
    <h1 class="text-center">{{ name }}</h1>
    <img :src="img" :alt="name" class="w-11/12 align-center" />
  </figure>
</template>
<script>
export default {
  props: {
    img: {
      required: false,
      type: String,
      default: "https://via.placeholder.com/512"
    },
    name: {
      required: true,
      type: String,
      default: "Catalog Item"
    }
  }
};
</script>
