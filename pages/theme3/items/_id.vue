<template>
  <div>
    <h1 text-align="center" class="font-extrabold text-5xl">
      {{ itemData.name }}
    </h1>
    <img
      :src="
        'https://tech-catalog-backend.herokuapp.com/get_item_image?item_key=' +
          itemData.key
      "
    />
    <p>{{ itemData.description }}</p>
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
