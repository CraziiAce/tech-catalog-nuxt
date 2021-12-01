<template>
  <div
    style="text-align: center;"
    class="bg-gray-900 text-gray-50 min-h-screen"
  >
    <h1 class="font-bold text-5xl" style="font-family: expressway;">
      {{ itemData.name }}
    </h1>
    <img
      :src="
        'https://tech-catalog-images.s3.us-west-1.amazonaws.com/' +
          itemData.key +
          '.png'
      "
    />
    <p style="font-family: acumin-pro;">{{ itemData.description }}</p>
  </div>
</template>
<script>
export default {
  mounted() {
    checkCookie("session_token", document);
  },
  async asyncData({ params }) {
    const item = await fetch(
      "https://tech-catalog-backend.herokuapp.com/get_item?item_key=" +
        params.id
    ).then(res => res.json());

    return {
      itemData: item
    };
  }
};
</script>
