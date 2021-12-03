<template>
  <div class="min-h-screen" style="text-align: center;">
    <h1 text-align="center" class="font-extrabold text-5xl mt-3">
      {{ itemData.name }}
    </h1>
    <img
      :src="
        'https://tech-catalog-images.s3.us-west-1.amazonaws.com/' +
          itemData.key +
          '.png'
      "
      class="my-6 justify-center"
      style="margin-left: 25%; margin-right: 25%; width: 50%;"
    />
    <p>{{ itemData.description }}</p>
  </div>
</template>
<script>
export default {
  mounted() {
    checkCookie("session_token", document);
    pageLoad(document);
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
