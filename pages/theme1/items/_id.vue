<template>
  <div>
    <h1 class="font-extrabold text-5xl text-center">
      {{ itemData.name }}
    </h1>
  </div>
</template>
<script>
export default {
  mounted() {
    checkCookie("session_token", document);
  },
  async asyncData({ params }) {
    const item = await fetch(
      "https://8g4m6i.deta.dev/get_item?item_key=" + params.id
    ).then(res => res.json());

    return {
      itemData: item
    };
  }
};
</script>
